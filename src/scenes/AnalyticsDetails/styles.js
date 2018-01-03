import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    team: {
        padding: 20,
        flexDirection: 'row',
        width: '100%',
        marginBottom: 10
    },
    teamTextBox: {
        paddingLeft: 20,
        paddingRight: 20,
    },
    teamText: {
        color: '#6E727E',
        fontSize: 18
    },
    teamTextBlue: {
        color: '#1AA6B7',
        fontWeight: 'bold',
    },
    teamItem: {
        padding: 20,
        flexDirection: 'row',
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: '#D8D6D7'
    },
    teamName: {
        color: '#6E727E'
    },
    teamDistance: {
        color: '#1AA6B7',
        fontWeight: 'bold',
    }

});