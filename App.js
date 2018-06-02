import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native'
import { createSwitchNavigator } from 'react-navigation'
import HomeScreen from './screens/Home'
import LoginScreen from './screens/Login'

export default Switch = createSwitchNavigator({
  Login: LoginScreen,
  Home: HomeScreen
},{
  initialRouteName: 'Login'
})
