import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { styles } from './styles';
import { ROUTES, POEM_TEXT } from '../../services/constants';

const PoemScreen: React.FC = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Header title="The Poem" showBackButton />
      
      <ScrollView style={styles.content}>
        <Text style={styles.poemTitle}>Ozymandias</Text>
        <Text style={styles.poetName}>By Percy Bysshe Shelley (1818)</Text>
        
        <View style={styles.poemContainer}>
          <Text style={styles.poemText}>{POEM_TEXT}</Text>
        </View>
        
        <View style={styles.highlightContainer}>
          <Text style={styles.highlightTitle}>About the Poem</Text>
          <Text style={styles.highlightText}>
            "Ozymandias" is a sonnet written by the English Romantic poet Percy Bysshe Shelley. First published in 
            the magazine The Examiner in January 1818, it is one of Shelley's most famous works. The poem explores 
            themes of impermanence, the arrogance of power, and the relationship between art and legacy.
          </Text>
        </View>
        
        <View style={styles.highlightContainer}>
          <Text style={styles.highlightTitle}>Poem Form</Text>
          <Text style={styles.highlightText}>
            While "Ozymandias" contains 14 lines like a traditional sonnet, its structure and rhyme scheme 
            are unconventional. Rather than following the strict Petrarchan or Shakespearean sonnet form, 
            Shelley adapts the sonnet structure to his thematic purposes, creating a unique rhyme scheme 
            (ABABACDCEDEFEF) that helps convey the poem's message about the transience of power.
          </Text>
        </View>
        
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.exploreButton}
            onPress={() => navigation.navigate(ROUTES.THEMES as never)}
          >
            <Text style={styles.buttonText}>Explore Themes</Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={styles.exploreButton}
            onPress={() => navigation.navigate(ROUTES.LITERARY_DEVICES as never)}
          >
            <Text style={styles.buttonText}>Analyze Literary Devices</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      
      <Footer currentScreen={ROUTES.POEM} />
    </SafeAreaView>
  );
};

export default PoemScreen; 