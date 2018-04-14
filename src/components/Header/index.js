import React from 'react';
import { View, Text } from 'react-native';

import HeaderButton from '../HeaderButton';

import styles from './styles';

export default class Header extends React.Component {
    render() {
        const { navigate, title } = this.props;
        return (
            <View style={styles.container}>
                <HeaderButton
                    style={styles.menuBtn}
                    onPress={() => navigate('DrawerOpen')}
                />
                <Text style={styles.header}>{title}</Text>
            </View>
        );
    }
}