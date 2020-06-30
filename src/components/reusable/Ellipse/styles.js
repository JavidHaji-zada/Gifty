import {Dimensions, StyleSheet} from 'react-native';
const width = Dimensions.get('window').width;
const marginHorizontal = 4;
const ellipseSize = (width - 7*marginHorizontal - 12) / 6
export const styles = StyleSheet.create({
    container:{
        height: ellipseSize,
        width: ellipseSize,
        borderRadius: ellipseSize/2,
        marginHorizontal: marginHorizontal,
        borderWidth: 3,
        borderColor: 'white',
        backgroundColor: 'red'
    },
})
