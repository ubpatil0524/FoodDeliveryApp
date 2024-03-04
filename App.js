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

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator>
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
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
