import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  ToastAndroid
} from 'react-native';
import {styles} from '../Style'

export default class Styling04b extends Component {
  render() {
    return (
      <View style={styles.container}>
      	<Text style={styles.text1}> Belajar Styling React Native</Text>
      	<TouchableWithoutFeedback
      		onLongPress={() => ToastAndroid.show('Tekan lama', ToastAndroid.SHORT)}>
      		<View>
      			<Text> Belajar Styling React Native </Text>
      		</View>
      	</TouchableWithoutFeedback>
      </View>
    )
  }
}