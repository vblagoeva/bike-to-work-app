import React from 'react';
import { View, Text, TextInput } from 'react-native';

import styles from './styles';

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
                underlineColorAndroid={'transparent'}
            />
        </View>
    )
}

export { Input };