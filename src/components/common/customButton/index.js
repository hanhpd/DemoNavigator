import React from 'react';
import {TouchableOpacity, Text, View, ActivityIndicator} from 'react-native';
import styles from './styles';
import colors from '../../../assets/theme/colors';

const CustomButton = ({
  title,
  secondary,
  primary,
  danger,
  disabled,
  loading,
  onPress,
  ...props
}) => {
  const getBgColor = () => {
    if (disabled) {
      return colors.grey;
    }
    if (primary) {
      return colors.primary;
    }
    if (danger) {
      return colors.danger;
    }
    if (secondary) {
      return colors.secondary;
    }
  };

  return (
    <TouchableOpacity
      disabled={disabled}
      style={[styles.wrapper, {backgroundColor: getBgColor()}]}
      onPress={onPress}>
      <View style={styles.loaderSection}>
        {loading && <ActivityIndicator color={colors.primary} />}
        {title && (
          <Text
            style={{
              color: disabled ? colors.black : colors.white,
              paddingLeft: loading ? 10 : 0,
            }}>
            {title}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
