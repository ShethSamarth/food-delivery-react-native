import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {Platform, StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';

import Home from './src/screens/Home';
import Restaurant from './src/screens/Restaurant';
import Basket from './src/screens/Basket';
import PreparingOrder from './src/screens/PreparingOrder';
import Delivery from './src/screens/Delivery';

import store from './store';

const Stack = createNativeStackNavigator();

const App = () => {
  useEffect(() => {
    if (Platform.OS === 'android') {
      SplashScreen.hide();
    }
  }, []);

  return (
    <NavigationContainer>
      <Provider store={store}>
        <StatusBar barStyle="light-content" backgroundColor="white" animated />
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{statusBarColor: 'white'}}
          />
          <Stack.Screen
            name="Restaurant"
            component={Restaurant}
            options={{statusBarColor: 'white'}}
          />
          <Stack.Screen
            name="Basket"
            component={Basket}
            options={{statusBarColor: 'white'}}
          />
          <Stack.Screen
            name="PreparingOrder"
            component={PreparingOrder}
            options={{statusBarColor: '#00CCBB'}}
          />
          <Stack.Screen
            name="Delivery"
            component={Delivery}
            options={{statusBarColor: '#00CCBB'}}
          />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
