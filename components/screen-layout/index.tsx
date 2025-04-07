import React, { ReactNode } from 'react';
import { View, ScrollView, SafeAreaView, StyleSheet, Platform } from 'react-native';
import Header from '../header';
import Footer from '../footer';
import { styles } from './styles';
import { COLORS } from '../../services/constants';

interface ScreenLayoutProps {
  children: ReactNode;
  title: string;
  currentScreen: string;
  showBackButton?: boolean;
  onBackPress?: () => void;
}

const FOOTER_HEIGHT = 60;

const ScreenLayout: React.FC<ScreenLayoutProps> = ({ 
  children, 
  title, 
  currentScreen,
  showBackButton = false,
  onBackPress
}) => {
  // Choose container based on platform
  const Container = Platform.OS === 'web' ? View : SafeAreaView;
  
  return (
    <Container style={styles.container}>
      <Header 
        title={title} 
        showBackButton={showBackButton} 
        onBackPress={onBackPress} 
      />
      
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={true}
      >
        {children}
      </ScrollView>
      
      <View style={styles.footerContainer}>
        <Footer currentScreen={currentScreen} />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: styles.background,
    paddingTop: Platform.OS === 'web' ? 0 : undefined, // Remove SafeAreaView padding on web
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 16,
    paddingBottom: FOOTER_HEIGHT + 20, // Padding for the footer height + buffer
    flexGrow: 1, // Allows the content to expand to fill available space
  },
  footerContainer: {
    height: FOOTER_HEIGHT,
    backgroundColor: styles.primary,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.2)',
  },
});

export default ScreenLayout;
