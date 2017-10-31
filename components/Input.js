import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

const Input = ({ label, onChangeText, placeholder, secureTextEntry, value }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                autoCorrect={false}
                onChangeText={onChangeText}
                placeholder={placeholder}
                style={styles.input}
                secureTextEntry={secureTextEntry}
                value={value}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        width: '100%',
        borderColor: '#fff',
        borderBottomWidth: 2
    },
    label: {
        padding: 5,
        paddingBottom: 0,
        color: '#fff',
        fontSize: 17,
        width: '100%'
    },
    input: {
        paddingRight: 5,
        paddingLeft: 5,
        paddingBottom: 2,
        color: '#fff',
        fontSize: 18,
        width: '100%'
    }
});

export { Input };
