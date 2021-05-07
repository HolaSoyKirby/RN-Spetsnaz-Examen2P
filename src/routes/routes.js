import React from 'react';
import LoginPage from '../pages/loginPage';
import RegisterPage from '../pages/registerPage';
import PrestamosPage from '../pages/prestamosPage';
import ResumenPage from '../pages/resumenPage';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
            

            <Stack.Screen name = "LoginPage" component={LoginPage} />
      <Stack.Screen name = "RegisterPage" component = {RegisterPage}/>
      <Stack.Screen name = "PrestamosPage" component = {PrestamosPage}/>
      <Stack.Screen name = "ResumenPage" component = {ResumenPage}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}