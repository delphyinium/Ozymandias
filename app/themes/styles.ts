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
  intro: {
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
  themesContainer: {
    marginTop: SPACING.md,
  },
  themeCard: {
    backgroundColor: COLORS.card,
    borderRadius: 8,
    padding: SPACING.lg,
    marginBottom: SPACING.lg,
    borderLeftWidth: 4,
    borderLeftColor: COLORS.primary,
  },
  themeTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: SPACING.sm,
  },
  themeDescription: {
    fontSize: 16,
    lineHeight: 24,
    color: COLORS.text,
    marginBottom: SPACING.md,
  },
  themeAnalysis: {
    fontSize: 16,
    lineHeight: 24,
    color: COLORS.text,
    fontStyle: 'italic',
  },
  buttonContainer: {
    marginTop: SPACING.lg,
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