import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBqQ-AacCfhOHlhnqCeruyf3rvFYpACo3A",
  authDomain: "bike-to-work-app.firebaseapp.com",
  databaseURL: "https://bike-to-work-app.firebaseio.com",
  storageBucket: "bike-to-work-app.appspot.com"
};

firebase.initializeApp(firebaseConfig);

export default class App extends React.Component {

  logIn() {
    const { type, token } = Expo.Facebook.logInWithReadPermissionsAsync('1586495258073984', {
      permissions: ['public_profile'],
    });

    console.log('test');
    if (type === 'success') {
      // Get the user's name using Facebook's Graph API
      const response = fetch(
        `https://graph.facebook.com/me?access_token=${token}`);
      Alert.alert(
        'Logged in!',
        `Hi ${(response.json()).name}!`,
      );
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.logIn()}>
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
