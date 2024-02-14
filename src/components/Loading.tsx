import {StyleSheet} from 'react-native';
import React from 'react';
import CText from './CText';
import {ActivityIndicator, Modal} from 'react-native-paper';

const Loading = ({visible}: {visible: boolean}) => {
  return (
    <Modal visible={visible} style={styles.loadingModal}>
      <ActivityIndicator color="#FFFFFF" />
      <CText style={styles.loadingText}>Loading...</CText>
    </Modal>
  );
};

export default Loading;

const styles = StyleSheet.create({
  loadingModal: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(1, 1, 1, 0.2)',
  },
  loadingText: {
    textAlign: 'center',
    marginTop: 10,
  },
});
