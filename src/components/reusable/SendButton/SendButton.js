import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';

export function SendButton(props) {
    return (
        <View style={styles.sendBtnContainer}>
            <TouchableOpacity style={styles.sendBtn} onPress={props.onPress}>
                <Text style={styles.sendBtnTxt}>Send Text</Text>
            </TouchableOpacity>
        </View>
    )
}


