import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { DrawerNavigator, TabNavigator } from 'react-navigation';

import Record from './src/tabs/Record';
import Reports from './src/tabs/Reports';
import Analytics from './src/tabs/Analytics';

import Drawer from './src/components/Drawer';
import Header from './src/components/Header';
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
}, {
    tabBarPosition: 'bottom',
    animationEnabled: true,
    initialRouteName: 'Record',
    tabBarOptions: {
      activeTintColor: '#1AA6B7',
      inactiveTintColor: '#FFF',
      showIcon: true,
      showLabel: false,
      style: {
        backgroundColor: '#022D41',
      },
      indicatorStyle: {
        backgroundColor: '#1AA6B7',
      },
    }
  });

// Wrap tab navigation into drawer navigation
const TabsWithDrawerNavigation = DrawerNavigator({
  Tabs: {
    screen: TabNavigation,
  }
}, {
    // Register custom drawer component
    contentComponent: props => <Drawer {...props} />,
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
