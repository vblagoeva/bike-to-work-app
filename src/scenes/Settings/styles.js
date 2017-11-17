import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        width: '100%',
        margin: 0,
        padding: 0,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
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
    headerTitle: {
        fontSize: 20,
        marginVertical: 29,
        color: '#022D41',
        left: -80,
    }
});