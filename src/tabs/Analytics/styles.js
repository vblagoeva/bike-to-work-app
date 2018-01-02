import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    item: {
        padding: 20,
        flexDirection: 'row',
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: '#D8D6D7'
    },
    itemTextBox: {
        paddingLeft: 20,
        paddingRight: 20,
    },
    itemText: {
        color: '#6E727E'
    },
    itemLink: {
        color: '#1AA6B7',
        fontWeight: 'bold',
    },
    itemArrow: {
        justifyContent: 'flex-end',
    }
});