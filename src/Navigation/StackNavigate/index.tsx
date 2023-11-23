import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { RootStackParamList } from '../type';

const Stack = createStackNavigator<RootStackParamList>();

type Props = {
  stacks: {
    name: keyof RootStackParamList;
    render: any;
  }[];
};

const StackNavigate = ({ stacks }: Props) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {stacks.map(({ name, render }, index) => (
        <Stack.Screen key={index} name={name} component={render} />
      ))}
    </Stack.Navigator>
  );
};

export default StackNavigate;
