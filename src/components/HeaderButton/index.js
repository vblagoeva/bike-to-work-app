import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

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
                <Icon.Button
                    name={this.props.icon}
                    size={26}
                    color="#4F8EF7"
                    backgroundColor="#FFF"
                    onPress={this.props.onPress}
                />
            </View>

        );
    }
}
