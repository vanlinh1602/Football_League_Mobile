import auth from '@react-native-firebase/auth';
import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { AntDesign, Feather, MaterialIcons, Octicons } from '../lib/icons';
import { StackNavigate, TabNavigation } from '../Navigation';
import { actions as userActions } from '../redux/reducers/user';
import Home from './Home';
import Login from './Login';
import Profile from './Profile';
import Schedule from './Schedule';
import Search from './Search';
import Statistic from './Statistic';

const HomeTabs = () => {
  return (
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
          auth: true,
          render: Profile,
          icon: ({ color, size }) => (
            <AntDesign name="user" color={color} size={size} />
          ),
        },
      ]}
    />
  );
};

const Workspace = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch(userActions.signIn(user));
      }
    });
  }, [dispatch]);
  return (
    <NavigationContainer>
      <StackNavigate
        stacks={[
          { name: 'HomeTabs', render: HomeTabs },
          { name: 'Login', render: Login },
        ]}
      />
    </NavigationContainer>
  );
};

export default Workspace;
