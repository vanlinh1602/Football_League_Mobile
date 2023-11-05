/* eslint-disable react/no-unstable-nested-components */
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import { AntDesign } from '../lib/icons';
import { TabNavigation } from '../Navigation';
import Details from './Details';
import Home from './Home';
import Profile from './Profile';
import Settings from './Settings';

function Workspace() {
  return (
    <NavigationContainer>
      <TabNavigation
        tabs={[
          {
            name: 'Home',
            render: Home,
            icon: ({ color, size }) => (
              <AntDesign name="home" color={color} size={size} />
            ),
          },
          {
            name: 'Details',
            render: Details,
            icon: ({ color, size }) => (
              <AntDesign name="form" color={color} size={size} />
            ),
          },
          {
            name: 'Settings',
            render: Settings,
            icon: ({ color, size }) => (
              <AntDesign name="setting" color={color} size={size} />
            ),
          },
          {
            name: 'Profile',
            render: Profile,
            icon: ({ color, size }) => (
              <AntDesign name="user" color={color} size={size} />
            ),
          },
        ]}
      />
    </NavigationContainer>
  );
}

export default Workspace;
