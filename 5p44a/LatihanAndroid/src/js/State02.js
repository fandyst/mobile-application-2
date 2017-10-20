import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  Button
} from 'react-native';


export default class State02 extends Component {
	constructor() {
		super()

		this.state = {
			panjang:0,
			lebar:0,
			luas:0
		}
	}

  render() {
    return (
      <View>
      	<TextInput 
      		placeholder="Masukkan Panjang"
      		keyboardType="numeric"
      		onChangeText={(panjang) => this.setState({panjang})} />
      	<TextInput
      		placeholder="Masukkan Lebar"
      		keyboardType="numeric"
      		onChangeText={(lebar) => this.setState({lebar})} />
      	<Button
      		title="Hitung"
      		onPress={() => this.setState({
      			luas: (this.state.panjang * this.state.lebar)
      		})} />

      	<Text>LUAS = {this.state.luas}</Text>
      </View>
    )
  }
}