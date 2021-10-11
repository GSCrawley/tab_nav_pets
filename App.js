import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Ionicons, Fontawesome5 } from 'react-native-vector-icons';
import { FontAwesome5 } from '@expo/vector-icons'; 


import  CatScreen  from './components/CatScreen';
import  DogScreen  from './components/DogScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Cats') {
            iconName = 'cat'
          } else if (route.name === 'Dogs') {
            iconName = 'dog'
          }
          return <FontAwesome5 name={iconName} size={size} color={color}/>;
        },
      })}
      >

      <Tab.Screen name='Cats' component={CatScreen} />    
      <Tab.Screen name='Dogs' component={DogScreen} />
    </Tab.Navigator>
  </NavigationContainer>

);
}

