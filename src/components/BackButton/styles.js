import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        // position absolutely in the top left corner
        ...StyleSheet.absoluteFillObject,
        top: 30,
        left: 20,
    },
    backIcon: {
        color: '#022D41',
    }
});
