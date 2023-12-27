import {
  BottomTabNavigationProp,
  BottomTabScreenProps,
} from '@react-navigation/bottom-tabs';
import type {
  CompositeNavigationProp,
  CompositeScreenProps,
} from '@react-navigation/native';
import { NavigatorScreenParams } from '@react-navigation/native';
import type {
  StackNavigationProp,
  StackScreenProps,
} from '@react-navigation/stack';

import { Statistic } from '../redux/types/matches';

// Bottom Tab
export type RootTabParamList = {
  Home: undefined;
  Search: undefined;
  Statistic: undefined;
  Schedule: undefined;
  Profile: undefined;
};

type RootTabScreenProps<T extends keyof RootTabParamList> =
  BottomTabScreenProps<RootTabParamList, T>;

export type TabScreenNavigationProp<T extends keyof RootTabParamList> =
  CompositeNavigationProp<
    BottomTabNavigationProp<RootTabParamList, T>,
    StackNavigationProp<RootStackParamList>
  >;

export type HomeTabScreenProps<T extends keyof RootTabParamList> =
  CompositeScreenProps<
    RootTabScreenProps<T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;

// Stack
export type RootStackParamList = {
  HomeTabs: NavigatorScreenParams<RootTabParamList>;
  Login: { authScreen: keyof (RootTabParamList & RootStackParamList) };
  PlayerInfo: { id: string };
  TeamInfo: { id: string };
  LeaguesInfo: { id: string };
  EditAccount: undefined;
  TeamStatictics: { data: Statistic; team: string };
  PlayerStatictics: { id: string };
  TeamStaticticsComparison: undefined;
  Notification: undefined;
  Favorite: undefined;
  SearchLeague: undefined;
  SearchTeam: undefined;
  SearchPlayer: undefined;
  CommentInput: undefined;
  TodayMatch: undefined;
  UpcomingMatch: undefined;
  PrepareScreen: undefined;
};

export type StackScreenNavigationProp<T extends keyof RootStackParamList> =
  CompositeNavigationProp<
    StackNavigationProp<RootStackParamList, T>,
    BottomTabNavigationProp<RootTabParamList>
  >;

type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>;

export type HomeStackScreenProps<T extends keyof RootStackParamList> =
  CompositeScreenProps<
    RootStackScreenProps<T>,
    RootTabScreenProps<keyof RootTabParamList>
  >;
