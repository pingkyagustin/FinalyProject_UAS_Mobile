import React from 'react';
import { Text ,View,FlatList, StyleSheet,TouchableHighlight,ScrollView } from 'react-native';
import { ListItem, Card, Image } from 'react-native-elements';
import Header from "./Header";
import {ImageBackground} from 'react-native'; 


const axios = require('axios');
export default class ViewDetail extends React.Component{
    constructor(props) {
        super(props); 
        this.state = {
          data: [],kode_peminjaman:this.props.navigation.state.params.kode_peminjaman,
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
hapus = () => {
    axios.post('http://fingkyagustin.000webhostapp.com/apiuas/DeletePeminjaman.php', {
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
                <ScrollView>
            <View style={styles.vHeader}>
                <Header header={"FingkyAgustin 1715051068"} />
                <FlatList
               
                    keyExtractor={(item, index) => index.toString()}
                    data={this.state.data}
                    renderItem={({item}) => (
                        <View>
                        <View>
                            <View style={{justifyContent: 'center', alignItems:'center'}}>
                                <Image
                                source={{uri:"https://fingkyagustin.000webhostapp.com/apiuas/uploads/"+item.foto}}
                                style={{width:150, height:150}}
                                />
                        </View>
                        <Card title="Detail Peminjaman dan Pengembalian">
                            <Text>Kode Peminjaman:{item.kode_peminjaman}</Text>
                            <Text>Nama Alat :{item.nm_alat}</Text>
                            <Text>Waktu Pinjam:{item.waktu_pinjam}</Text>
                            <Text>Nama Peminjam:{item.nm_peminjam}</Text>
                            <Text>Waktu Pengembalian:{item.waktu_pengembalian}</Text>
                            <Text>Nama Pengembali:{item.nm_pengembali}</Text>
                            </Card>
                    </View>
                    <View style={styles.box2}>
                        <TouchableHighlight activeOpacity={0.5}
                          style={styles.BoxStyle2} onPress={()=>this.props.navigation.navigate('UpdatePeminjaman',{kode_peminjaman:item.kode_peminjaman})}>
                          <Text style={styles.txtBox2}>Update</Text>
                 
                        </TouchableHighlight>
                        <TouchableHighlight activeOpacity={0.5} 
                          style={styles.BoxStyle1} onPress={()=>{this.hapus();this.props.navigation.navigate('Main')}}>
                          <Text style={styles.txtBox2}>Hapus</Text>
                        </TouchableHighlight>
                      </View>
                    </View>
                    )
                    }
                />
            </View>
            </ScrollView>
            </ImageBackground>
            
        )
    }
}
const styles = StyleSheet.create({
    vHeader: {
            flex: 1,
            //backgroundColor: '#ADD8E6',
        },
        boxitem1: {
            flex:0.8,
            width: 160,
            height: 50,
            backgroundColor: '#191970',
            borderWidth: 1,
            borderColor: '#191970',
            alignItems: 'center',
            justifyContent: 'center', 
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
            marginLeft:20,
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
        box2: {
            flex: 0.2,
            //backgroundColor: 'white',
            margin:10,
            flexDirection: 'row',
        },
        txtBox2: {
            color: 'white',
            alignItems: 'center',
            fontSize: 15,
            textAlign: 'center',
        },
    });
    
