import React, {useEffect} from 'react';
import {Pressable, View, Text, TouchableOpacity} from 'react-native';
import Container from '../../components/common/container/index';
import {useNavigation} from '@react-navigation/native';
import colors from '../../assets/theme/colors';

const Contacts = () => {
  const navigation = useNavigation();
  const navigatorButton = () => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.toggleDrawer();
        }}>
        <Text style={{color: colors.black}}>NIV</Text>
      </TouchableOpacity>
    );
  };
  const {setOptions} = useNavigation();

  useEffect(() => {
    setOptions({
      headerLeft: navigatorButton,
    });
  }, []);
  return (
    <Container styleIn={{padding: 100}}>
      <Text style={{color: colors.black}}>Contacts!</Text>
    </Container>
  );
};

export default Contacts;
