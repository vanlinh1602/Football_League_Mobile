import { RootStackParamList } from '../Navigation/type';
import type { ApiProblems } from './api';

declare global {
  type CustomObject<Type> = {
    [key: string]: Type;
  };
  type WithApiResult<T> = { kind: 'ok'; data: T } | ApiProblems;

  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export {};
