import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class EIComp extends Component {

    static navigationOptions = {
        title: 'Edit Items',
    };

    render() {
        return (
            <View style={styles.container}>
<Text>Please insert the name of the food :</Text>
<TextInput style={styles.textInput}/>
<TouchableOpacity style={styles.button}>
  <Text>Submit</Text>
</TouchableOpacity>

<TouchableOpacity style={styles.button}>
  <Text>Reset</Text>
</TouchableOpacity>

<Text>Please select the picture of the food :</Text>


<TouchableOpacity style={styles.button}>
  <Text>Add Item</Text>
</TouchableOpacity>

      </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',


    },
    textInput: {
        marginTop: 10,
        margin: 10,
        alignItems: 'flex-start'
    },

    button: {
        margin: 5,
        backgroundColor: '#85c1e9',
        alignItems: 'center',
        justifyContent: 'center',
    }

}
);
