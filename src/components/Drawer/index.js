import React from 'react';
import { View, Text, ImageBackground, Button } from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';

import Settings from '../../scenes/Settings';
import Logout from '../../scenes/Logout';

import { ButtonLink } from '../ButtonLink';

import styles from './styles';


export default class Drawer extends React.Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <ImageBackground
                    source={require('../../assets/bike.jpg')}
                    style={styles.header}>
                    <View style={styles.headerBox}>
                        <Text style={styles.headerName}>Jeremy Lowell</Text>
                    </View>
                </ImageBackground>
                <ButtonLink
                    title='Settings'
                    onPress={() => navigate('Settings')}
                >
                    <MaterialIcons
                        name='settings'
                        size={16}
                    />
                    Settings
                </ButtonLink>
                <ButtonLink
                    title='Logout'
                    onPress={() => navigate('Logout')}
                >
                    <MaterialIcons
                        name='exit-to-app'
                        size={16}
                    />
                    Log out
                </ButtonLink>
            </View>

        );
    }
}