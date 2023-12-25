import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { PayloadAction } from '@reduxjs/toolkit';

export type Team = {
  id: string;
  name: string;
  logo: string;
  background: string;
  owner: string;
  coach: string;
  captain: string;
  country: string;
  founding: number;
};

export type TeamStore = {
  handling: boolean;
  data?: CustomObject<Team>;
};

export type SignInAction = PayloadAction<FirebaseAuthTypes.User>;
