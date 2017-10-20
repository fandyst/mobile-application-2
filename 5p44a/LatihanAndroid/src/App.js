import React, { Component } from 'react';
import {
  View
} from 'react-native';
import Mahasiswa from './js/Props01'
import State from './js/State02'
import Scroll from './js/Scroll03'

export default class App extends Component {
  render() {
    return (
      <View>
  		{/* Menampilkan Props

      	<Mahasiswa nim='15.240.0001' nama='Hendra' />
      	<Mahasiswa nim='15.240.0002' nama='Rendi' />
      	*/}

      	{/* Menampilkan State 
      	<State />*/}

        {/* Menampilkan Scroll */}
        <Scroll />
      </View>
    )
  }
}