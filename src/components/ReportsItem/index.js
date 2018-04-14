import React from 'react';
import { View, Text } from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { TabNavigator } from 'react-navigation';

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
        tabBarPosition: 'top'
    });

export default class ReportsItem extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <ReportsTabs />
            </View>

        );
    }
}

