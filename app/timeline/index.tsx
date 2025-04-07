import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { styles } from './styles';
import { ROUTES } from '../../services/constants';
import { timelineEvents } from '../../services/data/poem-data';

const TimelineScreen: React.FC = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Historical Timeline" showBackButton />
      
      <ScrollView style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Historical Context</Text>
          <Text style={styles.description}>
            Explore the key historical events related to "Ozymandias," from the reign of the 
            Egyptian pharaoh Ramesses II (the likely inspiration for the poem's subject) to 
            the poem's publication in the early 19th century.
          </Text>
        </View>
        
        <View style={styles.timelineContainer}>
          {timelineEvents.map((event, index) => {
            const isLast = index === timelineEvents.length - 1;
            
            return (
              <View key={event.id} style={styles.timelineEvent}>
                <View style={styles.timelineDate}>
                  <Text style={styles.timelineYear}>{event.year}</Text>
                </View>
                
                <View>
                  <View style={styles.timelineMarker} />
                  <View style={[styles.timelineLine, { height: isLast ? 0 : 120 }]} />
                </View>
                
                <View style={styles.timelineContent}>
                  <Text style={styles.timelineTitle}>{event.title}</Text>
                  <Text style={styles.timelineText}>{event.description}</Text>
                </View>
              </View>
            );
          })}
        </View>
        
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.navButton}
            onPress={() => navigation.navigate(ROUTES.CONCLUSION as never)}
          >
            <Text style={styles.buttonText}>Read Conclusion</Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={styles.navButton}
            onPress={() => navigation.navigate(ROUTES.AUDIO as never)}
          >
            <Text style={styles.buttonText}>Back to Audio</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      
      <Footer currentScreen={ROUTES.TIMELINE} />
    </SafeAreaView>
  );
};

export default TimelineScreen; 