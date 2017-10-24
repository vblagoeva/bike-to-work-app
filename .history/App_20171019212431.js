import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyBqQ-AacCfhOHlhnqCeruyf3rvFYpACo3A",
  authDomain: "bike-to-work-app.firebaseapp.com",
  databaseURL: "https://bike-to-work-app.firebaseio.com",
  storageBucket: "bike-to-work-app.appspot.com"
}

const firebaseRef = firebase.initializeApp(config);


export default class App extends React.Component {

  _fbAuth() {

  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this._fbAuth}>
          <Text>Login with FB</Text>
        </TouchableOpacity>
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
