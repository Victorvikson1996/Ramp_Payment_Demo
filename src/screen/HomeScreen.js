import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import RampSdk from '@ramp-network/react-native-sdk';
import {Button} from '../components';

export default function HomeScreen() {
  const ramp = new RampSdk({
    url: 'https://ri-widget-staging.firebaseapp.com',
    hostAppName: 'React Native Example',
  }).on('*', event => {
    console.log(`RampSdk.on('*')`, event);
  });

  return (
    <View style={styles.container}>
      <Button label={`Run Ramp Widget`} onPress={() => ramp?.show()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
