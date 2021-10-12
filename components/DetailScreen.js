import * as React from 'react';
import { Text, View, StyleSheet, ScrollView, SafeAreaView  } from 'react-native';
import  FeatureView  from './FeatureView'


export default function Details({ route }) {
  const { item } = route.params;
  const keys = Object.keys(item).filter(key => key != 'breed')
    
  return (
    <SafeAreaView>

      <View style={styles.container}>
        <Text style={styles.item}>{ item.breed }</Text>
        <ScrollView>                                                                
        {keys.map(key => <FeatureView name={key} value={item[key]} key={[key]}/>)}
        </ScrollView>
        
            </View>
              </SafeAreaView>

    );
  }

  const styles = StyleSheet.create({
    container: {
      flexWrap: 'wrap', 
      margin: 80, 
      padding: 40, 
      alignItems: 'center', 
      justifyContent: 'center', 
      backgroundColor: 'lightblue' 
    },
    item: {
      fontSize: 20, 
      margin:20,
      justifyContent: 'center',  
      color: 'blue' 
    }
  })
