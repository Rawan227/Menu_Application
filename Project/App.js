import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Menu} from'./Menu.js';
import {About} from './About.js';
import {Home} from './Home.js';


export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen options={{headerShown: false}} name='Home' component={Home}></Stack.Screen>
          <Stack.Screen name='Menu' component={Menu}></Stack.Screen>
          <Stack.Screen name='About' component={About}></Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
  );

}
