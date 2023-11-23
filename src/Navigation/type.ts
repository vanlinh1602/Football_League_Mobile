import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import type { CompositeScreenProps } from '@react-navigation/native';
import { NavigatorScreenParams } from '@react-navigation/native';
import type { StackScreenProps } from '@react-navigation/stack';

// Bottom Tab
export type RootTabParamList = {
  Home: undefined;
  Search: undefined;
  Statistic: undefined;
  Schedule: undefined;
  Profile: { test: string };
};

type RootTabScreenProps<T extends keyof RootTabParamList> =
  BottomTabScreenProps<RootTabParamList, T>;

export type HomeTabScreenProps<T extends keyof RootTabParamList> =
  CompositeScreenProps<
    RootTabScreenProps<T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;

// Stack
export type RootStackParamList = {
  HomeTabs: NavigatorScreenParams<RootTabParamList>;
  Login: { email: string };
};

type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>;

export type HomeStackScreenProps<T extends keyof RootStackParamList> =
  CompositeScreenProps<
    RootStackScreenProps<T>,
    RootTabScreenProps<keyof RootTabParamList>
  >;
