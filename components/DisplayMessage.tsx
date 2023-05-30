import React from 'react';
import { Text, TextStyle, View } from 'react-native';

type DisplayMessageProps = {
  message: String;
  style?: TextStyle | undefined;
};

export const DisplayMessage = (props: DisplayMessageProps): JSX.Element => {
  return (
    <View>
      <Text style={props.style}>{props.message}</Text>
    </View>
  );
};
