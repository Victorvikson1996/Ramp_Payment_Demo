import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';

export default function TabIcon({focused, name, props, label, icon}) {
  return (
    <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
      <Image
        source={icon}
        resizeMode="contain"
        style={{
          width: 25,
          height: 25,
          tintColor: focused ? '#6aeb76' : '#748c94',
        }}
      />

      <Text
        style={{
          color: focused ? '#6aeb76' : '#748c94',
          fontSize: 12,
        }}
      >
        {label}
      </Text>
    </View>
  );
}
