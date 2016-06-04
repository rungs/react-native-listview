/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import mockdata from './mockdata'

class ListViewExample extends Component {
  render() {
    var data = mockdata[0];
     return (
       <View style={styles.container}>
         <Text>{data.trackName}</Text>
         <Text>{data.collectionName}</Text>
         <Image source={{uri: data.artworkUrl60}} />
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
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('ListViewExample', () => ListViewExample);
