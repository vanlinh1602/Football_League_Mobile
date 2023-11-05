import { StyleSheet } from 'react-native';

export const TabStyles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export const defautTabStyles = StyleSheet.create({
  tabBarStyle: {
    position: 'absolute',
    bottom: 15,
    left: 20,
    right: 20,
    backgroundColor: '#ffffff',
    borderRadius: 15,
    height: 70,
    ...TabStyles.shadow,
  },
});
