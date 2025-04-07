import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { styles } from './styles';
import { ROUTES } from '../../services/constants';

const ConclusionScreen: React.FC = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Conclusion" showBackButton />
      
      <ScrollView style={styles.content}>
        <Text style={styles.title}>Reflections on Ozymandias</Text>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Enduring Relevance</Text>
          <Text style={styles.text}>
            Though written over 200 years ago, "Ozymandias" remains remarkably relevant in our modern world. 
            The poem's central message about the temporary nature of power and human achievements continues to 
            resonate with contemporary readers.
          </Text>
          <Text style={styles.text}>
            In an age where political leaders still commission grand monuments and corporations erect imposing 
            headquarters, Shelley's warning about the inevitable erosion of power and legacy by time serves as 
            a powerful reminder of human limitations.
          </Text>
        </View>
        
        <View style={styles.highlight}>
          <Text style={styles.highlightTitle}>Power of Art</Text>
          <Text style={styles.highlightText}>
            Perhaps the most profound irony in "Ozymandias" is that while the pharaoh's empire has crumbled, 
            Shelley's poem about that downfall has survived for centuries. This speaks to the poem's secondary 
            theme: that art may outlast the empires it depicts. Through Shelley's artistic creation, the very 
            message that Ozymandias feared—his own obsolescence—has been preserved.
          </Text>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Universal Human Experience</Text>
          <Text style={styles.text}>
            At its core, "Ozymandias" touches on fundamental human concerns: mortality, legacy, and the 
            desire to create something lasting. By framing these themes within the story of a forgotten 
            ruler, Shelley invites readers to consider their own impermanence and what might remain of 
            their accomplishments in the distant future.
          </Text>
          <Text style={styles.quotedText}>
            "Look on my Works, ye Mighty, and despair!"
          </Text>
          <Text style={styles.text}>
            This command, intended as a boast about Ozymandias's greatness, becomes instead a warning about 
            the futility of human pride. It encourages modern readers to reflect on what truly matters in 
            the brief span of human life.
          </Text>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>A Literary Achievement</Text>
          <Text style={styles.text}>
            Beyond its philosophical content, "Ozymandias" is celebrated for its technical brilliance. 
            In just fourteen lines, Shelley creates a complex narrative frame (the traveler's tale told to 
            the narrator), vividly describes the shattered statue, and delivers a profound meditation on time 
            and power.
          </Text>
          <Text style={styles.text}>
            The poem's unconventional sonnet form mirrors its thematic concern with the breaking of traditional 
            structures. This technical sophistication has helped ensure the poem's place in the literary canon 
            and its continued study in classrooms around the world.
          </Text>
        </View>
        
        <View style={styles.highlight}>
          <Text style={styles.highlightTitle}>Final Thought</Text>
          <Text style={styles.highlightText}>
            As we conclude our exploration of "Ozymandias," we can appreciate how Shelley created a work that 
            simultaneously captures a specific historical moment and speaks to universal human experiences. 
            The poem's sparse desert landscape, with its broken statue, becomes a powerful symbol for the 
            transience of all human endeavors against the vastness of time.
          </Text>
        </View>
        
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.navButton}
            onPress={() => navigation.navigate(ROUTES.HOME as never)}
          >
            <Text style={styles.buttonText}>Back to Home</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      
      <Footer currentScreen={ROUTES.CONCLUSION} />
    </SafeAreaView>
  );
};

export default ConclusionScreen; 