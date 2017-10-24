import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import firebase from 'firebase';

// firebase.initializeApp({
//   apiKey: "AIzaSyBqQ-AacCfhOHlhnqCeruyf3rvFYpACo3A",
//   authDomain: "bike-to-work-app.firebaseapp.com",
//   databaseURL: "https://bike-to-work-app.firebaseio.com",
//   storageBucket: "bike-to-work-app.appspot.com"
// });


export default class App extends React.Component {
  render() {
    return (
      <TouchableOpacity onPress={this._onPressButton}>
        <Text>Login with FB</Text>
      </TouchableOpacity>
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
