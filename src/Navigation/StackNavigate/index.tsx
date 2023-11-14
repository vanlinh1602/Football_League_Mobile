import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

const Stack = createStackNavigator();

type Props = {
  stacks: {
    name: string;
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
