import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from './styles';

const NavLink = ({ onPress, children }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={styles.text}>{children}</Text>
        </TouchableOpacity>
    )

}

export { NavLink };