import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class NListComp extends Component {

  static navigationOptions = {
    title: 'Create a New List',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Hello Again Consumer</Text>
        <Icon.Button
        name="rebel"
        backgroundColor="red">
        Destroy Something Else
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
