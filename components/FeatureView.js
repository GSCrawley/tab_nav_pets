import React, { Component } from 'react' 
import { View, Text } from 'react-native'

export default function FeatureView({ name, value }) {   
        return (
            <View style={{ 
                justifyContent: 'center', 
                flexDirection: 'row',
                backgroundColor: 'white',
                width: '90%',
                // marginRight: 20 ,
                // marginLeft: 20,
                padding: 5,
                paddingRight:80,
                paddingLeft:80,
                
                }}>
            
                <Text style={{
                    fontSize: 16,
                    color: 'darkblue'
                }}>{name}</Text> 

                <Text style={{
                    fontSize: 18,
                    color: 'darkblue'
                }}>{value}</Text>
             
            </View>
        
    )
}