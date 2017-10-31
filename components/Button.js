import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, text }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    button: {
        marginTop: 10,
        padding: 20,
        width: '100%',
        backgroundColor: '#eee',
        borderRadius: 4,
    },
    text: {
        color: '#fff',
        fontSize: 18,
    }

});

export { Button };