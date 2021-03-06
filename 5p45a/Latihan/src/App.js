import React, { Component } from 'react'
import { View } from 'react-native'
import Mahasiswa from './js/Props01'
import State from './js/State01'
import HitungLuas from './js/State02'
import Scroll from './js/Scroll04'
import RataNilai from './js/Rata2Nilai'
import StyleInternal from './js/StyleInternal'
import StyleEksternal from './js/StyleEksternal'

export default class App extends Component {
  render() {
    return (
      <View>
        <StyleInternal />
        <StyleEksternal />
      	{/* Menampilkan Props 
        <Mahasiswa nama='Bayu' nim='15.240.0001' />
        <Mahasiswa nama='Hendra' nim='15.240.0002' />
        <Mahasiswa nama='Hendri' nim='16.240.0002' />
        */}
        
        {/* Menampilkan State 
        <State />
        */}

      {/* Menampilkan Hitung Luas 
        <HitungLuas />
        */}

      {/* Menampilkan Scroll04 
        <Scroll />*/}

        <RataNilai />
        
      </View>
    )
  }
}