import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { createRootNavigator, SignedOut, SignedIn } from './src/navigation/RootNavigation';
import { isSignedIn } from './auth';

import Settings from './src/scenes/Settings';

import Record from './src/tabs/Record';
import Reports from './src/tabs/Reports';
import Analytics from './src/tabs/Analytics';
import { initialize } from './auth.js';

import Drawer from './src/components/Drawer';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      signedIn: false,
      checkedSignIn: false,
    };
  }

  componentWillMount() {
    initialize();

    isSignedIn()
      .then(res => this.setState({ signedIn: res, checkedSignIn: true }))
      .catch(err => {
        console.log(err);
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
