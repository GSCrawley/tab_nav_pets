import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

export default function CatScreen() {
    return (
        <Stack.Navigator>      
          <Stack.Screen name='CatsList' component={ListCats} /> 
          <Stack.Screen name='Details' component={DetailScreen} />
        </Stack.Navigator>
    );
  }