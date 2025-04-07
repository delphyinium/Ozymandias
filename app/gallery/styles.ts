import { StyleSheet } from 'react-native';
import { COLORS, SPACING } from '../../services/constants';

// const { width } = Dimensions.get('window'); // Removed unused width

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  intro: {
    paddingHorizontal: SPACING.lg,
    marginBottom: SPACING.lg,
  },
  introTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: SPACING.sm,
  },
  introText: {
    fontSize: 16,
    lineHeight: 24,
    color: COLORS.text,
  },
  galleryList: {
    flex: 1,
  },
  cardContainer: {
    paddingHorizontal: SPACING.md,
  },
  card: {
    backgroundColor: COLORS.card,
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  imageContainer: {
    width: '100%',
    height: 300,
    backgroundColor: '#e1e4e8',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  cardContent: {
    padding: SPACING.md,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: SPACING.sm,
  },
  cardDescription: {
    fontSize: 16,
    lineHeight: 22,
    color: COLORS.text,
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: SPACING.md,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: COLORS.border,
    marginHorizontal: 4,
    opacity: 0.5,
  },
  paginationDotActive: {
    backgroundColor: COLORS.primary,
    width: 12,
    height: 12,
    borderRadius: 6,
    opacity: 1,
  },
  buttonContainer: {
    paddingHorizontal: SPACING.lg,
    paddingTop: SPACING.md,
    paddingBottom: SPACING.lg,
  },
  navButton: {
    backgroundColor: COLORS.primary,
    padding: SPACING.md,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: SPACING.md,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
}); 