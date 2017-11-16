import React from 'react';
import { Text, View } from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';

import BackButton from '../../components/BackButton';

import styles from './styles';

export default class Settings extends React.Component {

    render() {
        const { navigate } = this.props.navigation;
        let { routeName } = this.props.navigation.state;
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <BackButton
                        onPress={() => navigate('Record')}
                    />
                    <Text style={styles.headerTitle}>{routeName}</Text>
                </View>
            </View>
        )
    }
}