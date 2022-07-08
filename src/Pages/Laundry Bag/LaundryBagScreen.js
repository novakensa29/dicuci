import React, { Component } from 'react';
import { Image, Text, View, StyleSheet, FlatList, ScrollView } from 'react-native';
import baju from '../../Assets/Image/baju.png';
import cek from '../../Assets/Icon/icon_cek.png';
import shopping_bag from '../../Assets/Icon/shopping-bag.png'
import bell from '../../Assets/Icon/bell.png'
import barang from '../../Assets/consts/barang';
import location from '../../Assets/Icon/icon_loc.png'
import arrow_left from '../../Assets/Icon/arrow-left.png'
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from "react-native-gesture-handler";

// Screen
// import MyOrderScreen from './MyOrderScreen';
import Home from '../Home/Index';

// Const
import laundrybag from '../../Assets/consts/laundrybag';

const Stack = createStackNavigator();

const LaundryBag = () => {
  return (
    <View style={{backgroundColor:'white', width:'100%', height:'100%'}}>
        <Stack.Navigator>
          <Stack.Screen
            name="Laundry"
            component={LaundryBagScreen}
            options={{headerShown: false, tabBarShowLabel: false}}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false, tabBarShowLabel: false}}
          />
        </Stack.Navigator>
    </View>
  );
};

const LaundryBagScreen = ({navigation}) => {
  return (
    <View style={{backgroundColor:'white', width:'100%', height:'100%'}}>
            <View style= {{flexDirection: 'row', marginTop: 44, marginBottom: 30}}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <View style={{marginLeft: 30}}>
                  <Image
                  source={arrow_left}
                  style={{width: 24, height: 24}}
                  />
              </View>
            </TouchableOpacity>
            <View style={{marginRight: 165, marginLeft: 30}}>
                <Text style={{fontFamily: 'Lato', fontStyle: 'normal', fontWeight: '600', fontSize: 16, color: '#000000'}}>Laundry Bag</Text>
            </View>
            <View style={{width: 42, height: 42,justifyContent:'center', alignItems: 'center', backgroundColor: '#E3F4FF', borderRadius: 42}}>
                <Image
                source={bell}
                style={{width: 22, height: 22,}}
                />
                <Text style={styles.notif}>3</Text>
            </View>
            </View>
            <ScrollView>
                    <View>{List()}</View>
                </ScrollView>
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
  text1: {
      fontFamily: 'Lato', 
      fontStyle: 'normal', 
      fontWeight: '700', 
      fontSize: 24, 
      marginRight: 146,
      color: '#000000',
  },
  circle1: {
      width: 42, 
      height: 42,
      justifyContent:'center', 
      alignItems: 'center', 
      backgroundColor: '#E3F4FF', 
      borderRadius: 42, 
      marginLeft: 15, 
      marginRight: 8
  },
  circle2: {
      width: 42, 
      height: 42,
      justifyContent:'center', 
      alignItems: 'center', 
      backgroundColor: '#E3F4FF', 
      borderRadius: 42
  },
  image1: {
      width: 22, 
      height: 22
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


export default LaundryBag;