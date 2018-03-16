import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from 'react-native-elements'

export default class Control extends React.Component {
  render() {
    return (
      <View style={styles.controlContainer}>
        <Header
          centerComponent={{text: 'On/Off', style: {color: '#fff'}}}
        />
        <View style={styles.textContainer}>
          <Text>This is the Control Page</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  controlContainer: {
    flex: 1,
  },
  textContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
