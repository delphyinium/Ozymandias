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
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: SPACING.md,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: COLORS.text,
    marginBottom: SPACING.lg,
  },
  audioPlayer: {
    backgroundColor: COLORS.card,
    borderRadius: 8,
    padding: SPACING.lg,
    marginBottom: SPACING.lg,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  audioTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: SPACING.md,
    textAlign: 'center',
  },
  audioControls: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: SPACING.md,
  },
  playButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  playIcon: {
    width: 20,
    height: 20,
    marginLeft: 4, // To center the play triangle visually
  },
  pauseIcon: {
    width: 20,
    height: 20,
  },
  timeDisplay: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: SPACING.sm,
  },
  timeText: {
    fontSize: 12,
    color: COLORS.text,
  },
  progressContainer: {
    height: 5,
    backgroundColor: COLORS.border,
    borderRadius: 3,
    marginBottom: SPACING.md,
  },
  progressBar: {
    height: '100%',
    backgroundColor: COLORS.primary,
    borderRadius: 3,
  },
  audioInfo: {
    marginTop: SPACING.md,
  },
  audioInfoText: {
    fontSize: 14,
    color: COLORS.text,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  poemText: {
    backgroundColor: COLORS.card,
    borderRadius: 8,
    padding: SPACING.lg,
    marginBottom: SPACING.lg,
  },
  poemTextContent: {
    fontSize: 16,
    lineHeight: 24,
    color: COLORS.text,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  currentLine: {
    color: COLORS.primary,
    fontWeight: 'bold',
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