import * as React from 'react';
import {Pressable, View, Text} from 'react-native';
import {CONTACT_LIST} from '../../constants/RouteNames';

const ContactDetails = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Conference Details</Text>
      <Pressable
        onPress={() => navigation.navigate(CONTACT_LIST)}
        style={{backgroundColor: 'plum', padding: 10}}>
        <Text>Go back</Text>
      </Pressable>
    </View>
  );
};

export default ContactDetails;
