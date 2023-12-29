import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { PayloadAction } from '@reduxjs/toolkit';

export type UserData = {
  uid: string;
  email: string;
  name: string;
  photoURL?: string;
  role?: string;
  favorite?: {
    league?: string[];
    team?: string[];
    player?: string[];
  };
  notification?: Notification[];
};

export type Notification = {
  id: string;
  title: string;
  body: string;
  time: number;
  data: {
    type: 'match';
    id: string;
  };
};

export type UserState = {
  handling: boolean;
  data?: UserData;
  fetching: boolean;
  fetchStatus: string;
};

export type SignInAction = PayloadAction<FirebaseAuthTypes.User>;
