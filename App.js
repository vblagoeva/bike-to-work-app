import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { DrawerNavigator, TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-vector-icons/Ionicons';

import Record from './src/tabs/Record';
import Reports from './src/tabs/Reports';
import Analytics from './src/tabs/Analytics';

import Drawer from './src/components/Drawer';
import HeaderButton from './src/components/HeaderButton';
import { Button } from './src/components/Button';

import * as firebase from 'firebase';

// Tab navigation for Reports, Record and Analytics screens
const TabNavigation = TabNavigator({
  Reports: {
    screen: Reports,
  },
  Record: {
    screen: Record,
  },
  Analytics: {
    screen: Analytics,
  },
});

// Wrap tab navigation into drawer navigation
const TabsWithDrawerNavigation = DrawerNavigator({
  Tabs: {
    screen: TabNavigation,
  }
}, {
    // Register custom drawer component
    contentComponent: props => <Drawer {...props} />
  });


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
      <TabsWithDrawerNavigation />
    );
  }
}
