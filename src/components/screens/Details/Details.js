import * as React from 'react';
import { View, Text, StatusBar, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { styles } from './styles';
import { SendButton } from '../../reusable/SendButton/SendButton';

function Details(props) {
  function send() {
    props.navigation.navigate('Main');
  }
  return (
    <View style={styles.container}>
      {
        !props.text ? (
          <View style={{ flex: 1, justifyContent: 'center', backgroundColor: props.color }}>
            <Text style={styles.txt}>Your text is:</Text>
            <SendButton onPress={() => { send() }} />
          </View>
        ) :
          (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: props.color }}>
              <Text style={styles.txt}>{'Your text is: ' + props.text}</Text>
            </View>
          )
      }
      <StatusBar backgroundColor='#505052' />
    </View>
  );
}

const mapStateToProps = ({ info }) => {
  return { text: info.text, color: info.color }
}

export default connect(mapStateToProps, null)(Details);