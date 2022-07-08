import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Favorites from "../Favorite/favorites";

const Stack = createStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Favorites" component={Favorites}/>
        </Stack.Navigator>
    )
}

export default AuthStack;