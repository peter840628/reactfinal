import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class EIComp extends Component {

  static navigationOptions = {
    title: 'Edit Items',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Hello Once More, Consumer</Text>
        <Icon.Button
        name="rebel"
        backgroundColor="blue">
        Destroy the Ottoman Empire
        </Icon.Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
