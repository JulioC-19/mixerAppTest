import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Login: undefined;
  Signup: undefined;
};

export type NavigationProps = NativeStackScreenProps<RootStackParamList>;
