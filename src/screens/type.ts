import type { StackScreenProps } from '@react-navigation/stack';

type RootStackParamList = {
  Home: undefined;
  Profile: undefined;
  Setting: undefined;
  Details: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>;
