import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { PayloadAction } from '@reduxjs/toolkit';

export type UserData = {
  uid: string;
  email: string;
  name: string;
  photoURL?: string;
  role?: string;
};

export type UserState = {
  handling: boolean;
  data?: UserData;
};

export type SignInAction = PayloadAction<FirebaseAuthTypes.User>;
