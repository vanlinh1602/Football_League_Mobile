import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { Authenticate } from '../../components';
import { RootStackParamList } from '../type';

const Stack = createStackNavigator<RootStackParamList>();

type Props = {
  stacks: {
    name: keyof RootStackParamList;
    render: any;
    auth?: boolean;
  }[];
};

const StackNavigate = ({ stacks }: Props) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {stacks.map(({ name, render, auth }, index) =>
        auth ? (
          <Stack.Screen key={index} name={name}>
            {(props) => (
              <Authenticate authScreen={name}>{render(props)}</Authenticate>
            )}
          </Stack.Screen>
        ) : (
          <Stack.Screen key={index} name={name} component={render} />
        ),
      )}
    </Stack.Navigator>
  );
};

export default StackNavigate;
