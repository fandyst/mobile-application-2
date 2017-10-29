import React, { Component } from 'react'
import { 
	View,
	Text
} from 'react-native'
import {desain} from '../Style'

export default class StyleInternal extends Component {
  render() {
    return (
      <View style={desain.container}>
      	<Text style={desain.teks}> Style Internal & Eksternal</Text>
      	<Text> Style Internal & Eksternal</Text>
      </View>
    )
  }
}