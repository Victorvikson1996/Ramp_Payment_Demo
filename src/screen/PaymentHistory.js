import {StyleSheet, Text, View} from 'react-native';

import React, {useEffect, useState} from 'react';

const PaymentHistory = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
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
