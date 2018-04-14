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
                <View style={styles.item}>
                    <MaterialIcons
                        name='access-time'
                        size={26}
                    />
                    <View style={styles.itemTextBox}>
                        <Text style={styles.itemText}>You have reported your time for</Text>
                        <Text style={styles.itemTextRed}>today.</Text>
                    </View>
                    <Text style={styles.itemDate}>1:47:07</Text>
                </View>
                <View style={styles.item}>
                    <MaterialIcons
                        name='supervisor-account'
                        size={26}
                    />
                    <View style={styles.itemTextBox}>
                        <Text style={styles.itemText}>You joined Polar Cape team.</Text>
                        <Text style={styles.itemLink}>view more</Text>
                    </View>
                </View>
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
                <View style={styles.item}>
                    <MaterialIcons
                        name='access-time'
                        size={26}
                    />
                    <View style={styles.itemTextBox}>
                        <Text style={styles.itemText}>You have reported your time for</Text>
                        <Text style={styles.itemTextRed}>22.12.2017.</Text>
                    </View>
                    <Text style={styles.itemDate}>54:32</Text>
                </View>
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
                <View style={styles.item}>
                    <MaterialIcons
                        name='access-time'
                        size={26}
                    />
                    <View style={styles.itemTextBox}>
                        <Text style={styles.itemText}>You have reported your time for</Text>
                        <Text style={styles.itemTextRed}>December.</Text>
                    </View>
                    <Text style={styles.itemDate}>24:45</Text>
                </View>
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
        initialRouteName: 'Day',
        tabBarOptions: {
            activeTintColor: '#022D41',
            inactiveTintColor: '#022D41',
            style: {
                backgroundColor: '#FFF',
            },
            indicatorStyle: {
                backgroundColor: '#022D41',
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
                <View style={styles.customReport}>
                    <MaterialIcons
                        name='add-circle-outline'
                        size={26}
                        style={styles.customReportIcon}
                    />
                    <Text style={styles.customReportLink}> Custom report</Text>
                </View>
            </View>
        )
    }
}