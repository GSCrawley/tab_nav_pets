import React from 'react' 
import { TouchableHighlight, Text } from 'react-native' 


function Cell({ title, showDetails }) {

    return (
        <TouchableHighlight
            style={{ padding: 20 }}
            onPress={() => showDetails()}
            underlayColor="yellow"
            >

        <Text>{ title }</Text>
        </TouchableHighlight>
    )
}

export default Cell
