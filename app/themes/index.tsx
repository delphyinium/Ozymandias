import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { styles } from './styles';
import { ROUTES } from '../../services/constants';
import { themes } from '../../services/data/poem-data';

const ThemesScreen: React.FC = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Themes" showBackButton />
      
      <ScrollView style={styles.content}>
        <View style={styles.intro}>
          <Text style={styles.introTitle}>Major Themes in Ozymandias</Text>
          <Text style={styles.introText}>
            Shelley's "Ozymandias" explores several interconnected themes that reflect both the 
            Romantic sensibilities of its time and universal human concerns. The poem is rich with 
            commentary on power, time, nature, and artistic legacy.
          </Text>
        </View>
        
        <View style={styles.themesContainer}>
          {themes.map((theme) => (
            <View key={theme.id} style={styles.themeCard}>
              <Text style={styles.themeTitle}>{theme.title}</Text>
              <Text style={styles.themeDescription}>{theme.description}</Text>
              <Text style={styles.themeAnalysis}>{theme.analysis}</Text>
            </View>
          ))}
        </View>
        
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.navButton}
            onPress={() => navigation.navigate(ROUTES.LITERARY_DEVICES as never)}
          >
            <Text style={styles.buttonText}>Explore Literary Devices</Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={styles.navButton}
            onPress={() => navigation.navigate(ROUTES.POEM as never)}
          >
            <Text style={styles.buttonText}>Back to Poem</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      
      <Footer currentScreen={ROUTES.THEMES} />
    </SafeAreaView>
  );
};

export default ThemesScreen; 