import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Button
} from 'react-Native'

export default class HomeScreen extends Component {
  render() {
    return(
      <View style={styles.container}>
        <Button
          title='Wrestle with the Login Screen'
          onPress={()=> this.props.navigate('Login')}
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
