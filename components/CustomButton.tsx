import React from 'react';
import { styles } from '../styles/Styles';
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';

interface buttonProps extends TouchableOpacityProps {
  title: string;
  onPress: () => void;
}

export const CustomButton = (props: buttonProps) => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        style={styles.button}
        onPress={props.onPress}>
        <Text style={styles.buttonText}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
};
