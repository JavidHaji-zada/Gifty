import * as React from 'react';
import { View, TextInput, Alert, Text } from 'react-native';
import { connect } from 'react-redux';
import { setText, setColor } from '../../../actions/textActions'
import { styles } from './styles';
import Ellipse from '../../reusable/Ellipse/Ellipse';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SendButton } from '../../reusable/SendButton/SendButton';

function Main(props) {
  onChangeText = (text) => {
    props.setText(text)
  }

  function send() {
    props.navigation.navigate('Details')
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder={'Type your text'}
        onChangeText={text => onChangeText(text)}
      />
      <View style={styles.ellipseContainer}>
        <Ellipse onPress={() => props.setColor('#D35400')} backgroundColor='#D35400' />
        <Ellipse onPress={() => props.setColor('#C0392B')} backgroundColor='#C0392B' />
        <Ellipse onPress={() => props.setColor('#2C3E50')} backgroundColor='#2C3E50' />
        <Ellipse onPress={() => props.setColor('#8E44AD')} backgroundColor='#8E44AD' />
        <Ellipse onPress={() => props.setColor('#27AE60')} backgroundColor='#27AE60' />
        <Ellipse onPress={() => props.setColor('#282828')} backgroundColor='#282828' />
      </View>
      <SendButton onPress={() => send()} />
    </View>
  );
}

export default connect(null, { setText, setColor })(Main);