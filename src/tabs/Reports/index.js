import React from 'react';
import { View, Text } from 'react-native';

import HeaderButton from '../../components/HeaderButton';
import { Button } from '../../components/Button';

import styles from './styles';

export default class Reports extends React.Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <HeaderButton onPress={() => navigate('DrawerOpen')} />
                <Text style={styles.header}>Reports</Text>
            </View>
        )
    }
}