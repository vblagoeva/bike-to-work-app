import React from 'react';
import { StyleSheet, Text, View, Alert, TouchableOpacity } from 'react-native';
import * as firebase from 'firebase';

export default class Login extends React.Component {

    async fbAuth() {
        try {
            const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('1586495258073984', {
                permissions: ['public_profile'],
            });
            if (type === 'success') {
                // Get the user's name using Facebook's Graph API
                const response = await fetch(
                    `https://graph.facebook.com/me?access_token=${token}`);
                Alert.alert(
                    'Logged in!',
                    `Hi ${(await response.json()).name}!`,
                );
            }
        } catch (error) {
            console.log(error);
        }
    }

    async googleAuth() {
        try {
            const result = await Expo.Google.logInAsync({
                behavior: 'web',
                androidClientId: '295519412037-jfh25o34qlashok0pnb9n0dk7mtnln0d.apps.googleusercontent.com',
                iosClientId: '295519412037-d94s047ju590fia8912ub9si5mscaf08.apps.googleusercontent.com',
                scopes: ['profile', 'email'],
            });

            if (result.type === 'success') {
                return result.accessToken;
            } else {
                return { cancelled: true };
            }

        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.fbAuth}>
                    <Text>Login with FB</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.googleAuth}>
                    <Text>Login with Google</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
});
