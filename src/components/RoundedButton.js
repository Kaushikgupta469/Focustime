import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';

export const RoundedButton = ({
  style = {},
  textStyle = {},
  size = 125,
  ...props
}) => {
  return (
    <TouchableOpacity style={[styles(size).radius, style]}>
      <Text style={[styles(size).text, textStyle]} onPress={props.onPress}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = (size) =>
  StyleSheet.create({
    radius: {
      borderRadius: size ,
      width: size/0.9,
      height: size/1.2,
      alignItems: 'center',
      borderColor: colors.white,
      borderWidth:3,
    },
    text: { color: colors.white, fontSize: size / 2},
  });
