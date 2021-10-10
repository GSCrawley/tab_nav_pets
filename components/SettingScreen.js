import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function SettingsScreen() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Settings!</Text>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1, 
        width:'100%', 
        height: '90%', 
        alignItems: 'center', 
        justifyContent: 'center', 
        backgroundColor:'orange'
    },
    title: {
        fontSize: 36, 
        fontWeight: 'bold', 
        color: 'lightgreen'
    }
})