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
  devicesContainer: {
    marginTop: SPACING.md,
    marginBottom: SPACING.lg,
  },
  deviceCard: {
    backgroundColor: COLORS.card,
    borderRadius: 8,
    padding: SPACING.lg,
    marginBottom: SPACING.lg,
    borderLeftWidth: 4,
    borderLeftColor: COLORS.secondary,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  deviceTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: SPACING.sm,
  },
  deviceDescription: {
    fontSize: 16,
    lineHeight: 24,
    color: COLORS.text,
    marginBottom: SPACING.md,
  },
  examplesTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: SPACING.xs,
  },
  examplesList: {
    marginLeft: SPACING.md,
  },
  exampleItem: {
    fontSize: 16,
    lineHeight: 24,
    color: COLORS.text,
    marginBottom: SPACING.xs,
  },
  buttonContainer: {
    marginTop: SPACING.lg,
    marginBottom: SPACING.xl,
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
