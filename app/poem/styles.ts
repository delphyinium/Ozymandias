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
  poemTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: SPACING.md,
    textAlign: 'center',
  },
  poetName: {
    fontSize: 18,
    color: COLORS.text,
    marginBottom: SPACING.lg,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  poemContainer: {
    backgroundColor: COLORS.card,
    padding: SPACING.lg,
    borderRadius: 8,
    marginBottom: SPACING.lg,
  },
  poemText: {
    fontSize: 18,
    lineHeight: 28,
    color: COLORS.text,
    textAlign: 'center',
  },
  highlightContainer: {
    marginTop: SPACING.lg,
    marginBottom: SPACING.lg,
    backgroundColor: COLORS.card,
    padding: SPACING.md,
    borderRadius: 8,
  },
  highlightTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: SPACING.md,
  },
  highlightText: {
    fontSize: 16,
    lineHeight: 24,
    color: COLORS.text,
  },
  buttonContainer: {
    marginTop: SPACING.lg,
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