import React from 'react';
import { FlatList } from 'react-native'
import Cell from './Cell'
import { dogs } from '../breeds'

export default function ListDogs({navigation}) {
  return (
    <FlatList
      style={{ flex:1, padding: 110, paddingTop: 20, marginBottom:40, backgroundColor:'lightblue' }}
      data= {dogs}
      renderItem= {( {item, index} ) => {
        return (
          <Cell 
            title={` ${item.breed} `} 
            data={item} 
            key={index.breed}
            showDetails={() => navigation.navigate('Details', { item })} 
          />
        )
      }}
      keyExtractor={(item) => item.breed}
    />
  )
}