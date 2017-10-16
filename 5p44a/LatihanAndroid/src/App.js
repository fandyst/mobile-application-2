import React, { Component } from 'react';
import {
  View
} from 'react-native';
import Mahasiswa from './js/Props01'

export default class App extends Component {
  render() {
    return (
      <View>
      	<Mahasiswa nim='15.240.0001' nama='Hendra' />
      	<Mahasiswa nim='15.240.0002' nama='Rendi' />
      </View>
    )
  }
}