import React from 'react';
import { SafeAreaView } from 'react-native';
import { CustomTextInput } from '../components/CustomTextInput';
import { CustomButton } from '../components/CustomButton';

function HelloConsole() {
  console.log('Hello Console');
}

export const Login = () => {
  return (
    <SafeAreaView>
      <CustomTextInput label={'Email'} />
      <CustomTextInput
        label={'Password'}
        secureTextEntry={true}
      />
      <CustomButton
        title={'Sign in'}
        onPress={HelloConsole}
      />
    </SafeAreaView>
  );
};
