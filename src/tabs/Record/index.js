import React from 'react';
import { View, Text } from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import DatePicker from 'react-native-datepicker';
import * as firebase from 'firebase';
import auth from '../../../auth';

import Header from '../../components/Header';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { ButtonLink } from '../../components/ButtonLink';

import styles from './styles';

export default class Record extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            date: '',
            time: '',
            activity_name: '',
            distance: ''
        }

        this.saveRecord = this.saveRecord.bind(this);
    }

    static navigationOptions = {
        title: 'Record',
        tabBarLabel: 'Record',
        tabBarIcon: ({ tintColor }) => <MaterialIcons name='fiber-manual-record' size={26} style={{ color: tintColor }} />
    }

    saveRecord() {
        const firebaseActivityRef = firebase.database().ref('activities');

        firebaseActivityRef.push().set({
            date: this.state.date,
            time: this.state.time,
            activity_name: this.state.activity_name,
            distance: this.state.distance
        });
    }

    clearRecord() {

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
                <View style={styles.form}>
                    <Text style={styles.formLabel}>Date</Text>
                    <View style={styles.formItem}>
                        <MaterialIcons
                            name='event'
                            size={20}
                            style={styles.formIcon}
                        />
                        <DatePicker
                            style={{ width: 320 }}
                            date={this.state.date}
                            mode='date'
                            placeholder='select date'
                            format='YYYY-MM-DD'
                            minDate='2017-11-11'
                            maxDate='2019-11-11'
                            showIcon={false}
                            customStyles={{
                                dateInput: {
                                    borderColor: '#fff',
                                    borderBottomColor: '#D8D6D7',
                                },
                                dateText: {
                                    color: '#6E727E',
                                    position: 'absolute',
                                    left: 20,
                                    top: 8
                                },
                                dateIcon: {
                                    height: 0,
                                },
                            }}
                            onDateChange={(date) => { this.setState({ date: date }) }}
                        />
                    </View>
                    <Text style={styles.formLabel}>Duration of your ride</Text>
                    <View style={styles.formItem}>
                        <MaterialIcons
                            name='access-time'
                            size={20}
                            style={styles.formIcon}
                        />
                        <DatePicker
                            style={{ width: 320 }}
                            date={this.state.time}
                            mode='time'
                            format="HH:mm"
                            placeholder='select time'
                            showIcon={false}
                            customStyles={{
                                dateInput: {
                                    borderColor: '#fff',
                                    borderBottomColor: '#D8D6D7',
                                },
                                dateText: {
                                    color: '#6E727E',
                                    position: 'absolute',
                                    left: 20,
                                    top: 8
                                }
                            }}
                            onDateChange={(time) => { this.setState({ time: time }) }}
                        />
                    </View>
                    <View style={styles.formItem}>
                        <MaterialIcons
                            name='account-circle'
                            size={20}
                            style={styles.formIconInput}
                        />
                        <Input
                            label={'Name of your ride'}
                            placeholder={'Name'}
                            onChangeText={activity_name => this.setState({ activity_name })}
                        />
                    </View>
                    <View style={styles.formItem}>
                        <MaterialIcons
                            name='directions-bike'
                            size={20}
                            style={styles.formIconInput}
                        />
                        <Input
                            label={'Kilometers passed'}
                            placeholder={'Distance'}
                            keyboardType={'numeric'}
                            onChangeText={distance => this.setState({ distance })}
                        />
                    </View>
                    <ButtonLink
                        onPress={this.clearRecord}>
                        Clear the record
                    </ButtonLink>
                    <Button
                        onPress={this.saveRecord}>
                        SAVE
                    </Button>
                </View>
            </View>
        )
    }
}

