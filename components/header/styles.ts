import { StyleSheet } from 'react-native';
import { COLORS, SPACING /*, FONTS */ } from '../../services/constants';

export const styles = StyleSheet.create({
  header: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary,
    paddingHorizontal: SPACING.md,
    position: 'relative',
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  backButton: {
    position: 'absolute',
    left: SPACING.md,
    zIndex: 10,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
  },
}); 