import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    header: {
        width: '100%',
        height: 190,
    },
    headerBox: {
        width: '100%',
        height: 45,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        position: 'absolute',
        left: 0,
        bottom: 0,
    },
    headerName: {
        fontSize: 14,
        color: '#FFF',
        paddingTop: 10,
        marginLeft: 20,
    },
    navItem: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
    },
    navIcon: {
        top: 20,
        left: 20,
        position: 'absolute',
    },

});