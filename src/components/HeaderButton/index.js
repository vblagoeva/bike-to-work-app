import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';

import styles from './styles';

export default class HeaderButton extends React.Component {
    static propTypes = {
        onPress: PropTypes.func.isRequired,
        icon: PropTypes.string.isRequired,
    };

    static defaultProps = {
        icon: 'md-menu',
    }

    render() {
        return (
            <View style={styles.container}>
                <MaterialIcons
                    name='menu'
                    size={26}
                    onPress={this.props.onPress}
                    style={styles.menuIcon}
                />
            </View>

        );
    }
}
