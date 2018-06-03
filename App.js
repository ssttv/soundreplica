import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native'
import { createSwitchNavigator, createBottomTabNavigator, createStackNavigator } from 'react-navigation'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import HomeScreen from './screens/Home'
import LoginScreen from './screens/Login'
import SearchScreen from './screens/Search'
import StreamScreen from './screens/Stream'
import ProfileScreen from './screens/Profile'

class SongScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          title='Long live the Song Screen!'
          onPress={()=> this.props.navigation.navigate('Home')}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center'
    alignItems: 'center'
    fles: 1,
    backgroundColor: '#fff'
  }
})

//Stack Navigators

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Song: SongScreen
})

const SearchStack = createStackNavigator({
  Search: SearchScreen,
  Song: SongScreen
})

const ProfileStack = createStackNavigator({
  Profile: ProfileScreen,
  Song: SongScreen
})

const Tabs = createBottomTabNavigator({
  Home: HomeScreen,
  Stream: StreamScreen,
  Search: SearchScreen,
  Profile: ProfileScreen
},{
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ tintColor }) => {
      const { routeName } = navigation.state
      let iconName
      if (routeName === 'Home') {
        iconName = 'home'
      } else if (routeName === 'Stream') {
        iconName = 'flash'
      } else if (routeName === 'Search') {
        iconName = 'search'
      } else if (routeName === 'Profile') {
        iconName = 'account'
      }
      return iconName === 'search' ?
      <MaterialIcons name={iconName} size={25} color={tintColor} /> :
      <MaterialCommunityIcons name={iconName} size={25} color={tintColor} />
    }
  }),
  tabBarOptions: {
    activeTintColor: '#fff',
    inactiveTintColor: 'grey',
    activeBackgroundColor: 'grey',
    showLabel: false,
    style: {
      backgroundColor: '#000'
    }
  }
})

export default Switch = createSwitchNavigator({
  Login: LoginScreen,
  Home: Tabs
},{
  initialRouteName: 'Login'
})
