import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AppNavigator from './components/navigation';
import { COLORS } from './services/constants';

export default function App() {
  const [showFallback, setShowFallback] = useState(true);

  // Simple fallback UI to ensure something displays
  if (showFallback) {
    return (
      <SafeAreaView style={styles.fallbackContainer}>
        <Text style={styles.title}>Ozymandias</Text>
        <Text style={styles.subtitle}>A Digital Analysis of Percy Bysshe Shelley's Poem</Text>
        
        <View style={styles.card}>
          <Text style={styles.cardText}>
            "My name is Ozymandias, King of Kings;{'\n'}
            Look on my Works, ye Mighty, and despair!"
          </Text>
        </View>
        
        <TouchableOpacity 
          style={styles.button}
          onPress={() => setShowFallback(false)}
        >
          <Text style={styles.buttonText}>Enter Interactive Experience</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <StatusBar style="light" backgroundColor={COLORS.primary} />
        <View style={{ flex: 1 }}>
          <AppNavigator />
          <View style={{ position: 'absolute', bottom: 20, right: 20, backgroundColor: 'rgba(0,0,0,0.5)', padding: 10 }}>
            <Text style={{ color: 'white' }}>Debug: App is running</Text>
          </View>
        </View>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  fallbackContainer: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#3F51B5',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#555',
    marginBottom: 40,
    textAlign: 'center',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 20,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    marginBottom: 40,
  },
  cardText: {
    fontSize: 18,
    lineHeight: 28,
    fontStyle: 'italic',
    textAlign: 'center',
    color: '#333',
  },
  button: {
    backgroundColor: '#3F51B5',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
