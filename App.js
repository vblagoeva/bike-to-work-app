import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { createRootNavigator, SignedOut, SignedIn } from './src/navigation/RootNavigation';
import { isSignedIn } from './auth';

import Settings from './src/scenes/Settings';

import Record from './src/tabs/Record';
import Reports from './src/tabs/Reports';
import Analytics from './src/tabs/Analytics';

import Drawer from './src/components/Drawer';

import * as firebase from 'firebase';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      signedIn: false,
      checkedSignIn: false,
    };
  }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBqQ-AacCfhOHlhnqCeruyf3rvFYpACo3A',
      authDomain: 'bike-to-work-app.firebaseapp.com',
      databaseURL: 'https://bike-to-work-app.firebaseio.com',
      storageBucket: 'bike-to-work-app.appspot.com'
    });

    isSignedIn()
      .then(res => this.setState({ signedIn: res, checkedSignIn: true }))
      .catch(err => {
        console.log(err);
        // alert('An error occurred')
      });
  }

  render() {
    const { checkedSignIn, signedIn } = this.state;

    if (!checkedSignIn) {
      return null;
    }

    const Layout = createRootNavigator(signedIn);
    return <Layout />;

  }
}
