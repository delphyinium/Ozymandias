import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { styles } from './styles';
import { HeaderProps } from './types';
import { RootStackParamList } from '../../services/types/navigation-types';

const Header: React.FC<HeaderProps> = ({ 
  title, 
  showBackButton = false, 
  onBackPress 
}) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const handleBackPress = () => {
    if (onBackPress) {
      onBackPress();
    } else {
      navigation.goBack();
    }
  };

  return (
    <View style={styles.header}>
      {showBackButton && (
        <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
      )}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

export default Header; 