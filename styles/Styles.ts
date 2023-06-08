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
  lightGrey: ColorValue;
  black: ColorValue;
  lightOrange: ColorValue;
} = {
  red: '#ff0000',
  blue: '#0000ff',
  green: '#008000',
  lightGrey: '#D9D9D9',
  black: '#000000',
  lightOrange: '#FFC463',
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
  textInput: {
    width: '100%',
    height: 60,
    borderRadius: 20,
    borderWidth: 1,
    padding: 10,
    fontSize: font.medium,
    backgroundColor: colors.lightGrey,
    color: colors.black,
  },
  inputLabel: {
    fontSize: font.small,
    alignSelf: 'flex-start',
    padding: 5,
  },
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 20,
    marginVertical: 5,
  },
  button: {
    backgroundColor: colors.lightOrange,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
  },
  buttonText: {
    color: colors.black,
    fontSize: font.small,
    fontWeight: 'normal',
  },
  buttonContainer: {
    paddingLeft: '20%',
    paddingRight: '20%',
    paddingTop: 20,
  },
  promptContainer: {
    flexDirection: 'row',
    paddingTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  promptText: {
    color: colors.black,
    fontSize: font.small,
  },
  onPressPromptText: {
    color: colors.lightOrange,
    fontWeight: 'bold',
    fontSize: font.small,
  },
  logo: {
    width: 150,
    height: 150,
  },
  smallLogo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    alignItems: 'center',
  },
  logoTitle: {
    marginTop: 10,
    fontSize: font.medium,
    fontWeight: 'bold',
  },
  loginForm: {
    padding: '10%',
  },
});
