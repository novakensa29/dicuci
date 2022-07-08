import React, { Component } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Home/Index";
import Order from "../MyOrder/order";
import Favorites from "../Favorite/favorites";

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                showlabel: false,
                style: {
                    width: '100%',
                    height: 80,
                    position: 'absolute',
                    backgroundColor:'white',
                    borderTopLeftRadius:42,
                    borderTopRightRadius:42,
                    shadowColor: "black",
                    shadowOffset: {
                    width: -10,
                    height: 9,
                    },
                    shadowOpacity: 0.5,
                    shadowRadius: 2,
                    elevation:5
                }
            }}
        >
            <Tab.Screen 
            name='Home' 
            component={Home}
            options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                        <Image
                            source={require('../../Assets/Icon/home.png')}
                            resizeMode='contain'
                            style = {{
                                width: 24,
                                height: 24,
                                tintColor: focused ? '#41A3F0' : '#E0E4EB'

                            }}
                        />
                    </View>
                ),
            }}/>
            <Tab.Screen 
            name='Order' 
            component={Order}
            options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                        <Image
                            source={require('../../Assets/Icon/order.png')}
                            resizeMode='contain'
                            style = {{
                                width: 24,
                                height: 24,
                                tintColor: focused ? '#41A3F0' : '#E0E4EB'

                            }}
                        />
                    </View>
                ),
            }}
            />
            <Tab.Screen 
            name='Favorite' 
            component={Favorites}
            options={{
                tabBarIcon: ({focused}) => (
                    <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
                        <Image
                            source={require('../../Assets/Icon/favorite.png')}
                            resizeMode='contain'
                            style = {{
                                width: 24,
                                height: 24,
                                tintColor: focused ? '#41A3F0' : '#E0E4EB'

                            }}
                        />
                    </View>
                ),
            }}
            />
        </Tab.Navigator>
    );
};

export default Tabs;