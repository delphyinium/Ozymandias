import React, { useState, useRef, useEffect, useCallback } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, Dimensions, NativeSyntheticEvent, NativeScrollEvent, ActivityIndicator, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import ScreenLayout from '../../components/screen-layout';
import { styles } from './styles';
import { galleryItems, initializeImageCache, getImageSource } from '../../services/data/gallery-data';
import { RootStackParamList } from '../../services/types/navigation-types';
import { COLORS } from '../../services/constants';

type GalleryItemProps = {
  item: typeof galleryItems[0];
  width: number;
  isActive: boolean;
};

const GalleryItem: React.FC<GalleryItemProps> = ({ item, width, isActive }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const MAX_RETRIES = 3;
  const imageSource = useCallback(() => getImageSource(item.imageKey), [item.imageKey]);

  const handleRetry = () => {
    if (retryCount < MAX_RETRIES) {
      setIsLoading(true);
      setHasError(false);
      setRetryCount(prev => prev + 1);
    }
  };

  // Reset loading state when item changes
  useEffect(() => {
    // Only reset loading if image wasn't previously loaded
    if (!imageLoaded) {
      setIsLoading(true);
      setHasError(false);
    } else {
      // If we've already loaded this image before, don't show loading indicator
      setIsLoading(false);
    }
  }, [item.id, imageLoaded]);

  return (
    <View style={[styles.cardContainer, { width }]}>
      <View style={styles.card}>
        <View style={styles.imageContainer}>
          {/* Always render the image */}
          <Image 
            source={imageSource()}
            style={styles.image}
            resizeMode="cover"
            onLoadStart={() => {
              if (!imageLoaded) {
                setIsLoading(true);
              }
            }}
            onLoad={() => {
              setIsLoading(false);
              setHasError(false);
              setImageLoaded(true);
            }}
            onLoadEnd={() => {
              // Backup in case onLoad doesn't fire
              if (isLoading) {
                setIsLoading(false);
                setImageLoaded(true);
              }
            }}
            onError={() => {
              setIsLoading(false);
              setHasError(true);
              console.warn(`Failed to load image: ${item.title}`);
            }}
          />
          {isLoading && !imageLoaded && (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" color={COLORS.primary} />
            </View>
          )}
          {hasError && (
            <View style={styles.errorContainer}>
              <Text style={styles.errorText}>Failed to load image</Text>
              {retryCount < MAX_RETRIES && (
                <TouchableOpacity onPress={handleRetry} style={styles.retryButton}>
                  <Text style={styles.retryText}>Retry</Text>
                </TouchableOpacity>
              )}
            </View>
          )}
        </View>
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>{item.title}</Text>
          <Text style={styles.cardDescription}>{item.description}</Text>
        </View>
      </View>
    </View>
  );
};

const GalleryScreen: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const flatListRef = useRef<FlatList>(null);
  const { width } = Dimensions.get('window');

  const handleKeyPress = useCallback((event: KeyboardEvent) => {
    if (event.key === 'ArrowLeft') {
      scrollToIndex(Math.max(0, activeIndex - 1));
    } else if (event.key === 'ArrowRight') {
      scrollToIndex(Math.min(galleryItems.length - 1, activeIndex + 1));
    }
  }, [activeIndex]);

  useEffect(() => {
    if (Platform.OS === 'web') {
      window.addEventListener('keydown', handleKeyPress);
      
      // Add passive event listeners for touch events to improve performance
      document.addEventListener('touchstart', () => {}, { passive: true });
      document.addEventListener('touchmove', () => {}, { passive: true });
      document.addEventListener('wheel', () => {}, { passive: true });
      
      return () => {
        window.removeEventListener('keydown', handleKeyPress);
        document.removeEventListener('touchstart', () => {});
        document.removeEventListener('touchmove', () => {});
        document.removeEventListener('wheel', () => {});
      };
    }
  }, [handleKeyPress]);

  useEffect(() => {
    let mounted = true;
    let progressInterval: NodeJS.Timeout;

    const loadImages = async () => {
      // Start a fake progress indicator to show something is happening
      if (mounted) {
        progressInterval = setInterval(() => {
          setLoadingProgress(prev => Math.min(prev + 0.05, 0.9));
        }, 100);
      }

      try {
        // Initialize image cache
        await initializeImageCache();
        
        if (mounted) {
          // Clear interval and complete progress
          clearInterval(progressInterval);
          setLoadingProgress(1);
          
          // Add a small delay so users can see the progress complete
          setTimeout(() => {
            if (mounted) {
              setIsLoading(false);
            }
          }, 300);
        }
      } catch (error) {
        console.error('Error loading gallery:', error);
        if (mounted) {
          clearInterval(progressInterval);
          setLoadingProgress(1);
          setIsLoading(false);
        }
      }
    };

    loadImages();

    return () => {
      mounted = false;
      if (progressInterval) {
        clearInterval(progressInterval);
      }
    };
  }, []);

  // Memoize items to avoid unnecessary re-renders
  const memoizedItems = useCallback(() => galleryItems, []);

  const renderItem = useCallback(({ item, index }: { item: typeof galleryItems[0]; index: number }) => (
    <GalleryItem 
      item={item} 
      width={width} 
      isActive={index === activeIndex}
    />
  ), [activeIndex, width]);

  const onScroll = useCallback((event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const index = event.nativeEvent.contentOffset.x / slideSize;
    const roundIndex = Math.round(index);
    
    // Only update state if index changed to prevent unnecessary renders
    if (roundIndex !== activeIndex) {
      setActiveIndex(roundIndex);
    }
  }, [activeIndex]);

  const scrollToIndex = (index: number) => {
    if (flatListRef.current) {
      flatListRef.current.scrollToOffset({
        offset: index * width,
        animated: true
      });
      setActiveIndex(index);
    }
  };

  if (isLoading) {
    return (
      <ScreenLayout title="Gallery" currentScreen="Gallery" showBackButton>
        <View style={styles.loadingContainer}>
          <View style={styles.progressContainer}>
            <View 
              style={[
                styles.progressBar,
                { width: `${loadingProgress * 100}%` }
              ]} 
            />
          </View>
          <Text style={styles.loadingText}>
            Loading gallery... {Math.round(loadingProgress * 100)}%
          </Text>
        </View>
      </ScreenLayout>
    );
  }

  return (
    <ScreenLayout title="Gallery" currentScreen="Gallery" showBackButton>
      <View style={styles.intro}>
        <Text style={styles.introTitle}>Visual Exploration</Text>
        <Text style={styles.introText}>
          This gallery showcases images related to "Ozymandias," including artwork that captures 
          the poem's themes, historical artifacts that inspired it, and the ancient Egyptian 
          context it references.
        </Text>
      </View>

      <FlatList
        ref={flatListRef}
        data={memoizedItems()}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        onScrollBeginDrag={() => {}}
        scrollEventThrottle={16}
        snapToInterval={width}
        snapToAlignment="center"
        decelerationRate="fast"
        style={styles.galleryList}
        initialNumToRender={2}
        maxToRenderPerBatch={3}
        windowSize={5}
        removeClippedSubviews={Platform.OS !== 'web'}
        getItemLayout={(_, index) => ({
          length: width,
          offset: width * index,
          index,
        })}
      />

      <View style={styles.paginationContainer}>
        {galleryItems.map((_, index) => (
          <TouchableOpacity 
            key={index} 
            style={[
              styles.paginationDot, 
              activeIndex === index && styles.paginationDotActive
            ]}
            onPress={() => scrollToIndex(index)}
          />
        ))}
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate('Audio')}
        >
          <Text style={styles.buttonText}>Listen to the Poem</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate('LiteraryDevices')}
        >
          <Text style={styles.buttonText}>Back to Literary Devices</Text>
        </TouchableOpacity>
      </View>
    </ScreenLayout>
  );
};

export default GalleryScreen; 