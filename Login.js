import React from 'react';
import { StyleSheet, Text, View, Alert, TouchableOpacity } from 'react-native';
import * as firebase from 'firebase';

import { Input } from './components/Input';
import { Button } from './components/Button';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: '',
            loading: false
        }
    }

    logIn() {
        this.setState({ error: '', loading: true });

        const { email, password } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => { this.setState({ error: '', loading: false }); })
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(() => { this.setState({ error: '', loading: false }); })
                    .catch(() => {
                        this.setState({ error: 'Authentication failed', loading: false });
                    });
            });

    }

    renderButtonOrSpinner() {
        if (this.state.loading) {
            return <Text>Loading</Text>
        }
        return <Button onPress={this.logIn.bind(this)}>LOG IN</Button>
    }

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
                <Input
                    placeholder='Email'
                    onChangeText={email => this.setState({ email })}
                    value={this.state.email}
                />
                <Input
                    placeholder='Password'
                    secureTextEntry
                    onChangeText={password => this.setState({ password })}
                    value={this.state.password}
                />
                {this.renderButtonOrSpinner()}
                <Button onPress={this.fbAuth}>Login with FB</Button>
                <Button onPress={this.googleAuth}>Login with Google</Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 30
    },
});
