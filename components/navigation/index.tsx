import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ROUTES } from '../../services/constants';
import { RootStackParamList } from '../../services/types/navigation-types';

// Import screens
import HomeScreen from '../../app/home';
import PoemScreen from '../../app/poem';
import ThemesScreen from '../../app/themes';
import LiteraryDevicesScreen from '../../app/literary-devices';
import GalleryScreen from '../../app/gallery';
import AudioScreen from '../../app/audio';
import TimelineScreen from '../../app/timeline';
import ConclusionScreen from '../../app/conclusion';

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: '#fff' }
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Poem" component={PoemScreen} />
        <Stack.Screen name="Themes" component={ThemesScreen} />
        <Stack.Screen name="LiteraryDevices" component={LiteraryDevicesScreen} />
        <Stack.Screen name="Gallery" component={GalleryScreen} />
        <Stack.Screen name="Audio" component={AudioScreen} />
        <Stack.Screen name="Timeline" component={TimelineScreen} />
        <Stack.Screen name="Conclusion" component={ConclusionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator; 