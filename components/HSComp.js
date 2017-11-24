import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image, Text, View, Button, StyleSheet, TouchableOpacity } from 'react-native';

export default class HSComp extends Component {

    static navigationOptions = {
        title: 'NAME-OF-APP'
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>

      <Image source={require('../assets/icons/app-icon.png')} />

        <Text style= {styles.Text}>Welcome to name-of-app! Select an option.</Text>

            
            <TouchableOpacity style={styles.button} onPress={() => navigate('PickL')}>
                <Text style={styles.buttonText}> Existing Lists </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigate('NewL')}>
                <Text style={styles.buttonText}> Create List </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigate('EditI')}>
                <Text style={styles.buttonText}> Add Items </Text>
            </TouchableOpacity>

      </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#85c1e9',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    Text: {
        flex: 2,
        fontSize: 15,

    },
    button: {
        flex: 4,
        backgroundColor: '#85c1e9',
        paddingLeft: 100,
        paddingRight: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
