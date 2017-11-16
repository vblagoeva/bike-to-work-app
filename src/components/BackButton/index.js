import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';

import styles from './styles';

export default class BackButton extends React.Component {
    static propTypes = {
        onPress: PropTypes.func.isRequired,
        icon: PropTypes.string.isRequired,
    };

    static defaultProps = {
        icon: 'arrow-back',
    }

    render() {
        return (
            <View style={styles.container}>
                <MaterialIcons
                    name='arrow-back'
                    size={26}
                    onPress={this.props.onPress}
                    style={styles.backIcon}
                />
            </View>

        );
    }
}
