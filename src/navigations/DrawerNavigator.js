import * as React from 'react';
import {Pressable, View, Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeNavigator from './HomeNavigator';
import {HOME_NAVIGATOR} from '../constants/RouteNames';
const DrawerNavigator = () => {
  const drawer = createDrawerNavigator();
  return (
    <drawer.Navigator
      initialRouteName={HOME_NAVIGATOR}
      drawerType="slide"
      screenOptions={{headerShown: false}}>
      <drawer.Screen
        name={HOME_NAVIGATOR}
        component={HomeNavigator}
        options={{drawerLabel: 'Home'}}
      />
    </drawer.Navigator>
  );
};

export default DrawerNavigator;
