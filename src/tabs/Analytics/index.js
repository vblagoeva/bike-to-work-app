import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { StackNavigator } from 'react-navigation';

import Header from '../../components/Header';
import AnalyticsDetails from '../../scenes/AnalyticsDetails';
import { Button } from '../../components/Button';

import styles from './styles';

class AnalyticsItem extends React.Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={() => navigate('AnalyticsDetails')}>
                    <View style={styles.item}>
                        <MaterialIcons
                            name='supervisor-account'
                            size={26}
                        />
                        <View style={styles.itemTextBox}>
                            <Text style={styles.itemText}>Polar Cape Team.</Text>
                            <Text style={styles.itemLink}>22 members</Text>
                        </View>
                        <MaterialIcons
                            name='keyboard-arrow-right'
                            size={26}
                            style={styles.itemArrow}
                        />
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const AnalyticsNavigator = StackNavigator({
    AnalyticsItem: {
        screen: AnalyticsItem
    },
    AnalyticsDetails: {
        screen: AnalyticsDetails
    },
}, {
        headerMode: 'none',
        initialRouteName: 'AnalyticsItem'
    });

export default class Analytics extends React.Component {
    static navigationOptions = {
        title: 'Analytics',
        tabBarLabel: 'Analytics',
        tabBarIcon: ({ tintColor }) => <MaterialIcons name='trending-up' size={26} style={{ color: tintColor }} />
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
                <AnalyticsNavigator />
                <View style={styles.teamWrapper}>
                    <View style={styles.teamOptions}>
                        <MaterialIcons
                            name='add-circle-outline'
                            size={26}
                            style={styles.teamOptionsIcon}
                        />
                        <Text style={styles.teamOptionsLink}> Add team</Text>
                    </View>
                    <View style={styles.teamOptions}>
                        <MaterialIcons
                            name='zoom-in'
                            size={26}
                            style={styles.teamOptionsIcon}
                        />
                        <Text style={styles.teamOptionsLink}> Join team</Text>
                    </View>
                </View>
            </View>
        )
    }
}