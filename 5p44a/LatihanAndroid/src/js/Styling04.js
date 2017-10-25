import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback
} from 'react-native';


export default class Styling04 extends Component {
  render() {
    return (
      <View style={styles.container}>
      	<Text style={styles.text1}> Belajar Styling React Native</Text>
      	<Text> Belajar Styling React Native </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'blue'
	},
	text1: {
		fontSize:52,
		color:'#ffffff',
		textAlign:'center'
	}
})