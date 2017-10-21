import React, { Component } from 'react'
import { 
	View,
	Text,
	ScrollView,
	Image,
	TouchableHighlight,
	TouchableOpacity,
	ToastAndroid
} from 'react-native'


export default class Scroll04 extends Component {
	constructor() {
		super()

	}

  render() {
    return (
     <ScrollView>
      <View style={{marginLeft:20}}>
      	<Text style={{textAlign:'center',fontSize:20}}>Saya Belajar ScrollView</Text>
      	<TouchableHighlight
      		underlayColor='#ffffff'
      		onPress={() => ToastAndroid.show('Tekan Gambar Mobil', ToastAndroid.SHORT)} >
      	 <Image
      	 	source={require('../assets/car.jpg')}
      	 	resizeMode='contain'
      	 	style={{
      	 		alignSelf:'center',
      	 		marginTop:5,
      	 		width:400,
      	 		height:300
      	 	}} />
      	</TouchableHighlight>
      	<TouchableOpacity
      		onPress={() => ToastAndroid.show('Tekan Gambar Logo React', ToastAndroid.LONG)} >
      	 <Image
      	 	source={{uri:'https://fandyst.com/images/logo.png'}}
      	 	resizeMode='stretch'
      	 	style={{
      	 		alignSelf:'center',
      	 		marginTop:5,
      	 		width:400,
      	 		height:300
      	 	}} />
      	</TouchableOpacity>
      	<Image
      	 	source={require('../assets/mountains.jpg')}
      	 	resizeMode='center'
      	 	style={{
      	 		alignSelf:'center',
      	 		marginTop:5,
      	 		width:400,
      	 		height:300
      	 	}} />
      	<Image
      	 	source={require('../assets/patio.jpg')}
      	 	resizeMode='cover'
      	 	style={{
      	 		alignSelf:'center',
      	 		marginTop:5,
      	 		width:400,
      	 		height:300
      	 	}} />
      </View>
     </ScrollView>
    )
  }
}
