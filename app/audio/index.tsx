import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Audio } from 'expo-av';
import ScreenLayout from '../../components/screen-layout';
import { styles } from './styles';
import { ROUTES, POEM_TEXT } from '../../services/constants';

// Define timestamped lines to sync with the audio
interface TimedLine {
  text: string;
  startTime: number; // in seconds
  endTime: number; // in seconds
}

// Adjusted timestamps based on exact timing from the recording
const TIMED_POEM_LINES: TimedLine[] = [
  { text: "I met a traveller from an antique land,", startTime: 0, endTime: 2 },
  { text: "Who said—\"Two vast and trunkless legs of stone", startTime: 2, endTime: 5 },
  { text: "Stand in the desert. . . . Near them, on the sand,", startTime: 5, endTime: 7.5 },
  { text: "Half sunk a shattered visage lies, whose frown,", startTime: 7.5, endTime: 11.5 },
  { text: "And wrinkled lip, and sneer of cold command,", startTime: 11.5, endTime: 13.5 },
  { text: "Tell that its sculptor well those passions read", startTime: 13.5, endTime: 16 },
  { text: "Which yet survive, stamped on these lifeless things,", startTime: 16, endTime: 19 },
  { text: "The hand that mocked them, and the heart that fed;", startTime: 19, endTime: 21.5 },
  { text: "And on the pedestal, these words appear:", startTime: 21.5, endTime: 24 },
  { text: "My name is Ozymandias, King of Kings;", startTime: 24, endTime: 26 },
  { text: "Look on my Works, ye Mighty, and despair!", startTime: 26, endTime: 28.6 },
  { text: "Nothing beside remains. Round the decay", startTime: 28.6, endTime: 31 },
  { text: "Of that colossal Wreck, boundless and bare", startTime: 31, endTime: 33.7 },
  { text: "The lone and level sands stretch far away.\"", startTime: 33.7, endTime: 36 }
];

const AudioScreen: React.FC = () => {
  const navigation = useNavigation();
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [position, setPosition] = useState(0);
  const [currentLineIndex, setCurrentLineIndex] = useState(-1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const positionUpdateInterval = useRef<NodeJS.Timeout | null>(null);

  // Load the sound file when component mounts
  useEffect(() => {
    loadAudio();

    // Cleanup on component unmount
    return () => {
      if (positionUpdateInterval.current) {
        clearInterval(positionUpdateInterval.current);
      }
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, []);

  // Update current line index based on playback position
  useEffect(() => {
    updateCurrentLine();
  }, [position]);

  const loadAudio = async () => {
    try {
      setLoading(true);
      setError("");

      // Ensure that audio permissions are granted
      const permissionResponse = await Audio.requestPermissionsAsync();
      if (!permissionResponse.granted) {
        throw new Error("Audio playback permissions not granted");
      }

      await Audio.setAudioModeAsync({
        playsInSilentModeIOS: true,
        staysActiveInBackground: true,
        shouldDuckAndroid: true,
      });

      try {
        // Try to load the audio file
        const { sound: newSound } = await Audio.Sound.createAsync(
          require('../../assets/audio/ozymandias-recording.wav'),
          { shouldPlay: false },
          onPlaybackStatusUpdate
        );
        
        setSound(newSound);
        setLoading(false);
      } catch (fileError) {
        // If file doesn't exist yet, set a friendly error message
        console.warn("Audio file not found:", fileError);
        setError("Audio file not found. Please add ozymandias-recording.wav to assets/audio directory.");
        setLoading(false);
      }
    } catch (err: any) {
      console.error("Error loading audio:", err);
      setError(err.message || "Failed to load audio");
      setLoading(false);
    }
  };

  const onPlaybackStatusUpdate = (status: any) => {
    if (status.isLoaded) {
      setDuration(status.durationMillis / 1000);
      setPosition(status.positionMillis / 1000);
      setIsPlaying(status.isPlaying);

      if (status.didJustFinish) {
        resetPlayback();
      }
    }
  };

  const updateCurrentLine = () => {
    // Find the current line based on position
    const activeLineIndex = TIMED_POEM_LINES.findIndex(
      line => position >= line.startTime && position <= line.endTime
    );
    
    if (activeLineIndex !== currentLineIndex) {
      setCurrentLineIndex(activeLineIndex);
    }
  };

  const handlePlayPause = async () => {
    if (!sound) return;

    try {
      if (isPlaying) {
        await sound.pauseAsync();
        if (positionUpdateInterval.current) {
          clearInterval(positionUpdateInterval.current);
          positionUpdateInterval.current = null;
        }
      } else {
        await sound.playAsync();
        // Set up interval to update position more frequently than the status updates
        if (!positionUpdateInterval.current) {
          positionUpdateInterval.current = setInterval(async () => {
            if (sound) {
              const status = await sound.getStatusAsync();
              if (status.isLoaded) {
                setPosition(status.positionMillis / 1000);
              }
            }
          }, 100); // Update every 100ms for smoother progress
        }
      }
    } catch (err) {
      console.error("Error controlling playback:", err);
    }
  };

  const handleSeek = async (value: number) => {
    if (!sound) return;
    
    try {
      const newPosition = value * duration;
      await sound.setPositionAsync(newPosition * 1000);
      setPosition(newPosition);
    } catch (err) {
      console.error("Error seeking:", err);
    }
  };

  const resetPlayback = async () => {
    if (!sound) return;
    
    try {
      await sound.setPositionAsync(0);
      setPosition(0);
      setCurrentLineIndex(-1);
      setIsPlaying(false);
      if (positionUpdateInterval.current) {
        clearInterval(positionUpdateInterval.current);
        positionUpdateInterval.current = null;
      }
    } catch (err) {
      console.error("Error resetting playback:", err);
    }
  };

  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <ScreenLayout title="Audio Reading" currentScreen="Audio" showBackButton>
      <View style={styles.content}>
        <Text style={styles.title}>Listen to Ozymandias</Text>
        <Text style={styles.description}>
          Experience the poem through an audio reading that captures the rhythm and emotional 
          impact of Shelley's words. Follow along with the highlighted text as you listen.
        </Text>
        
        <View style={styles.audioPlayer}>
          <Text style={styles.audioTitle}>Ozymandias by Percy Bysshe Shelley</Text>
          
          <View style={styles.timeDisplay}>
            <Text style={styles.timeText}>{formatTime(position)}</Text>
            <Text style={styles.timeText}>{formatTime(duration || 36)}</Text>
          </View>
          
          <View style={styles.progressContainer}>
            <View 
              style={[
                styles.progressBar,
                { width: `${((position || 0) / (duration || 36)) * 100}%` }
              ]} 
            />
            <View style={styles.progressInteraction}>
              {/* Add 10 invisible buttons across the progress bar for seeking */}
              {Array.from({ length: 10 }).map((_, index) => (
                <TouchableOpacity 
                  key={index}
                  style={styles.seekButton}
                  onPress={() => handleSeek((index + 1) / 10)}
                >
                  <View />
                </TouchableOpacity>
              ))}
            </View>
          </View>
          
          <View style={styles.audioControls}>
            {loading ? (
              <Text style={styles.loadingText}>Loading audio...</Text>
            ) : error ? (
              <Text style={styles.errorText}>{error}</Text>
            ) : (
              <>
                <TouchableOpacity 
                  style={styles.controlButton} 
                  onPress={resetPlayback}
                >
                  <Text style={styles.controlButtonText}>⏮</Text>
                </TouchableOpacity>
                
                <TouchableOpacity 
                  style={styles.playButton} 
                  onPress={handlePlayPause}
                >
                  <Text style={styles.playButtonText}>
                    {isPlaying ? '❚❚' : '▶'}
                  </Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
        
        <View style={styles.poemText}>
          {TIMED_POEM_LINES.map((line, index) => (
            <Text 
              key={index} 
              style={[
                styles.poemTextContent, 
                index === currentLineIndex && styles.currentLine
              ]}
            >
              {line.text}
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
    </ScreenLayout>
  );
};

export default AudioScreen; 