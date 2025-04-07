import React, { useState, useRef } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, Dimensions, NativeSyntheticEvent, NativeScrollEvent } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import ScreenLayout from '../../components/screen-layout';
import { styles } from './styles';
import { galleryItems } from '../../services/data/gallery-data';
import { RootStackParamList } from '../../services/types/navigation-types';

const GalleryScreen: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);
  const { width } = Dimensions.get('window');

  const renderItem = ({ item }: { item: typeof galleryItems[0] }) => (
    <View style={[styles.cardContainer, { width }]}>
      <View style={styles.card}>
        <View style={styles.imageContainer}>
          <Image 
            source={item.imageSource} 
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>{item.title}</Text>
          <Text style={styles.cardDescription}>{item.description}</Text>
        </View>
      </View>
    </View>
  );

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const index = event.nativeEvent.contentOffset.x / slideSize;
    const roundIndex = Math.round(index);
    setActiveIndex(roundIndex);
  };

  const scrollToIndex = (index: number) => {
    if (flatListRef.current) {
      flatListRef.current.scrollToOffset({
        offset: index * width,
        animated: true
      });
      setActiveIndex(index);
    }
  };

  return (
    <ScreenLayout title="Gallery" currentScreen="Gallery" showBackButton>
      <View style={styles.intro}>
        <Text style={styles.introTitle}>Visual Exploration</Text>
        <Text style={styles.introText}>
          This gallery showcases images related to "Ozymandias," including artwork that captures 
          the poem's themes, historical artifacts that inspired it, and the ancient Egyptian 
          context it references.
        </Text>
      </View>

      <FlatList
        ref={flatListRef}
        data={galleryItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        snapToInterval={width}
        snapToAlignment="center"
        decelerationRate="fast"
        style={styles.galleryList}
      />

      <View style={styles.paginationContainer}>
        {galleryItems.map((_, index) => (
          <TouchableOpacity 
            key={index} 
            style={[
              styles.paginationDot, 
              activeIndex === index && styles.paginationDotActive
            ]}
            onPress={() => scrollToIndex(index)}
          />
        ))}
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate('Audio')}
        >
          <Text style={styles.buttonText}>Listen to the Poem</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate('LiteraryDevices')}
        >
          <Text style={styles.buttonText}>Back to Literary Devices</Text>
        </TouchableOpacity>
      </View>
    </ScreenLayout>
  );
};

export default GalleryScreen; 