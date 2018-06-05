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
        easing: Easing.linear
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
          <Animated.View style={styles.upperMostIcons}>
            <TouchableOpacity>
              <MaterialIcons name='play-arrow' size={30} style={{color: 'white'}}/>
            </TouchableOpacity>
            <View>
              <TouchableOpacity>
                <Text style={styles.upperSongTitle}>Eternity</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.upperArtistName}>Dronny</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <MaterialCommunityIcons name='heart' size={20} style={{ color: 'white'}}/>
            </TouchableOpacity>
          </Animated.View>
          <Animated.View style={styles.upperIcons}>
            <Animated.View style={styles.upperLeftIcons}>
              <TouchableOpacity>
                <Text style={styles.artistName}>Dronny</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.songTitle}>Eternity</Text>
              </TouchableOpacity>
            </Animated.View>
            <Animated.View>
              <TouchableOpacity>
                <MaterialCommunityIcons name='chevron-down' size={40} style={styles.upperRightIcon}/>
              </TouchableOpacity>
            </Animated.View>
          </Animated.View>
          <Animated.View style={styles.lowerIcons}>
            <Animated.View style={styles.lowerIconsWrapper}>
              <TouchableOpacity style={styles.likes}>
                <MaterialCommunityIcons name={'heart'} size={25} style={{ color: 'white' }}/>
                <Text style={{color: 'white'}}>1,414</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <FeatherIcons name={'share'} size={25} style={{ color: 'white'}}/>
              </TouchableOpacity>
            </Animated.View>
            <TouchableOpacity>
              <FeatherIcons name={'repeat-once'} size={25} style={{ color: 'white'}}/>
            </TouchableOpacity>
            <TouchableOpacity>
              <FeatherIcons name={'more-horiz'} size={25} style={{ color: 'white'}}/>
            </TouchableOpacity>
          </Animated.View>
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
  },
  imageContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: SCREEN_HEIGHT
  },
  upperMostIcons: {
    alignItems: 'center'
  },
  upperSongTitle: {
    color: 'white'
  },
  upperArtistName: {
    color: 'white',
    textDecorationLine: 'underline',
    fontWeight: 'bold'
  },
  upperIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  upperLeftIcons: {
    flexDirection: 'column'
  },
  artistName: {
    backgroundColor: '#000',
    color: '#fff',
    marginLeft: 15,
    fontSize: 20,
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  },
  songTitle: {
    backgroundColor: '#000',
    marginLeft: 15,
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold'
  },
  upperRightIcon: {
    color: '#fff',
    marginRight: 10
  },
  lowerIcons: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 40
  },
  lowerIconsWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  likes: {
    flexDirection: 'row',
    alignItems: 'center'
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
