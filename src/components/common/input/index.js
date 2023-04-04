import React from 'react';
import {View, TextInput, Text} from 'react-native';
import styles from './styles';
import colors from '../../../assets/theme/colors';
const Input = ({style, icon, iconPosition, label, error, ...props}) => {
  const [focused, setFocused] = React.useState(false);
  const onFocus = () => {
    setFocused(true);
  };
  const onBlur = () => {
    setFocused(false);
  };
  const getFlexDirection = () => {
    if (icon && iconPosition) {
      if (iconPosition === 'left') {
        return 'row';
      } else if (iconPosition === 'right') {
        return 'row-reverse';
      }
    } else {
      return 'row';
    }
  };
  const getBorderColor = () => {
    if (error) {
      return colors.danger;
    }
    if (focused) {
      return colors.secondary;
    } else {
      return colors.grey;
    }
  };
  return (
    <View style={styles.inputContainer}>
      {label && <Text>{label}</Text>}

      <View
        style={[
          styles.wrapper,
          {borderColor: getBorderColor()},
          {flexDirection: getFlexDirection()},
        ]}>
        <View>{icon && icon}</View>
        <TextInput
          style={[styles.inputText, style]}
          onFocus={onFocus}
          onBlur={onBlur}
          {...props}
        />
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default Input;
