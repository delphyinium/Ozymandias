import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import ScreenLayout from '../../components/screen-layout';
import { styles } from './styles';
import { shelleyBio } from '../../services/data/poem-data';
import { RootStackParamList } from '../../services/types/navigation-types';

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <ScreenLayout title="Ozymandias" currentScreen="Home">
      <View style={styles.hero}>
        <Text style={styles.heroTitle}>Ozymandias</Text>
        <Text style={styles.heroSubtitle}>A Digital Analysis of Percy Bysshe Shelley's Masterpiece</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About This Project</Text>
        <Text style={styles.sectionText}>
          Welcome to a comprehensive digital analysis of "Ozymandias," one of the most renowned sonnets in English literature. 
          This interactive experience guides you through the poem's themes, literary devices, historical context, and enduring legacy.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About the Poet</Text>
        <View style={styles.bioContainer}>
          <Text style={styles.bioTitle}>{shelleyBio.name}</Text>
          
          <View style={styles.bioDetail}>
            <Text style={styles.bioLabel}>Lifespan:</Text>
            <Text style={styles.bioText}>{shelleyBio.lifespan}</Text>
          </View>
          
          <View style={styles.bioDetail}>
            <Text style={styles.bioLabel}>Nationality:</Text>
            <Text style={styles.bioText}>{shelleyBio.nationality}</Text>
          </View>
          
          <View style={styles.bioDetail}>
            <Text style={styles.bioLabel}>Movement:</Text>
            <Text style={styles.bioText}>{shelleyBio.movement}</Text>
          </View>
          
          <View style={styles.bioDetail}>
            <Text style={styles.bioLabel}>Significance:</Text>
            <Text style={styles.bioText}>{shelleyBio.significance}</Text>
          </View>
        </View>
        
        <Text style={styles.sectionText}>{shelleyBio.ozymandiasFact}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Historical Context</Text>
        <Text style={styles.sectionText}>
          "Ozymandias" was written during a time of intense political and social change in Europe. The poem, published in 1818, 
          reflects Shelley's political ideals and his belief in the inevitable fall of tyranny. It was inspired by the British 
          Museum's acquisition of a large fragment of a statue of Ramesses II, the Egyptian pharaoh who is believed to be the 
          inspiration for Ozymandias.
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.exploreButton}
          onPress={() => navigation.navigate('Poem')}
        >
          <Text style={styles.buttonText}>Read the Poem</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={styles.exploreButton}
          onPress={() => navigation.navigate('Themes')}
        >
          <Text style={styles.buttonText}>Explore Themes</Text>
        </TouchableOpacity>
      </View>
    </ScreenLayout>
  );
};

export default HomeScreen; 