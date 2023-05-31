import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { styles } from '../styles/Styles';

type inputProps = {
  label: String;
  secureTextEntry?: boolean;
};

export const CustomTextInput = (props: inputProps) => {
  const [text, onChangeText] = useState('');
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.inputLabel}> {props.label}</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={onChangeText}
        value={text}
        secureTextEntry={props.secureTextEntry}
      />
    </View>
  );
};
