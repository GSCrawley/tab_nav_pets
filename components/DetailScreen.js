import * as React from 'react';
import { Text, View, StyleSheet, ScrollView, SafeAreaView  } from 'react-native';



export default function DetailScreen({ route }) {
  const { item } = route.params;
  const keys = Object.keys(item).filter(key => key != 'breed')
    
  return (
    <SafeAreaView>

      <View style={styles.container}>
        <Text style={styles.item}>Details!</Text>
        <ScrollView>
        {keys.map(key => <FeatureView name={[key]} value={item[key]} key={[key]}/>)}
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
      fontSize: 32, 
      margin:20,
      justifyContent: 'center',  
      color: 'lightgreen' 
    }
  })
