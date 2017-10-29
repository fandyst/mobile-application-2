import React, { Component } from 'react';
import {
  View
} from 'react-native';
import Mahasiswa from './js/Props01'
import State from './js/State02'
import Scroll from './js/Scroll03'
import StylingInternal from './js/Styling04'
import StylingEksternal from './js/Styling04b'
import Nilai from './js/Rata2Nilai.js'

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

        {/* Menampilkan Scroll 
        <Scroll />*/}

        {/* Menampilkan StylingInternal 
        <StylingInternal />*/}

        {/* Menampilkan StylingEksternal 
        <StylingEksternal />*/}

        <Nilai />
      </View>
    )
  }
}