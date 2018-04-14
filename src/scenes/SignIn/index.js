import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { onSignIn } from '../../../auth';

import Login from '../Login';

import styles from './styles';

export default ({ navigation }) => (
    <View style={styles.container}>
        <ImageBackground
            source={require('../../assets/bike.jpg')}
            style={styles.cover}
        ></ImageBackground>
        <Login navigation={navigation} />
    </View>
);
