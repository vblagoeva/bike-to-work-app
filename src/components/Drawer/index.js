import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';

import Settings from '../../scenes/Settings';
import Logout from '../../scenes/Logout';

import { NavLink } from '../NavLink';

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
                <View style={styles.navItem}>
                    <MaterialIcons
                        name='settings'
                        size={20}
                        style={styles.navIcon}
                    />
                    <NavLink
                        title='Settings'
                        onPress={() => navigate('Settings')}
                    >
                        Settings
                </NavLink>
                </View>
                <View style={styles.navItem}>
                    <MaterialIcons
                        name='exit-to-app'
                        size={20}
                        style={styles.navIcon}
                    />
                    <NavLink
                        title='Logout'
                        onPress={() => navigate('Logout')}
                    >
                        Logout
                </NavLink>
                </View>
            </View>

        );
    }
}