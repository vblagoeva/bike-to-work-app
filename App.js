import React from 'react';
import { StyleSheet, View } from 'react-native';
import * as firebase from 'firebase';

import Login from './scenes/Login';

export default class App extends React.Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBqQ-AacCfhOHlhnqCeruyf3rvFYpACo3A',
      authDomain: 'bike-to-work-app.firebaseapp.com',
      databaseURL: 'https://bike-to-work-app.firebaseio.com',
      storageBucket: 'bike-to-work-app.appspot.com'
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Login />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
