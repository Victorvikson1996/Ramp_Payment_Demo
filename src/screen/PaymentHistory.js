import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const PaymentHistory = () => {
  return (
    <View style={styles.container}>
      <Text>PaymentHistory</Text>
    </View>
  );
};

export default PaymentHistory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
