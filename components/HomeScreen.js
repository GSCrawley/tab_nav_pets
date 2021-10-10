import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function HomeScreen() {
    return (
      <View style={styles.container }>
        <Icon name={'jedi-order'} size={5} color={'orange'} />
        {/* style={styles.title}>Welcome Home! */}
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
        backgroundColor:'lightgreen'
    },
    // title: {
    //     fontSize: 36, 
    //     fontWeight: 'bold', 
    //     color: 'orange'
    // }
})