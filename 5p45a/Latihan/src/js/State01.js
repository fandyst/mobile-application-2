import React, { Component } from 'react'
import { 
	View,
	Text
} from 'react-native'


export default class State01 extends Component {
	constructor() {
		super()

		this.state = {
			nim: '15.240.0001',
			nama: 'Herman'
		}
	}

  render() {
    return (
      <View>
      	<Text> NIM {this.state.nim}</Text>
      	<Text> Nama {this.state.nama}</Text>
      </View>
    )
  }
}
