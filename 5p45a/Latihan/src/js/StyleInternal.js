import React, { Component } from 'react'
import { 
	View,
	Text,
	StyleSheet
} from 'react-native'


export default class StyleInternal extends Component {
  render() {
    return (
      <View style={s.container}>
      	<Text style={s.teks}> Style Internal & Eksternal</Text>
      	<Text> Style Internal & Eksternal</Text>
      </View>
    )
  }
}

const s = StyleSheet.create({
	container: {
		backgroundColor:'red',
	},
	teks: {
		textAlign:'center',
		color:'#ffffff'
	}
})