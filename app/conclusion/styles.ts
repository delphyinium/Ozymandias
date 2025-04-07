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
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: SPACING.md,
    textAlign: 'center',
  },
  section: {
    marginBottom: SPACING.xl,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: SPACING.md,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: COLORS.text,
    marginBottom: SPACING.md,
  },
  quotedText: {
    fontSize: 16,
    lineHeight: 24,
    color: COLORS.text,
    fontStyle: 'italic',
    paddingLeft: SPACING.md,
    borderLeftWidth: 2,
    borderLeftColor: COLORS.primary,
    marginBottom: SPACING.md,
  },
  highlight: {
    backgroundColor: COLORS.card,
    borderRadius: 8,
    padding: SPACING.lg,
    marginBottom: SPACING.lg,
    borderLeftWidth: 4,
    borderLeftColor: COLORS.accent,
  },
  highlightTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: SPACING.sm,
  },
  highlightText: {
    fontSize: 16,
    lineHeight: 24,
    color: COLORS.text,
  },
  buttonContainer: {
    marginTop: SPACING.xl,
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