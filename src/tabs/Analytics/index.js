import React from 'react';
import { View, Text } from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';

import Header from '../../components/Header';
import { Button } from '../../components/Button';

import styles from './styles';

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
            </View>
        )
    }
}