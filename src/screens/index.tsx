import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import { AntDesign, Feather, MaterialIcons, Octicons } from '../lib/icons';
import { TabNavigation } from '../Navigation';
import Home from './Home';
import Profile from './Profile';
import Schedule from './Schedule';
import Search from './Search';
import Statistic from './Statistic';

function Workspace() {
  return (
    <NavigationContainer>
      <TabNavigation
        tabs={[
          {
            name: 'Home',
            render: Home,
            icon: ({ color, size }) => (
              <Octicons name="home" color={color} size={size} />
            ),
          },
          {
            name: 'Search',
            render: Search,
            icon: ({ color, size }) => (
              <AntDesign name="search1" color={color} size={size} />
            ),
          },
          {
            name: 'Statistic',
            render: Statistic,
            icon: ({ color, size }) => (
              <Feather name="pie-chart" color={color} size={size} />
            ),
          },
          {
            name: 'Schedule',
            render: Schedule,
            icon: ({ color, size }) => (
              <MaterialIcons name="access-time" color={color} size={size} />
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
