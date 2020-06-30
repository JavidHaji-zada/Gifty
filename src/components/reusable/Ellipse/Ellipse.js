import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import { styles } from './styles';

function Ellipse(props) {

    return (
        <TouchableOpacity onPress={props.onPress} style={[styles.container, { backgroundColor: props.backgroundColor }]} />
    );
}

export default Ellipse;