import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.text}>{children}</Text>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    button: {
        marginTop: 10,
        padding: 20,
        width: '100%',
        backgroundColor: '#1AA6B7',
        borderRadius: 4,
    },
    text: {
        color: '#fff',
        fontSize: 14,
        textAlign: 'center'
    }

});

export { Button };