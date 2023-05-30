import { ColorValue, StyleSheet } from 'react-native';

export const font = {
  small: 16,
  medium: 25,
  large: 35,
};

export const colors: {
  red: ColorValue;
  blue: ColorValue;
  green: ColorValue;
} = {
  red: '#ff0000',
  blue: '#0000ff',
  green: '#008000',
};

export const styles = StyleSheet.create({
  messageOne: {
    fontSize: font.small,
    color: colors.red,
  },
  messageTwo: {
    fontSize: font.medium,
    color: colors.blue,
  },
});
