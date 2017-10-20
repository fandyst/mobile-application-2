import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  ToastAndroid,
  TouchableHighlight,
  TouchableOpacity,
  Alert,
  Button,
  StyleSheet
} from 'react-native';


export default class Scroll03 extends Component {
  render() {
    return (
      <ScrollView>
       <View style={{margin:20}}>
      	 <Text> NIM 15.240.0001 </Text>
      	 <Text> Nama Hendra </Text>
      	 <Text style={{textAlign:'center',fontSize:20}}> Saya Belajar ScrollView </Text>
      	 <TouchableHighlight
      	 	underlayColor='#ffffff'
      	 	onPress={() => ToastAndroid.show('Tekan Gambar Logo', ToastAndroid.SHORT)}>
      	  <Image source={require('../assets/logo.png')} />

      	 </TouchableHighlight>

      	 <TouchableOpacity
      	 	onPress={() => ToastAndroid.show('Tekan Gambar Logo Opacity', ToastAndroid.LONG)}>

      	 <Image source={require('../assets/logo.png')} />

      	 </TouchableOpacity>

      	 <Image source={require('../assets/logo.png')} />
      	 <Image source={require('../assets/logo.png')} />
      	 <Image source={require('../assets/logo.png')} />
      	 <Image source={require('../assets/logo.png')} />
      	 <Image source={require('../assets/logo.png')} />
      	 <Button
      	 	title='Coba Alert'
      	 	onPress={() => Alert.alert('Ini Alert','Selamat!!! Anda berhasil menekan tombol Coba Alert.')} />
       </View>
     </ScrollView>
    )
  }
}