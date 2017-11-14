import React from 'react';
import { View, Text } from 'react-native';
import { Button } from '../Button';

import styles from './styles';

export default class Drawer extends React.Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text style={styles.header}>
                    Drawer
                </Text>
                <Button onPress={() => navigate('DrawerClose')}>
                    Close
                </Button>
            </View>

        );
    }
}