import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { styles } from './styles';
import { ROUTES, POEM_TEXT } from '../../services/constants';

const AudioScreen: React.FC = () => {
  const navigation = useNavigation();
  const [isPlaying, setIsPlaying] = useState(false);
  const totalDuration = 90; // 1:30 in seconds

  // Mock data for a placeholder audio player
  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  // Divide the poem into lines for display
  const poemLines = POEM_TEXT.split('\n');
  
  // Determine which line should be highlighted based on current time
  const getCurrentLine = () => {
    // This is a simplistic implementation - in a real app you'd sync this with audio timestamps
    // Replace currentTime with a state variable tied to actual audio playback position if implementing fully
    const placeholderCurrentTime = 0; // Placeholder for currentTime
    if (placeholderCurrentTime < 15) return 0;
    if (placeholderCurrentTime < 25) return 1;
    if (placeholderCurrentTime < 35) return 2;
    if (placeholderCurrentTime < 42) return 3;
    if (placeholderCurrentTime < 50) return 4;
    if (placeholderCurrentTime < 58) return 5;
    if (placeholderCurrentTime < 66) return 6;
    if (placeholderCurrentTime < 72) return 7;
    if (placeholderCurrentTime < 78) return 8;
    if (placeholderCurrentTime < 82) return 9;
    if (placeholderCurrentTime < 86) return 10;
    if (placeholderCurrentTime < 90) return 11;
    return 12;
  };

  const currentLineIndex = getCurrentLine();

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Audio Reading" showBackButton />
      
      <View style={styles.content}>
        <Text style={styles.title}>Listen to Ozymandias</Text>
        <Text style={styles.description}>
          Experience the poem through an audio reading that captures the rhythm and emotional 
          impact of Shelley's words. Follow along with the highlighted text as you listen.
        </Text>
        
        <View style={styles.audioPlayer}>
          <Text style={styles.audioTitle}>Ozymandias by Percy Bysshe Shelley</Text>
          
          <View style={styles.timeDisplay}>
            {/* Replace 0 with actual currentTime state when implemented */}
            <Text style={styles.timeText}>{formatTime(0)}</Text>
            <Text style={styles.timeText}>{formatTime(totalDuration)}</Text>
          </View>
          
          <View style={styles.progressContainer}>
            <View 
              style={[
                styles.progressBar,
                // Replace 0 with actual currentTime state when implemented
                { width: `${(0 / totalDuration) * 100}%` }
              ]} 
            />
          </View>
          
          <View style={styles.audioControls}>
            <TouchableOpacity style={styles.playButton} onPress={handlePlayPause}>
              <Text style={{ color: 'white', fontSize: 24 }}>
                {isPlaying ? '❚❚' : '▶'}
              </Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.audioInfo}>
            <Text style={styles.audioInfoText}>
            
            </Text>
          </View>
        </View>
        
        <View style={styles.poemText}>
          {poemLines.map((line, index) => (
            <Text 
              key={index} 
              style={[
                styles.poemTextContent, 
                index === currentLineIndex && styles.currentLine
              ]}
            >
              {line}
            </Text>
          ))}
        </View>
        
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.navButton}
            onPress={() => navigation.navigate(ROUTES.TIMELINE as never)}
          >
            <Text style={styles.buttonText}>Explore Timeline</Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={styles.navButton}
            onPress={() => navigation.navigate(ROUTES.GALLERY as never)}
          >
            <Text style={styles.buttonText}>Back to Gallery</Text>
          </TouchableOpacity>
        </View>
      </View>
      
      <Footer currentScreen={ROUTES.AUDIO} />
    </SafeAreaView>
  );
};

export default AudioScreen; 