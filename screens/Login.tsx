import React from 'react';
import { SafeAreaView } from 'react-native';
import { CustomTextInput } from '../components/CustomTextInput';
import { CustomButton } from '../components/CustomButton';
import { Prompt } from '../components/Prompt';

function HelloConsole() {
  console.log('Hello Console');
}

export const Login = () => {
  const promptMessage = 'Not registered? ';

  return (
    <SafeAreaView>
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
