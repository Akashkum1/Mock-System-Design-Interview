import {StyleProp, StyleSheet, TextStyle} from 'react-native';
import React from 'react';
import {Text} from 'react-native-paper';
import {VariantProp} from 'react-native-paper/lib/typescript/components/Typography/types';

type CTextProps = {
  variant?: VariantProp<never>;
  children: React.JSX.Element | string;
  style?: StyleProp<TextStyle>;
};

const CText = ({variant, children, style}: CTextProps) => {
  return (
    <Text variant={variant} style={[styles.text, style]}>
      {children}
    </Text>
  );
};

export default CText;

const styles = StyleSheet.create({
  text: {
    color: '#FFFFFF',
  },
});
