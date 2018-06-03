import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Button
} from 'react-native'

export default class HomeScreen extends Component {
  render() {
    return(
      <View style={styles.container}>
        <Button
          title='Long live the Home Screen'
          onPress={()=> this.props.navigation.navigate('Stream')}
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
