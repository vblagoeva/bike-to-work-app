import React from 'react';
import { View, Text } from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';

import HeaderButton from '../../components/HeaderButton';
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
            </View>
        )
    }
}