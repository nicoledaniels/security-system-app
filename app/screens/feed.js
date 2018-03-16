import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from 'react-native-elements';

export default class Feed extends React.Component {

  render() {
    return (
      <View style={styles.feedContainer}>
        <Header
          centerComponent={{text: 'Feed', style: {color: '#fff'}}} 
        />
        <View style={styles.textContainer}>
          <Text>This is the Feed Page</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  feedContainer: {
    flex: 1,
  },
  textContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
