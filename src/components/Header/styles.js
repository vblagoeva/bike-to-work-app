import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        backgroundColor: '#FFF',
        width: '100%',
        height: 70,
        borderBottomWidth: 1,
        borderBottomColor: '#D8D6D7',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowRadius: 4,
        shadowOpacity: 1.0,
    },
    header: {
        fontSize: 20,
        marginVertical: 29,
        color: '#022D41',
        left: -80,
    },
});