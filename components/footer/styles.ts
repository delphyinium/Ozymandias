import { StyleSheet } from 'react-native';
import { COLORS, SPACING } from '../../services/constants';

export const styles = StyleSheet.create({
  footer: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: COLORS.primary,
    paddingVertical: SPACING.xs,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.1)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: SPACING.sm,
    flex: 1,
  },
  navText: {
    color: '#fff',
    fontSize: 12,
    marginTop: 4,
    textAlign: 'center',
  },
  activeNavText: {
    color: COLORS.highlight,
    fontWeight: 'bold',
  },
  navIcon: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeNavIcon: {
    color: COLORS.highlight,
  },
}); 