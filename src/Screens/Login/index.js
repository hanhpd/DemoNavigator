import React from 'react';
import {Pressable, View, Text} from 'react-native';
import colors from '../../assets/theme/colors';

const Login = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{color: colors.black}}>New contact</Text>
    </View>
  );
};

export default Login;
