import React from 'react';
import { View, Text } from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { TabNavigator } from 'react-navigation';

import Header from '../../components/Header';
import ReportsItem from '../../components/ReportsItem';
import { Button } from '../../components/Button';

import styles from './styles';

class ReportsDay extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Day',
    };
    render() {
        return (
            <View style={styles.container}>
                <Text>Day view</Text>
            </View>

        );
    }
}

class ReportsWeek extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Week',
    };
    render() {
        return (
            <View style={styles.container}>
                <Text>Week view</Text>
            </View>

        );
    }
}

class ReportsMonth extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Month',
    };
    render() {
        return (
            <View style={styles.container}>
                <Text>Month view</Text>
            </View>

        );
    }
}

export const ReportsTabs = TabNavigator({
    Day: {
        screen: ReportsDay,
    },
    Week: {
        screen: ReportsWeek,
    },
    Month: {
        screen: ReportsMonth,
    },
}, {
        tabBarPosition: 'top',
        swipeEnabled: false,
        lazyLoad: true,
        animationEnabled: false,
        tabBarOptions: {
            activeTintColor: '#1AA6B7',
            inactiveTintColor: '#FFF',
            style: {
                backgroundColor: '#022D41',
            },
            indicatorStyle: {
                backgroundColor: '#1AA6B7',
            },
        }
    });


export default class Reports extends React.Component {

    static navigationOptions = {
        title: 'Reports',
        tabBarLabel: 'Reports',
        tabBarIcon: ({ tintColor }) => <MaterialIcons name='assignment' size={26} style={{ color: tintColor }} />
    }
    render() {
        let { navigate } = this.props.navigation;
        let { routeName } = this.props.navigation.state;
        return (
            <View style={styles.container}>
                <Header
                    navigate={navigate}
                    title={routeName}
                />
                <ReportsTabs />
            </View>
        )
    }
}