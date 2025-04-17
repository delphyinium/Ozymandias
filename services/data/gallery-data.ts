// Gallery images using local assets
import { Asset } from 'expo-asset';
import { Image, Platform } from 'react-native';

// Define image modules with stable paths
const IMAGE_MODULES = {
  ramessesHead: require('../../assets/images/ramesses-head.jpg'),
  desert: require('../../assets/images/desert.jpg'),
  temple: require('../../assets/images/temple.jpg'),
  hieroglyphs: require('../../assets/images/hieroglyphs.jpg'),
  shelley: require('../../assets/images/shelley.jpg'),
  britishMuseum: require('../../assets/images/british-museum.jpg'),
  ramessesStatue: require('../../assets/images/ramesses-statue.jpg'),
  ozymandiasArt: require('../../assets/images/ozymandias-art.jpg'),
};

// Cache for resolved image URIs
let resolvedImages: { [key: string]: string } = {};
let imageFetchPromises: { [key: string]: Promise<string> } = {};

// Function to resolve image URI
const resolveImage = async (module: any): Promise<string> => {
  try {
    if (Platform.OS === 'web') {
      // For web, we need to handle the module directly
      return module;
    }

    // For native platforms, use expo-asset
    const asset = Asset.fromModule(module);
    
    // Pre-download the asset if it's not already downloaded
    if (!asset.downloaded) {
      await asset.downloadAsync();
    }
    
    return asset.localUri || asset.uri || '';
  } catch (error) {
    console.error('Error resolving image:', error);
    return '';
  }
};

// Initialize image cache
export const initializeImageCache = async () => {
  try {
    const entries = Object.entries(IMAGE_MODULES);
    const total = entries.length;
    let completed = 0;
    
    // Create an array of promises to load all images in parallel
    const promises = entries.map(async ([key, module]) => {
      try {
        // If we already have this image resolving, use that promise
        if (imageFetchPromises[key]) {
          return imageFetchPromises[key];
        }
        
        // Otherwise create a new promise and cache it
        imageFetchPromises[key] = resolveImage(module);
        const resolvedUri = await imageFetchPromises[key];
        resolvedImages[key] = resolvedUri;
        completed++;
        
        return resolvedUri;
      } catch (error) {
        console.error(`Error loading image ${key}:`, error);
        return '';
      }
    });
    
    // Wait for all images to load
    await Promise.all(promises);
    
    // Clean up the promises cache after loading
    imageFetchPromises = {};
    
    return true;
  } catch (error) {
    console.error('Error initializing image cache:', error);
    return false;
  }
};

// Get cached image URI with fallback
const getCachedImage = (key: keyof typeof IMAGE_MODULES) => {
  if (Platform.OS === 'web') {
    // For web, directly return the module
    return IMAGE_MODULES[key];
  }
  
  // For native, use cached URI if available
  if (resolvedImages[key] && resolvedImages[key].length > 0) {
    return resolvedImages[key];
  }
  
  // If not available in cache, set up lazy loading and return module reference for now
  if (!imageFetchPromises[key]) {
    imageFetchPromises[key] = resolveImage(IMAGE_MODULES[key])
      .then(uri => {
        resolvedImages[key] = uri;
        return uri;
      })
      .catch(error => {
        console.error(`Error lazy loading image ${key}:`, error);
        return '';
      });
  }
  
  // Return module reference as fallback
  return IMAGE_MODULES[key];
};

export const galleryItems = [
  {
    id: 'statue',
    title: 'Statue of Ramesses II',
    description: 'A fragment of a statue of Ramesses II, similar to the one that likely inspired Shelley\'s poem. The British Museum acquired such a fragment in 1817.',
    imageKey: 'ramessesHead' as const,
  },
  {
    id: 'desert',
    title: 'Egyptian Desert',
    description: '"Round the decay of that colossal wreck, boundless and bare, the lone and level sands stretch far away." The vastness of the desert emphasizes the impermanence of human power.',
    imageKey: 'desert' as const,
  },
  {
    id: 'ruins',
    title: 'Ancient Egyptian Ruins',
    description: 'The remains of once-grand structures suggest the theme of time\'s ability to reduce even the mightiest empires to rubble.',
    imageKey: 'temple' as const,
  },
  {
    id: 'hieroglyphs',
    title: 'Hieroglyphic Inscriptions',
    description: 'Ancient inscriptions that proclaim the power and achievements of pharaohs, similar to the inscription on Ozymandias\'s pedestal.',
    imageKey: 'hieroglyphs' as const,
  },
  {
    id: 'shelley',
    title: 'Percy Bysshe Shelley',
    description: 'A portrait of the poet who penned "Ozymandias" in 1817 as part of a friendly competition with another poet.',
    imageKey: 'shelley' as const,
  },
  {
    id: 'british-museum',
    title: 'The British Museum',
    description: 'The institution that acquired the fragment of Ramesses II\'s statue that likely inspired Shelley\'s poem.',
    imageKey: 'britishMuseum' as const,
  },
  {
    id: 'ramesses-statue',
    title: 'Standing Statue of Ramesses II',
    description: 'A colossal standing statue of Ramesses II, demonstrating the pharaoh\'s desire to be remembered through monumental art.',
    imageKey: 'ramessesStatue' as const,
  },
  {
    id: 'artwork',
    title: 'Artistic Interpretation',
    description: 'A modern artistic interpretation of the themes in "Ozymandias," showcasing the contrast between human ambition and nature\'s indifference.',
    imageKey: 'ozymandiasArt' as const,
  },
];

// Helper function to get image source for gallery items
export const getImageSource = (imageKey: keyof typeof IMAGE_MODULES) => {
  try {
    const imageModule = IMAGE_MODULES[imageKey];
    
    // For web, we need to handle differently
    if (Platform.OS === 'web') {
      // On web, we just pass the module directly - React Native Web handles this automatically
      return imageModule;
    }
    
    // For native platforms, use URI
    const uri = getCachedImage(imageKey);
    return { uri };
  } catch (error) {
    console.error(`Error getting image source for ${imageKey}:`, error);
    // Return a default image or the module directly as fallback
    return IMAGE_MODULES[imageKey];
  }
}; 