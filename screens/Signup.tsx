import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { styles } from '../styles/Styles';
import { NavigationProps } from '../navigation/RootStackParam';
import { CustomTextInput } from '../components/CustomTextInput';
import { CustomButton } from '../components/CustomButton';
import { Prompt } from '../components/Prompt';

const SignUpLogo = () => {
  return (
    <View style={styles.logoContainer}>
      <Text style={styles.logoTitle}>Mixer Sign up</Text>
    </View>
  );
};

export const Signup = ({ navigation }: NavigationProps) => {
  const promptMessage = 'Already have an account? ';
  return (
    <SafeAreaView style={styles.loginForm}>
      <SignUpLogo />
      <CustomTextInput label={'Name'} />
      <CustomTextInput label={'Email'} />
      <CustomTextInput
        label={'Password'}
        secureTextEntry={true}
      />
      <CustomTextInput
        label={'Confirm Password'}
        secureTextEntry={true}
      />
      <CustomButton
        title={'SIGN UP'}
        onPress={() => {}}
      />
      <Prompt
        text={promptMessage}
        onPressText={'Login'}
        onPress={() => navigation.navigate('Login')}
      />
    </SafeAreaView>
  );
};
