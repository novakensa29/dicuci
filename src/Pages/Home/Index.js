import React, { Component } from 'react';
import { FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import baju from '../../Assets/Image/baju.png';
import cek from '../../Assets/Icon/icon_cek.png';
import man from '../../Assets/Icon/man.png'
import location from '../../Assets/Icon/icon_loc.png'
import display from '../../Assets/Image/bg.png'
import star_mitra from '../../Assets/Icon/star_mitra.png'
import disekitar from '../../Assets/Icon/disekitar.png'
import promo from '../../Assets/Icon/promo.png'
import delivery from '../../Assets/Icon/delivery.png'
import gratis_ongkir from '../../Assets/Icon/gratis_ongkir.png'
import laundry_kilat from '../../Assets/Icon/laundry_kilat.png'
import carwash from '../../Assets/Icon/carwash.png'
import semua from '../../Assets/Icon/semua.png'
import shopping_bag from '../../Assets/Icon/shopping-bag.png'
import bell from '../../Assets/Icon/bell.png'
import COLORS from '../../Assets/consts/color';
import barang from '../../Assets/consts/barang';
import Order from '../MyOrder/order';
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native-gesture-handler";

const Stack = createStackNavigator();

class Home extends Component {

    render(){
      return (
        <View style={{backgroundColor:'white', width:'100%', height:'100%'}}>
                <Stack.Navigator screenOptions={{headerShown: false, showLabel: false}}>
                    <Stack.Screen name="Profile" component={Profile} options={{title: '',}}/>
                    <Stack.Screen name="Order" component={Order}/>
                </Stack.Navigator>
                
        </View>      
      )
    }
};

const Profile = ({navigation}) => {
    return (
        <View style={{backgroundColor:'white', width:'100%', height:'100%'}}>
            <View style= {{flexDirection: 'row', marginTop: 44, marginBottom: 30}}>
            <View style={{width: 42, height: 42, marginLeft: 30, alignItems: 'center', backgroundColor: '#FFAA00', borderRadius: 42}}>
                {/* <Image
                source={man}
                style={{width: 42, height: 42}}
                /> */}
            </View>
            <View style={{marginLeft: 16}}>
                <Text style={{fontFamily: 'Lato', fontStyle: 'normal', fontWeight: '500', fontSize: 16}}>Hello, John</Text>
                <View style={
                    { 
                        borderRadius: 12, 
                        width: 190, 
                        height: 19, 
                        backgroundColor: '#F7FAFC',
                        flexDirection: 'row', 
                    }
                }>
                    <Image 
                    source={location}
                    style={
                        {
                            width: 12,
                            height: 12,
                            marginRight: 6,
                        }
                    }/>
                    <Text style={
                        {
                            fontFamily: 'Lato', 
                            fontStyle: 'normal', 
                            fontWeight: '400', 
                            fontSize: 12, 
                            color: '#41A3F0',
                        }
                    }>Jln. BKM Timur no. 4, Sukap...</Text>
                </View>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Order')}>
                <View style={{width: 42, height: 42,justifyContent:'center', alignItems: 'center', backgroundColor: '#E3F4FF', borderRadius: 42, marginLeft: 15, marginRight: 8}}>
                    <Image
                    source={shopping_bag}
                    style={{width: 22, height: 22}}
                    />
                    <Text style={styles.notif}>1</Text>
                </View>
            </TouchableOpacity>
            <View style={{width: 42, height: 42,justifyContent:'center', alignItems: 'center', backgroundColor: '#E3F4FF', borderRadius: 42}}>
                <Image
                source={bell}
                style={{width: 22, height: 22,}}
                />
                <Text style={styles.notif}>3</Text>
            </View>
            </View>
            <ScrollView>
                    <Display/>
                    <Kategori/>
                    <View style={{backgroundColor: COLORS.abu, justifyContent: 'space-between', height: 4}}></View>
                    <Text style={{marginLeft: 18, marginTop: 16, color: '#222222', fontSize: 16, fontFamily: 'Lato-Bold', fontStyle: 'normal', fontWeight: '600'}} >Rekomendasi Paket dicuci</Text>
                    <View>{List()}</View>
                </ScrollView>
        </View>
    )
}

const Display = () => {
    return (
        <View>
            <Image
            source={display}
            style={
                {
                    width : '100%',
                    height: 170,
                }
            }/>
        </View>
    )
}

const Kategori = () => {
    return (
        <View style={{marginLeft: 30}}>
            <Text style={
                {
                    marginTop: 16,
                    fontFamily: 'Lato',
                    fontStyle: 'normal',
                    fontWeight: '600',
                    fontSize: 14,
                    color: '#222222',
                }
            }>Kategori</Text>
            <View style={{flexDirection: 'row', marginTop: 8}}>
                <View style={{alignItems: 'center', width: 71.25, height: 71.25}}>
                    <Image
                    source={star_mitra}
                    style={
                        {
                            width : 35,
                            height: 35,
                        }
                    }/>
                    <Text style={
                        {
                            marginTop: 4,
                            fontFamily: 'Lato',
                            fontStyle: 'normal',
                            fontWeight: '400',
                            fontSize: 12,
                            color: '#000000',
                            textAlign: 'center',
                        }
                    }>Star Mitra</Text>
                </View>
                <View style={{alignItems: 'center', marginLeft: 18, width: 71.25, height: 71.25}}>
                    <Image
                    source={disekitar}
                    style={
                        {
                            width : 36,
                            height: 36,
                        }
                    }/>
                    <Text style={
                        {
                            marginTop: 4,
                            fontFamily: 'Lato',
                            fontStyle: 'normal',
                            fontWeight: '400',
                            fontSize: 12,
                            color: '#000000',
                            textAlign: 'center',
                        }
                    }>Di Sekitar</Text>
                </View>
                <View style={{alignItems: 'center', marginLeft: 18, width: 71.25, height: 71.25}}>
                    <Image
                    source={promo}
                    style={
                        {
                            width : 36,
                            height: 36,
                        }
                    }/>
                    <Text style={
                        {
                            marginTop: 4,
                            fontFamily: 'Lato',
                            fontStyle: 'normal',
                            fontWeight: '400',
                            fontSize: 12,
                            color: '#000000',
                            textAlign: 'center',
                        }
                    }>Promo</Text>
                </View>
                <View style={{alignItems: 'center', marginLeft: 18, width: 71.25, height: 71.25}}>
                    <Image
                    source={delivery}
                    style={
                        {
                            width : 35,
                            height: 35,
                        }
                    }/>
                    <Text style={
                        {
                            marginTop: 4,
                            fontFamily: 'Lato',
                            fontStyle: 'normal',
                            fontWeight: '400',
                            fontSize: 12,
                            color: '#000000',
                            textAlign: 'center',
                        }
                    }>Delivery</Text>
                </View>
            </View>
            <View style={{flexDirection: 'row', marginTop: 8, width: 71.25, height: 71.25}}>
                <View style={{alignItems: 'center'}}>
                    <Image
                    source={gratis_ongkir}
                    style={
                        {
                            width : 35,
                            height: 31.82,
                        }
                    }/>
                    <Text style={
                        {
                            marginTop: 4,
                            fontFamily: 'Lato',
                            fontStyle: 'normal',
                            fontWeight: '400',
                            fontSize: 12,
                            color: '#000000',
                            textAlign: 'center',
                        }
                    }>Gratis Ongkir</Text>
                </View>
                <View style={{alignItems: 'center', marginLeft: 18, width: 71.25, height: 71.25}}>
                    <Image
                    source={laundry_kilat}
                    style={
                        {
                            width : 50,
                            height: 26,
                        }
                    }/>
                    <Text style={
                        {
                            marginTop: 4,
                            fontFamily: 'Lato',
                            fontStyle: 'normal',
                            fontWeight: '400',
                            fontSize: 12,
                            color: '#000000',
                            textAlign: 'center',
                        }
                    }>Laundry Kilat</Text>
                </View>
                <View style={{alignItems: 'center', marginLeft: 18, width: 71.25, height: 71.25}}>
                    <Image
                    source={carwash}
                    style={
                        {
                            width : 38,
                            height: 24.08,
                        }
                    }/>
                    <Text style={
                        {
                            marginTop: 4,
                            fontFamily: 'Lato',
                            fontStyle: 'normal',
                            fontWeight: '400',
                            fontSize: 12,
                            color: '#000000',
                            textAlign: 'center',
                        }
                    }>Carwash</Text>
                </View>
                <View style={{alignItems: 'center', marginLeft: 18, width: 71.25, height: 71.25}}>
                    <Image
                    source={semua}
                    style={
                        {
                            width : 37,
                            height: 20.56,
                        }
                    }/>
                    <Text style={
                        {
                            marginTop: 4,
                            fontFamily: 'Lato',
                            fontStyle: 'normal',
                            fontWeight: '400',
                            fontSize: 12,
                            color: '#000000',
                            textAlign: 'center',
                        }
                    }>Semua</Text>
                </View>
            </View>
        </View>
    )
}

const List = () => {
    return barang.map((barangs) => {
        return (
            <View key={barangs.id} style={{marginBottom: 8}}>
                <View style={Card.card}>
                <View>
                  <Image 
                  source={barangs.gambar} 
                  style={Card.image1}
                  />
                </View>
                <View style={Card.desc}>
                    <Text style={Card.tittle}>{barangs.judul}</Text>
                    <View style={{flexDirection: 'row', marginTop: 2}}>
                        <Image 
                            source={cek}
                            style={Card.image2}
                            />
                        <Text style={Card.text1}>{barangs.toko}</Text>
                        <Text  style={Card.text2}>.</Text>
                        <Text  style={Card.text3}>{barangs.jarak}</Text>
                    </View>
                    <View style={{flexDirection: 'row', marginTop: 15}}>
                        <Text style={Card.text5}>{barangs.harga}</Text>
                        <View style={Card.circle1}>
                            <Text style={Card.text6}>Gratis Ongkir</Text>
                        </View>
                        <View style={Card.circle2}>
                            <Text style={Card.text6}>Diskon 30%</Text>
                        </View>
                    </View>
                </View>
            </View>
            </View>
            )
    });
  };

  const styles = StyleSheet.create({
    card: {  
      borderRadius: 10,
      height: 80, 
      width: 339,
      backgroundColor: '#FFFFFF',
      paddingTop: 12,
      flexDirection: 'row', 
      marginLeft: 18,
      marginTop: 8,
      shadowColor: "black",
      shadowOffset: {
        width: -10,
        height: 9,
      },
      shadowOpacity: 0.5,
      shadowRadius: 2,
      elevation:5
    },

    image1: {
        width: 68,
        height: 54,
        marginLeft: 14,
    },

    image2: {
        width: 8,
        height: 11.43,
        marginRight: 5
    },
    notif: {
        fontSize: 10,
        color: '#FFFFFF',
        backgroundColor: '#FF6666',
        textAlign: 'center',
        borderRadius: 14,
        width: 14,
        height: 14,
        position: 'absolute', //membuat posisi bebas untuk komponen
        top: 0,
        right: 0,
    },
});

const Card = StyleSheet.create ({
    card: {  
        borderRadius: 10,
        height: 80, 
        width: 339,
        backgroundColor: '#FFFFFF',
        paddingTop: 12,
        flexDirection: 'row', 
        marginLeft: 30,
        marginTop: 8,
        shadowColor: "black",
        shadowOffset: {
          width: -10,
          height: 9,
        },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation:5
    },
    image1: {
        width: 68,
        height: 54,
        marginLeft: 14,
    },
    image2: {
        width: 8,
        height: 11.43,
        marginRight: 5
    },
    desc: {
        marginLeft: 14
    },
    tittle: {
        fontSize: 12, 
        fontWeight: '700', 
        fontStyle: 'normal', 
        fontFamily: 'Lato',
        color: '#000000',
    },
    text1: {
        fontFamily: 'Lato-Bold', 
        fontStyle: 'normal', 
        fontWeight: '400', 
        fontSize: 10,
        marginRight: 7,
        color: '#000000',
    },
    text2: {
        fontFamily: 'Lato', 
        fontStyle: 'normal', 
        fontWeight: '400', 
        fontSize: 10,
        marginRight: 8,
        color: '#000000',
    },
    text3: {
        fontFamily: 'Lato', 
        fontStyle: 'normal', 
        fontWeight: '400', 
        fontSize: 10,
        marginRight: 43,
        color: '#000000',
    },
    text4: {
        fontFamily: 'Lato', 
        fontStyle: 'normal', 
        fontWeight: '400', 
        fontSize: 10,
        color: '#000000',
    },
    text5: {
        fontFamily: 'Lato', 
        fontStyle: 'normal', 
        fontWeight: '700', 
        fontSize: 10, 
        color: '#FFAA00',
    },
    text6: {
        fontFamily: 'Lato', 
        fontStyle: 'normal', 
        fontWeight: '400', 
        fontSize: 8, 
        color: '#41A3F0'
    },
    circle1: {
        borderWidth: 1, 
        borderColor: '#41A3F0', 
        borderRadius: 12, 
        width: 63, 
        alignItems: 'center', 
        marginLeft: 55
    },
    circle2 : {
        borderWidth: 1, 
        borderColor: '#41A3F0', 
        borderRadius: 12, 
        width: 63, 
        alignItems: 'center', 
        marginLeft: 4
    },
});

export default Home;