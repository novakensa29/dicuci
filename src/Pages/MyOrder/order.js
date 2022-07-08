import React from "react";
import { Text, View, Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native-gesture-handler";
import bg from '../../Assets/Image/bg.png';
import { NavigationContainer } from "@react-navigation/native";
import Favorites from "../Favorite/favorites";

const Stack = createStackNavigator();

const Order = () => {
    return (
            <Stack.Navigator screenOptions={{headerShown: false, showLabel: false}}>
                <Stack.Screen name="Oyrder" component={Oyrder} options={{title: '',}}/>
                <Stack.Screen name="Favorites" component={Favorites}/>
            </Stack.Navigator>
    )
}

const Oyrder = ({navigation}) => {
    return (
        <View style={{backgroundColor:'white', width:'100%', height:'100%'}}>
            
        </View>
    )
}

// const FavoriteStackScreen = ({navigation}) => (
    
// )

export default Order;