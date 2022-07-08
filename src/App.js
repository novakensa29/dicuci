import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Favorites from './Pages/Favorite/favorites';
import Home from './Pages/Home/Index';
import Tabs from './Pages/Navigation/tab';
import COLORS from './Assets/consts/color';

const App = () => {
  return (
      <NavigationContainer >
          {/* <Home/> */}
          {/* <Favorites/> */}
          <Tabs/>
      </NavigationContainer>
  )
}

export default App;
