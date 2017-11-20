import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import HSComp from './components/HSComp';
import VSListComp from './components/VSList';
import NListComp from './components/NList';
import EIComp from './components/EIComp';

const SimpleApp = StackNavigator({
    Home: {
      screen: HSComp
    },
    PickL: {
      screen: VSListComp
    },
    NewL: {
      screen: NListComp
    },
    EditI: {
      screen: EIComp
    }
});

export default class App extends Component {
  render() {
    return (
      <SimpleApp/>
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
