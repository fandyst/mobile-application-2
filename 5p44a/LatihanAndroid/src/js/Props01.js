import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';


export default class Props01 extends Component {
  render() {
    return (
      <View>
      	<Text> NIM {this.props.nim} </Text>
      	<Text> Nama {this.props.nama} </Text>
      </View>
    )
  }
}