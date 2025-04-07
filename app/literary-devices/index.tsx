import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, SafeAreaView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { styles as screenStyles } from './styles';
import { literaryDevices } from '../../services/data/poem-data';
import { RootStackParamList } from '../../services/types/navigation-types';
import { COLORS } from '../../services/constants';

const LiteraryDevicesScreen: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const Container = Platform.OS === 'web' ? View : SafeAreaView;

  return (
    <Container style={styles.outerContainer}>
      <Header title="Literary Devices" showBackButton />
      
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={true}
        alwaysBounceVertical={false}
      >
        <View style={screenStyles.intro}>
          <Text style={screenStyles.introTitle}>Literary Devices in Ozymandias</Text>
          <Text style={screenStyles.introText}>
            Percy Bysshe Shelley employs various literary techniques to enhance the impact and meaning of "Ozymandias." 
            These devices work together to create a powerful meditation on the transience of power and the enduring 
            nature of art.
          </Text>
        </View>
        
        <View style={screenStyles.devicesContainer}>
          {literaryDevices.map((device) => (
            <View key={device.id} style={screenStyles.deviceCard}>
              <Text style={screenStyles.deviceTitle}>{device.title}</Text>
              <Text style={screenStyles.deviceDescription}>{device.description}</Text>
              
              <Text style={screenStyles.examplesTitle}>Examples:</Text>
              <View style={screenStyles.examplesList}>
                {device.examples.map((example, index) => (
                  <Text key={index} style={screenStyles.exampleItem}>• {example}</Text>
                ))}
              </View>
            </View>
          ))}
        </View>
        
        <View style={screenStyles.buttonContainer}>
          <TouchableOpacity
            style={screenStyles.navButton}
            onPress={() => navigation.navigate('Gallery')}
          >
            <Text style={screenStyles.buttonText}>Explore Gallery</Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={screenStyles.navButton}
            onPress={() => navigation.navigate('Themes')}
          >
            <Text style={screenStyles.buttonText}>Back to Themes</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      
      <View style={styles.footerContainer}>
        <Footer currentScreen="LiteraryDevices" />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingTop: Platform.OS === 'web' ? 0 : undefined,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 80,
  },
  footerContainer: {
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.2)',
    backgroundColor: COLORS.primary,
    height: 60,
  },
});

export default LiteraryDevicesScreen; 