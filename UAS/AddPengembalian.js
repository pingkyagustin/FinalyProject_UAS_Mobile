import React, { Component } from "react";
import {View,Text,StyleSheet,TouchableHighlight,TextInput,ScrollView,} from "react-native";
import Header from "./Header";
import {ImageBackground} from 'react-native'; 
 
 
const axios = require('axios');
class AddPengembalian extends Component {
    constructor(props) {
        super(props);
        this.state = {
          kode_pengembalian: '',
          waktu_pengembalian: '',
          nm_pengembali: '',
          kode_peminjaman: '',
      }
  }
  handleSubmit = event => {
    axios.post('http://fingkyagustin.000webhostapp.com/apiuas/tambahPengembalianAlat.php', {
        kode_pengembalian: this.state.kode_pengembalian,
        waktu_pengembalian: this.state.waktu_pengembalian,
        nm_pengembali: this.state.nm_pengembali,
        kode_peminjaman: this.state.kode_peminjaman,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}
  render() {   
      return (
        <ImageBackground source={require("./bg.jpg")} style={{width:'100%',height:'100%'}}>  
        <View style={styles.vMain}>
        <ScrollView>
            <View style={styles.vHeader}>
                <Header header={"FingkyAgustin 1715051068"} />
               	<View style={styles.box1}>
                  <View style={styles.textBox1}>
                    <Text>Kode Pengembalian</Text>
                  </View>
                  <TextInput
                    style={styles.txtBox1}
                    onChangeText={kode_pengembalian => this.setState({ kode_pengembalian })}
                  />
                </View>
                <View style={styles.box1}>
                  <Text>Tanggal Pengembalian</Text>
                    <TextInput
                      style={styles.txtBox1}
                      onChangeText={ waktu_pengembalian => this.setState({ waktu_pengembalian })}
                    />
                </View>
                <View style={styles.box1}>
                  <Text>Nama Pengembali</Text>
                    <TextInput
                      style={styles.txtBox1}
                      onChangeText={nm_pengembali => this.setState({ nm_pengembali })}
                    />
                </View>
                <View style={styles.box1}>
                  <Text>Kode Peminjaman</Text>
                    <TextInput
                      style={styles.txtBox1}
                      onChangeText={kode_peminjaman => this.setState({ kode_peminjaman })}
                    />
                </View>
                <View style={styles.box2}>
                  <TouchableHighlight
                  activeOpacity={0.5}
                  style={styles.vButton}
                            onPress={() => {    
                                this.handleSubmit();this.props.navigation.navigate('Main')}}> 
                  <Text style={styles.txtButton}>Add Data Pengembalian</Text>
                  </TouchableHighlight>
                </View>   
            </View>   
        </ScrollView>
        </View>
        </ImageBackground>
        );
      }
  }
   const styles = StyleSheet.create({
    vMain:{
        //flex: 1,
        //backgroundColor: 'white',
    },
    vHeader: {
       flex: 1,
        //backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    box1: {
        flex: 0.5,
        width: "90%",
        marginTop: 10,
        marginLeft: 2,
        paddingTop: 10,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    txtBox1: {
        width: 160,
        height: 50,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#cdbe97',
        alignItems: 'center',
        justifyContent: 'center', 
    },
    textBox1:{
        color: 'white',
        fontSize: 15,    
    },
    box2: {
        flex: 0.8,
        margin:10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    txtButton: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
    },
    vButton: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#cdbe97',
        borderRadius: 5,
        padding:20,
        margin:10,
        width: '100%',
        height: 50, 
    },
    txtBox2: {
        color: 'white',
        alignItems: 'center',
        fontSize: 15,
        textAlign: 'center',
    },
    txtTeks: {
        color: 'black',
        fontSize: 18,
        marginBottom:10,
    }
});
export default AddPengembalian;