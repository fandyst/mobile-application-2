import React, { Component } from 'react'
import { 
	View,
	Text,
	TextInput,
	Button,
	Alert
} from 'react-native'


export default class Rata2Nilai extends Component {
  constructor() {
  	super()
  	this.state = {
  		nim:'',
  		ma1:0,
  		ma2:0,
  		pbo:0,
  		thn:'',
  		jur:'',
  		rata2:0.0,
  		grade:''
  	}
  }

  hitung() {
    let nim = this.state.nim.substring(0,2)
    let ma1 = this.state.ma1
    let ma2 = this.state.ma2
    let pbo = this.state.pbo
    let rata = (parseFloat(ma1) + parseFloat(ma2) + parseFloat(pbo))/3
    rata = rata.toFixed(2)

    if(nim > '17') {
      nim = 'Belum Ada Mahasiswa'
    }else if(nim > '13') {
      nim = '20'+nim
    }else {
      nim = 'Sudah Lulus'
    }

    this.setState({thn:nim})
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
      		onChangeText={(ma1) => this.setState({ma1})}
      		keyboardType='numeric' />
      	<Text>Mobile App II</Text>
      	<TextInput
      		placeholder='0'
      		onChangeText={(ma2) => this.setState({ma2})}
      		keyboardType='numeric' />
      	<Text>PBO</Text>
      	<TextInput
      		placeholder='0'
      		onChangeText={(pbo) => this.setState({pbo})}
      		keyboardType='numeric' />
      	<Button
      		title='Hitung'
      		onPress={() => this.hitung()} />

      	<Text style={{marginTop:20,fontSize:40}}>Angkatan : {this.state.thn}</Text>
        <Text style={{fontSize:40}}>Rata-rata Nilai : {this.state.rata2}</Text>
      </View>
    )
  }
}
