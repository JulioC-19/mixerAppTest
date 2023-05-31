import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles/Styles';

type promptProps = {
  text: string;
  onPressText: string;
  onPress: () => void;
};

export const Prompt = (props: promptProps) => {
  return (
    <View style={styles.promptContainer}>
      <Text style={styles.promptText}>{props.text}</Text>
      <TouchableOpacity onPress={props.onPress}>
        <Text style={styles.onPressPromptText}>{props.onPressText}</Text>
      </TouchableOpacity>
    </View>
  );
};
