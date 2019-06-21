import React, { Component } from "react";
import {View,Text,StyleSheet,TouchableHighlight,TextInput,ScrollView,Image,FlatList} from "react-native";
import Header from "./Header";
import {ImageBackground} from 'react-native'; 
 
const axios = require('axios');
class UpdatePeminjaman extends React.Component{
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props);
        this.state = {
          kode_peminjaman:this.props.navigation.state.params.kode_peminjaman,
            nm_alat:'',
            waktu_pinjam:'',
            nm_peminjam:'',
           
        };
    }

  componentDidMount(){
    axios.get('http://fingkyagustin.000webhostapp.com/apiuas/viewPeminjaman.php?kode_peminjaman='+ this.state.kode_peminjaman)
    .then((response)=>{
      console.log(response.data);
      this.setState({ data:response.data });
    })
    .catch(function (error) {
    // handle error
    console.log(error);
  });

}
  
render() {
  handleSubmit = () => {
    axios.post('http://fingkyagustin.000webhostapp.com/apiuas/UpdatePeminjamanAlat.php', {
      kode_peminjaman: this.state.kode_peminjaman,
      nm_alat: this.state.nm_alat,
      waktu_pinjam: this.state.waktu_pinjam,
      nm_peminjam: this.state.nm_peminjam,
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }  
      return (
        <ImageBackground source={require("./bg.jpg")} style={{width:'100%',height:'100%'}}>  
        <View style={styles.vMain}>
        <ScrollView>
            <View style={styles.vHeader}>
                <Header header={"FingkyAgustin 1715051068"} />
                <FlatList
                    keyExtractor={(item, index) => index.toString()}
                    data={this.state.data}
                    renderItem={({item}) => (
                  <View>
                            <View style={styles.box1}>
                  <View style={styles.textBox1}>
                    <Text>Kode Peminjaman</Text>
                  </View>
                  <TextInput
                    placeholder={item.kode_peminjaman} 
                    style={styles.txtBox1}
                    onChangeText={kode_peminjaman => this.setState({ kode_peminjaman })}
                  />
                </View>
                <View style={styles.box1}>
                  <Text>Nama Alat</Text>
                    <TextInput
                    placeholder={item.nm_alat} 
                      style={styles.txtBox1}
                      onChangeText={nm_alat => this.setState({ nm_alat })}
                    />
                </View>
                <View style={styles.box1}>
                  <Text>Tanggal Pinjam</Text>
                    <TextInput
                    placeholder={item.waktu_pinjam} 
                      style={styles.txtBox1}
                      onChangeText={waktu_pinjam => this.setState({ waktu_pinjam })}
                    />
                </View>
                <View style={styles.box1}>
                  <Text>Nama Peminjam</Text>
                    <TextInput
                    placeholder={item.nm_peminjam} 
                      style={styles.txtBox1}
                      onChangeText={nm_peminjam => this.setState({ nm_peminjam })}
                    />
                </View>
                </View>
                    )
                    }
                />
                <View style={styles.box3}>
                  <TouchableHighlight
                  activeOpacity={0.5}
                  style={styles.vButton}
                            onPress={() =>{handleSubmit();this.props.navigation.navigate('Main')}}>        
                  <Text style={styles.txtButton}>Update Data Peminjaman</Text>
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
        flex: 1,
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
    BoxStyle1: {
        borderRadius: 5,
        justifyContent: 'center',
        marginBottom: 30, 
        padding: 20,
        width: '40%',
        height: 30,
        backgroundColor: '#cdbe97',
        marginTop:40,
        margin:10,
    },
    BoxStyle2: {
        borderRadius: 5,
        justifyContent: 'center',
        marginBottom: 30, 
        padding: 20,
        width: '40%',
        height: 30,
        backgroundColor: '#cdbe97',
        marginTop:40,
        margin:10,
    },
    box3: {
        flex: 0.8,
        margin:10,
        marginTop:10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    boxedit: {
      flex: 0.2,
      margin:10,
      marginTop:10,
      marginLeft:40,
      flexDirection: 'row',
      alignItems: 'center'
  },
    txtButton: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
    },
    uploadAvatar:{
      height: 200,
      width: 300,
      borderColor: '#cdbe97',
      marginBottom:20
    },
    conPreview:{
      flex:8,
      alignItems:'center',
      justifyContent:'center',
      borderColor: '#cdbe97',
    
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
    gedit:{
      height: 25,
      width: 25,
      alignItems:'center',
      justifyContent:'center',
  },
    box2: {
        flex: 0.2,
        //backgroundColor: 'white',
        margin:10,
        flexDirection: 'row',
    },
    txtTeks: {
        color: 'black',
        fontSize: 18,
        marginBottom:10,
    }
});
export default UpdatePeminjaman;