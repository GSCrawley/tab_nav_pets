import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import ListDogs from './ListDogs'
import Details from './DetailScreen'

const Stack = createStackNavigator()

export default function DogScreen() {
  return (
      <Stack.Navigator>
        <Stack.Screen name='DogsList' component={ListDogs} /> 
        <Stack.Screen name='Details' component={Details} />
      </Stack.Navigator>
  );
}