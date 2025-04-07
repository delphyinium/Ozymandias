import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { styles } from './styles';
import { FooterProps } from './types';
import { ROUTES } from '../../services/constants';
import { RootStackParamList } from '../../services/types/navigation-types';

type NavItem = {
  route: keyof RootStackParamList;
  label: string;
};

const navItems: NavItem[] = [
  { route: 'Home', label: 'Home' },
  { route: 'Poem', label: 'Poem' },
  { route: 'Themes', label: 'Themes' },
  { route: 'LiteraryDevices', label: 'Devices' },
  { route: 'Gallery', label: 'Gallery' },
  { route: 'Audio', label: 'Audio' },
  { route: 'Timeline', label: 'Timeline' },
  { route: 'Conclusion', label: 'Reflect' },
];

const Footer: React.FC<FooterProps> = ({ currentScreen }) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.footer}>
      {navItems.map((item) => {
        const isActive = currentScreen === item.route;
        return (
          <TouchableOpacity
            key={item.route}
            style={styles.navItem}
            onPress={() => navigation.navigate(item.route)}
          >
            <Text style={[styles.navText, isActive && styles.activeNavText]}>
              {item.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default Footer; 