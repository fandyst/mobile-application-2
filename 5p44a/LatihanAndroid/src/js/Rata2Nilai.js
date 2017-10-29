import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  Button
} from 'react-native';


export default class Rata2Nilai extends Component {
  constructor() {
  	super()
  	this.state = {
  		nim:'',
  		ma1:0.0,
  		ma2:0.0,
  		pbo:0.0,
  		rata2:0.0,
  		prodi:'',
  		thn:'',
  		grade:''
  	}
  }

  hitung() {
  	let nim  = this.state.nim.substring(3,6)
  	let rata = (parseFloat(this.state.ma1) + parseFloat(this.state.ma2) + parseFloat(this.state.pbo))/3
  	rata = rata.toFixed(2)
  	if(nim == '240') {
  		nim = 'TI'
  	}else if(nim == '230') {
  		nim = 'SI'
  	}

  	this.setState({prodi:nim})
  	this.setState({rata2:rata})

  }

  render() {
    return (
      <View>
      	<Text>NIM</Text>
      	<TextInput
      		placeholder='Masukkan NIM'
      		onChangeText={(nim) => this.setState({nim})} />
      	<Text>Mobile App I</Text>
      	<TextInput
      		placeholder='0'
      		onChangeText={(ma1) => this.setState({ma1})} />
      	<Text>Mobile App II</Text>
      	<TextInput
      		placeholder='0'
      		onChangeText={(ma2) => this.setState({ma2})} />
      	<Text>PBO</Text>
      	<TextInput
      		placeholder='0'
      		onChangeText={(pbo) => this.setState({pbo})} />
      	<Button
      		title='Hitung'
      		onPress={() => this.hitung()} />
      	<Text style={{marginTop:30,fontSize:30}}>NIM : {this.state.nim}</Text>
      	<Text>Angkatan : {this.state.thn}</Text>
      	<Text style={{fontSize:30}}>Prodi : {this.state.prodi}</Text>
      	<Text style={{fontSize:30}}>Rata-rata : {this.state.rata2}</Text>
      	<Text>Grade : {this.state.grade}</Text>
      </View>
    )
  }
}