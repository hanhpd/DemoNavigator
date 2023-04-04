import React from 'react';
import {ScrollView, View} from 'react-native';
import styles from './styles';

const Container = ({styleIn, children}) => {
  return (
    <ScrollView>
      <View style={[styles.wrapper, styleIn]}>{children}</View>
    </ScrollView>
  );
};
export default Container;
