import React from 'react';
import { View, Text } from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';

import Header from '../../components/Header';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { ButtonLink } from '../../components/ButtonLink';

import styles from './styles';

export default class Record extends React.Component {
    static navigationOptions = {
        title: 'Record',
        tabBarLabel: 'Record',
        tabBarIcon: ({ tintColor }) => <MaterialIcons name='fiber-manual-record' size={26} style={{ color: tintColor }} />
    }
    render() {
        let { navigate } = this.props.navigation;
        let { routeName } = this.props.navigation.state;
        return (
            <View style={styles.container}>
                <Header
                    navigate={navigate}
                    title={routeName}
                />
                <View style={styles.inputBox}>
                    <Input
                        placeholder={'Name'}
                    />
                    <Input
                        placeholder={'Time'}
                    />
                    <Input
                        placeholder={'Km'}
                    />
                    <Button>
                        SAVE
                    </Button>
                    <View style={styles.btnLink}>
                        <MaterialIcons
                            name='close'
                            size={14}
                            style={styles.btnLinkIcon}
                        />
                        <ButtonLink>
                            Clear the record
                        </ButtonLink>
                    </View>
                </View>
            </View>
        )
    }
}

