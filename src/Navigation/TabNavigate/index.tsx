/* eslint-disable react/no-unstable-nested-components */
import {
  BottomTabBarButtonProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { View } from 'native-base';
import React from 'react';
import { TouchableOpacity } from 'react-native';

import { defautTabStyles, TabStyles } from './styles';
const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }: BottomTabBarButtonProps) => {
  return (
    <TouchableOpacity
      style={{
        top: -20,
        justifyContent: 'center',
        alignItems: 'center',
        ...TabStyles.shadow,
      }}
      onPress={onPress}>
      <View
        style={{
          width: 60,
          height: 60,
          backgroundColor: '#5B4DBC',
          borderRadius: 35,
        }}>
        {children}
      </View>
    </TouchableOpacity>
  );
};

type Props = {
  tabs: {
    name: string;
    render: any;
    tabBarButton?: boolean;
    icon?: (props: {
      focused: boolean;
      color: string;
      size: number;
    }) => JSX.Element;
  }[];
};

const TabNavigation = ({ tabs }: Props) => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#5A4CBB',
        tabBarStyle: {
          ...defautTabStyles.tabBarStyle,
        },
      }}>
      {tabs.map(({ name, render, icon, tabBarButton }, index) => (
        <Tab.Screen
          key={index}
          name={name}
          component={render}
          options={{
            tabBarIcon: icon,
            tabBarButton: tabBarButton
              ? props => <CustomTabBarButton {...props} />
              : undefined,
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default TabNavigation;
