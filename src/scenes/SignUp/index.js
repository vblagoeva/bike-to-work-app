import React from 'react';
import { View, Text } from 'react-native';
import Login from '../Login';
import { Button } from '../../components/Button';
import { onSignIn } from '../../../auth';

import styles from './styles';

export default ({ navigation }) => (
    <View style={{ paddingVertical: 20 }}>
        <Button
            buttonStyle={{ marginTop: 20 }}
            backgroundColor="#03A9F4"
            title="SIGN UP"
            onPress={() => {
                onSignIn().then(() => navigation.navigate("SignedIn"));
            }}
        />
        <Button
            buttonStyle={{ marginTop: 20 }}
            backgroundColor="transparent"
            textStyle={{ color: "#bcbec1" }}
            title="Sign In"
            onPress={() => navigation.navigate("SignIn")}
        />
    </View>
);