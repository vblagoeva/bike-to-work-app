import React from 'react';
import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation';

import SignUp from '../../scenes/SignUp';
import SignIn from '../../scenes/SignIn';
import Settings from '../../scenes/Settings';

import Record from '../../tabs/Record';
import Reports from '../../tabs/Reports';
import Analytics from '../../tabs/Analytics';

import Drawer from '../../components/Drawer';

import styles from './styles';

export const SignedOut = StackNavigator({
    SignIn: {
        screen: SignIn,
        navigationOptions: {
            title: "Sign In",
        }
    },
    SignUp: {
        screen: SignUp,
        navigationOptions: {
            title: "Sign Up",
        }
    }
}, {
        headerMode: "none",
    });


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
export const SignedIn = DrawerNavigator({
    Tabs: {
        screen: TabNavigation,
    },
    Settings: {
        screen: Settings,
    },
}, {
        // Register custom drawer component
        contentComponent: props => <Drawer {...props} />,
    });


export const createRootNavigator = (signedIn = false) => {
    return StackNavigator(
        {
            SignedIn: {
                screen: SignedIn,
                navigationOptions: {
                    gesturesEnabled: false
                }
            },
            SignedOut: {
                screen: SignedOut,
                navigationOptions: {
                    gesturesEnabled: false
                }
            }
        },
        {
            headerMode: "none",
            mode: "modal",
            initialRouteName: signedIn ? "SignedIn" : "SignedOut"
        }
    );
};