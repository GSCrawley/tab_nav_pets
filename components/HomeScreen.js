import React, { useState, useMemo } from 'react';
import { Text, View, StyleSheet, FlatList, Button, SafeAreaView } from 'react-native';
import Cell from './Cell'
import { cats, dogs } from '../breeds'


export default function HomeScreen({ navigation }) {
    const [ showCats, setshowCats ] = useState(false);
    const renderItem=( {item, index} ) => (
            <Cell 
            // style={{color: 'darkblue'}}
            title={` ${item.breed} `} data={item} 
            showDetails={() => navigation.navigate('Details', { item })} 
            />
            )
    const memoizedValue = useMemo(() => renderItem, [showCats])
    return (
        <View style={styles.container}>
            <SafeAreaView>
            <FlatList
                style={styles.list}
                data={showCats ? cats : dogs }
                renderItem={ memoizedValue }
                keyExtractor={(item) => item.breed}
                    />
            </SafeAreaView>
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
    list: { 
        flex:1, 
        padding: 110, 
        paddingTop: 20, 
        marginBottom:40, 
        backgroundColor:'lightblue' 
    },
    title: {
        fontSize: 36, 
        fontWeight: 'bold', 
        color: 'lightyellow'
    }
})