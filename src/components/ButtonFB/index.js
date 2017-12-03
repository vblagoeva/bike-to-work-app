import React from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';

import styles from './styles';

const ButtonFB = ({ onPress, children }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Image
                source={require('../../assets/icon-facebook.png')}
                style={{ width: 8, height: 18, marginRight: 10 }}
            />
            <Text style={styles.text}>{children}</Text>
        </TouchableOpacity>
    )

}

export { ButtonFB };