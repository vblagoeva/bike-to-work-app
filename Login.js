import React from 'react';
import { StyleSheet, ActivityIndicator, Text, View, Alert, TouchableOpacity } from 'react-native';
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
            .then((response) => {
                this.setState({ error: '', loading: false });
            })
            .catch((error) => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then((temp) => {
                        this.setState({ error: '', loading: false });
                    })
                    .catch((error) => {
                        this.setState({ error: 'Authentication failed', loading: false });
                    });
            });

    }

    renderButtonOrSpinner() {
        if (this.state.loading) {
            return <ActivityIndicator size='small' />
        }
        return <Button onPress={this.logIn.bind(this)}>LOG IN</Button>
    }

    async fbAuth() {
        try {
            const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('1586495258073984', {
                permissions: ['public_profile'],
            });

            console.log(type);
            if (type === 'success') {
                const credential = firebase.auth.FacebookAuthProvider.credential(token);

                // Sign in with credential from the Facebook user.
                firebase.auth().signInWithCredential(credential).catch((error) => {
                    // Handle Errors here.
                    console.log(error);
                });
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
            console.log(result)
            if (result.type === 'success') {
                const credential = firebase.auth.GoogleAuthProvider.credential(result.idToken);

                // Sign in with credential from the Facebook user.
                firebase.auth().signInWithCredential(credential).catch((error) => {
                    // Handle Errors here.
                    console.log(error)
                });
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
