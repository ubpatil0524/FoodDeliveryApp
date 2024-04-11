import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

// Components
import Home from './components/Home';
import Details from './components/Details';
import Profile from './components/Profile';
import Checkout from './components/Checkout';
import PizzaCategory from './components/PizzaCategory';
import BurgerCategory from './components/BurgerCategory';
import SoftDrinksCategory from './components/SoftDrinksCategory';
import AddItems from './components/AddItems';
import Register from './components/Register';
import Login from './components/Login';
import MainPage from './components/MainPage';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="MainPage">
          <Stack.Screen
            name="Register"
            component={Register}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name="MainPage"
            component={MainPage}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name="Details"
            component={Details}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name="Checkout"
            component={Checkout}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name="PizzaCategory"
            component={PizzaCategory}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name="BurgerCategory"
            component={BurgerCategory}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name="SoftDrinksCategory"
            component={SoftDrinksCategory}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name="AddItems"
            component={AddItems}
            options={{
              headerShown: false
            }}
          />

        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
