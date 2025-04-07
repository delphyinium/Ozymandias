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
  header: {
    marginBottom: SPACING.lg,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: SPACING.sm,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: COLORS.text,
  },
  timelineContainer: {
    marginTop: SPACING.lg,
  },
  timelineEvent: {
    flexDirection: 'row',
    marginBottom: SPACING.lg,
  },
  timelineLine: {
    width: 2,
    backgroundColor: COLORS.primary,
    marginHorizontal: SPACING.md,
  },
  timelineMarker: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: COLORS.primary,
    marginLeft: -9, // Half of width - half of the line width
    marginTop: SPACING.sm,
  },
  timelineDate: {
    width: 100,
    paddingRight: SPACING.sm,
  },
  timelineYear: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.text,
    marginTop: SPACING.sm,
  },
  timelineContent: {
    flex: 1,
    backgroundColor: COLORS.card,
    borderRadius: 8,
    padding: SPACING.md,
    marginLeft: SPACING.sm,
  },
  timelineTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: SPACING.xs,
  },
  timelineText: {
    fontSize: 14,
    lineHeight: 20,
    color: COLORS.text,
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