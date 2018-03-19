import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from 'react-native-elements'
import ArmDisarmButton from '../components/ArmDisarmButton';

export default class Control extends React.Component {
  render() {
    return (
      <View style={styles.controlContainer}>
        <Header
          centerComponent={{text: 'On/Off', style: {color: '#fff'}}}
        />
        <ArmDisarmButton />
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
