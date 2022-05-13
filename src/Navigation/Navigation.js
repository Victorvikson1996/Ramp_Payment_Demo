import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {HomeScreen, PaymentHistory, Transaction} from '../screen';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Transaction" component={Transaction} />
        <Stack.Screen name="PaymentHistory" component={PaymentHistory} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
