import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  CONTACT_LIST,
  CONTACT_DETAIL,
  CREATE_CONTACT,
  SETTINGS,
} from '../constants/RouteNames';
import Contacts from '../Screens/Contacts/index';
import ContactDetails from '../Screens/ContactDetail/index';
import CreateContact from '../Screens/CreateContact/index';
import Settings from '../Screens/Settings/index';

const HomeNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName={CONTACT_LIST}
      screenOptions={{headerShown: true}}>
      <Stack.Screen name={CONTACT_LIST} component={Contacts} />
      <Stack.Screen name={CONTACT_DETAIL} component={ContactDetails} />
      <Stack.Screen name={CREATE_CONTACT} component={CreateContact} />
      <Stack.Screen name={SETTINGS} component={Settings} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
