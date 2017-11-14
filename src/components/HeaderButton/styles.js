import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        // position absolutely in the top left corner
        ...StyleSheet.absoluteFillObject,
        top: 20,
        left: 5,
    }
});