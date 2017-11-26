import React from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';

import styles from './styles';

const ButtonGoogle = ({ onPress, children }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Image
                source={require('../../assets/icon-google.png')}
                style={{ width: 16, height: 18, marginRight: 10 }}
            />
            <Text style={styles.text}>{children}</Text>
        </TouchableOpacity>
    )

}

export { ButtonGoogle };