import { AsyncStorage } from 'react-native';
import * as firebase from 'firebase';

export const USER_KEY = 'auth-demo-key';

export const initialize = () => {
    firebase.initializeApp({
        apiKey: 'AIzaSyBqQ-AacCfhOHlhnqCeruyf3rvFYpACo3A',
        authDomain: 'bike-to-work-app.firebaseapp.com',
        databaseURL: 'https://bike-to-work-app.firebaseio.com',
        storageBucket: 'bike-to-work-app.appspot.com'
    });
}

export const onSignIn = () => AsyncStorage.setItem(USER_KEY, 'true');

export const onSignOut = () => {
    return new Promise((resolve, reject) => {
        firebase.auth().signOut().then(function () {
            AsyncStorage.removeItem(USER_KEY);
            resolve(true)
        }, function (error) {
            reject(error)
        });
    })

}

export const isSignedIn = () => {
    return new Promise((resolve, reject) => {
        AsyncStorage.getItem(USER_KEY)
            .then(res => {
                if (res !== null) {
                    resolve(true)
                } else {
                    resolve(false)
                }
            })
            .catch(err => reject(err));
    });
};

