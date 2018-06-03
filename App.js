import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native'
import { createSwitchNavigator } from 'react-navigation'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import HomeScreen from './screens/Home'
import LoginScreen from './screens/Login'
import SearchScreen from './screens/Search'
import StreamScreen from './screens/Stream'
import ProfileScreen from './screens/Profile'

export default Switch = createSwitchNavigator({
  Login: LoginScreen,
  Home: HomeScreen
},{
  initialRouteName: 'Login'
})
