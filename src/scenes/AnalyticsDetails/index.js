import React from 'react';
import { Text, View } from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';

import BackButton from '../../components/BackButton';

import styles from './styles';

export default class AnalyticsDetails extends React.Component {
    render() {
        const { navigate } = this.props.navigation;
        let { routeName } = this.props.navigation.state;
        return (
            <View style={styles.container}>
                <View style={styles.team}>
                    <MaterialIcons
                        name='supervisor-account'
                        size={26}
                    />
                    <View style={styles.teamTextBox}>
                        <Text style={styles.teamText}>Polar Cape Team</Text>
                        <Text style={styles.teamTextBlue}>22 members</Text>
                    </View>
                </View>
                <View style={styles.teamItem}>
                    <MaterialIcons
                        name='person'
                        size={26}
                    />
                    <View style={styles.teamTextBox}>
                        <Text style={styles.teamName}>Valentina Blagoeva</Text>
                        <Text style={styles.teamTextBlue}>Today</Text>
                    </View>
                    <Text style={styles.teamDistance}>12 km</Text>
                </View>
            </View>
        );
    }
}
