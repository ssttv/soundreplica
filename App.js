import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  Button,
  View,
  Image,
  Animated,
  PanResponder,
  Dimensions,
  Easing,
  TouchableOpacity,
  SafeAreaView
} from "react-native";
import {
  createSwitchNavigator,
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import HomeScreen from "./screens/Home";
import LoginScreen from "./screens/Login";
import SearchScreen from "./screens/Search";
import StreamScreen from "./screens/Stream";
import ProfileScreen from "./screens/Profile";

const SCREEN_WIDTH = Dimensions.get("window").width;

const SCREEN_HEIGHT = Dimensions.get("window").height;

class SongScreen extends Component {
  static navigationOptions = {
    header: null
  };
  constructor () {
    super()
    this.animatedValue = new Animated.Value(0)
  }
  componentDidMount () {
    this.animate()
  }
  animate () {
    this.animatedValue.setValue(0)
    Animated.timing(
      this.animatedValue,
      {
        toValue: 1,
        duration: 90000,
        easing: Easing, linear
      }
    ).start(() => this.animate())
  }
  render() {
    marginLeft = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -SCREEN_WIDTH * 2]
    })
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <Button
            title="Long live the Song Screen"
            onPress={() => this.props.navigation.popToTop()}
          />
        </View>
        <Animated.View style={styles.ImageContainer}>
          <Animated.Image
            source={require("./images/song-screen-image.jpg")}
            style={{
              marginLeft,
              height: SCREEN_HEIGHT,
              width: SCREEN_WIDTH * 3,
              position: "absolute"
            }}
          />
        </Animated.View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "#fff"
  }
});

//Stack Navigators

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Song: SongScreen
});

const StreamStack = createStackNavigator({
  Stream: StreamScreen,
  Song: SongScreen
});

const SearchStack = createStackNavigator({
  Search: SearchScreen,
  Song: SongScreen
});

const ProfileStack = createStackNavigator({
  Profile: ProfileScreen,
  Song: SongScreen
});

HomeStack.navigationOptions = ({ navigation }) => {
  let { routeName } = navigation.state.routes[navigation.state.index];
  let navigationOptions = {};
  if (routeName === "Song") {
    navigationOptions.tabBarVisible = false;
  }
  return navigationOptions;
};

StreamStack.navigationOptions = ({ navigation }) => {
  let { routeName } = navigation.state.routes[navigation.state.index];
  let navigationOptions = {};
  if (routeName === "Song") {
    navigationOptions.tabBarVisible = false;
  }
  return navigationOptions;
};

SearchStack.navigationOptions = ({ navigation }) => {
  let { routeName } = navigation.state.routes[navigation.state.index];
  let navigationOptions = {};
  if (routeName === "Song") {
    navigationOptions.tabBarVisible = false;
  }
  return navigationOptions;
};

ProfileStack.navigationOptions = ({ navigation }) => {
  let { routeName } = navigation.state.routes[navigation.state.index];
  let navigationOptions = {};
  if (routeName === "Song") {
    navigationOptions.tabBarVisible = false;
  }
  return navigationOptions;
};

const Tabs = createBottomTabNavigator(
  {
    Home: HomeStack,
    Stream: StreamStack,
    Search: SearchStack,
    Profile: ProfileStack
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Home") {
          iconName = "home";
        } else if (routeName === "Stream") {
          iconName = "flash";
        } else if (routeName === "Search") {
          iconName = "search";
        } else if (routeName === "Profile") {
          iconName = "account";
        }
        return iconName === "search" ? (
          <MaterialIcons name={iconName} size={25} color={tintColor} />
        ) : (
          <MaterialCommunityIcons name={iconName} size={25} color={tintColor} />
        );
      }
    }),
    tabBarOptions: {
      activeTintColor: "#fff",
      inactiveTintColor: "grey",
      activeBackgroundColor: "grey",
      showLabel: false,
      style: {
        backgroundColor: "#000"
      }
    }
  }
);

export default (Switch = createSwitchNavigator(
  {
    Login: LoginScreen,
    Home: Tabs
  },
  {
    initialRouteName: "Login"
  }
));
