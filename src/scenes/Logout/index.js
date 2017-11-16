import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

export default class Logout extends React.Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text>Logout</Text>
            </View>

        );
    }
}