import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class VSListComp extends Component {

  static navigationOptions = {
    title: 'View/Select List',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Hello Consumer!</Text>
        <Icon.Button
        name="rebel"
        backgroundColor="blue">
        Destroy the Empire
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
