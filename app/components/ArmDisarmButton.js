import React from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';

export default class ArmDisarmButton extends React.Component {
  constructor() {
    super();
    this._onPressButton = this._onPressButton.bind(this);
    this.state = {systemStatus: 'armed', action: 'Disarm'};
  }
  
  _onPressButton() {
      this.setState({systemStatus: this.state.systemStatus == 'disarmed' ? 'armed' : 'disarmed'})
      this.setState({action: this.state.action == 'Disarm' ? 'Arm' : 'Disarm'})
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.systemStatus}> System is {this.state.systemStatus.toUpperCase()}</Text>
        <Button buttonStyle={styles.button}
          rounded
          large
          fontSize={40}
          onPress={this._onPressButton}
          title={this.state.action}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    margin: 10,
    backgroundColor: '#008B8B'
  },
  systemStatus: {
    fontSize: 25,
    textAlign: 'center',
  }
})
