import React from 'react';
import { Image, SafeAreaView, Text, View } from 'react-native';
import { CustomTextInput } from '../components/CustomTextInput';
import { CustomButton } from '../components/CustomButton';
import { Prompt } from '../components/Prompt';
import { styles } from '../styles/Styles';

function HelloConsole() {
  console.log('Hello Console');
}

const LoginLogo = () => {
  return (
    <View style={styles.logoContainer}>
      <Image
        style={styles.logo}
        source={require('../assets/pal.png')}
      />
      <Text style={styles.logoTitle}>Mixer</Text>
    </View>
  );
};

export const Login = () => {
  const promptMessage = 'Not registered? ';

  return (
    <SafeAreaView style={styles.loginForm}>
      <LoginLogo />
      <CustomTextInput label={'Email'} />
      <CustomTextInput
        label={'Password'}
        secureTextEntry={true}
      />
      <CustomButton
        title={'SIGN IN'}
        onPress={HelloConsole}
      />
      <Prompt
        text={promptMessage}
        onPressText={'Sign up'}
        onPress={HelloConsole}
      />
    </SafeAreaView>
  );
};
