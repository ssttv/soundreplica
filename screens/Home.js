import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Button
} from 'react-native'

static navigationOptions = {
  headerTitle: 'Home',
  headerTitleStyle: {
    color: '#444',
    fontWeight: 'normal'
  }
}

export default class HomeScreen extends Component {
  render() {
    return(
      <View style={styles.container}>
        <Button
          title='Play Song'
          onPress={()=> this.props.navigation.navigate('Song')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
})
