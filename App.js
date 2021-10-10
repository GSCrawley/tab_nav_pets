import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, FontAwesome5 } from 'react-native-vector-icons'
import Icon from 'react-native-vector-icons/FontAwesome';
// import { FontAwesome5 } from '@expo/vector-icons'; 

import  HomeScreen  from './components/HomeScreen';
import  SettingScreen  from './components/SettingScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused 
              ? 'cat'
              : 'cat'
          } else if (route.name === 'Settings') {
            iconName = focused 
            ? 'dog' : 'dog'
          }
          return <FontAwesome5 name={iconName} size={size} color={color} />;
        },
      })}
>


      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingScreen} />
    </Tab.Navigator>
  </NavigationContainer>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgreen',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
