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
import mockdata from './mockdata';

class ListViewExample extends Component {
  render() {
    var data = mockdata[0];
     return (
       <View style={styles.container}>
         <Image source={{uri: data.artworkUrl60}}
           style={styles.thumbnail}/>
         <View style={styles.rightContainer}>
           <Text style={styles.song}>{data.trackName}</Text>
           <Text style={styles.album}>{data.collectionName}</Text>
         </View>
       </View>
     );
  }
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#F5FCFF',
  },
  rightContainer: {
    flex: 1,
  },
  song: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  album: {
    textAlign: 'center',
  },
  thumbnail: {
    width: 60,
    height: 60,
  },
});

AppRegistry.registerComponent('ListViewExample', () => ListViewExample);
