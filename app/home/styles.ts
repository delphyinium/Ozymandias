import { StyleSheet } from 'react-native';
import { COLORS, SPACING } from '../../services/constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    flex: 1,
    padding: SPACING.lg,
  },
  hero: {
    height: 200,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: SPACING.lg,
  },
  heroTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: SPACING.sm,
    textAlign: 'center',
  },
  heroSubtitle: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    paddingHorizontal: SPACING.lg,
  },
  section: {
    marginBottom: SPACING.lg,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: SPACING.md,
  },
  sectionText: {
    fontSize: 16,
    color: COLORS.text,
    lineHeight: 24,
    marginBottom: SPACING.md,
  },
  poetImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignSelf: 'center',
    marginBottom: SPACING.md,
  },
  bioContainer: {
    backgroundColor: COLORS.card,
    padding: SPACING.md,
    borderRadius: 8,
    marginBottom: SPACING.lg,
  },
  bioTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: SPACING.sm,
  },
  bioDetail: {
    flexDirection: 'row',
    marginBottom: SPACING.xs,
    alignItems: 'flex-start',
  },
  bioLabel: {
    fontWeight: 'bold',
    marginRight: SPACING.sm,
  },
  bioText: {
    flex: 1,
    fontSize: 16,
    lineHeight: 24,
  },
  buttonContainer: {
    marginTop: SPACING.md,
  },
  exploreButton: {
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