import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, Button, StyleSheet } from 'react-native';

export default class HSComp extends Component {

  static navigationOptions = {
    title: 'NAME-OF-APP'
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>Welcome to name-of-app! Select an option.</Text>
        <Button
            style={styles.button}
            onPress={() => navigate('PickL')}
            title="View/Select List"
        />
        <Button
            style={styles.button}
            onPress={() => navigate('NewL')}
            title="Create New List"
        />
        <Button
            style={styles.button}
            onPress={() => navigate('EditI')}
            title="Edit Items"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  button: {
    flex: 2,
    margin: 200,
    width: 400,
    height: 200
  }
});
