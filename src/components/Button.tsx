import {Pressable, StyleProp, StyleSheet} from 'react-native';
import React from 'react';

type ButtonProps = {
  children: React.JSX.Element;
  onPress?: () => void;
  style?: StyleProp<any>;
};

const Button = ({children, onPress, style}: ButtonProps) => {
  return (
    <Pressable style={[styles.button, style]} onPress={onPress}>
      {children}
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    borderColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: 'center',
  },
});
