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
  Image,
  ListView,
} from 'react-native';
import mockdata from './mockdata';
import SearchBar from 'react-native-search-bar';

class ListViewExample extends Component {
  constructor(props){
    super(props);
    this.onChangeText = this.onChangeText.bind(this);
    this.onCancelButtonPress = this.onCancelButtonPress.bind(this);
    this.state = { dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
    }
  }

  render() {
     return (
       <View>
         <SearchBar
           placeholder='Search'
           onChangeText={this.onChangeText}
           onCancelButtonPress={this.onCancelButtonPress}/>
         <ListView
         dataSource={this.state.dataSource}
         renderRow={this.renderSong}
         style={styles.listView} />
       </View>
     );
  }

    componentDidMount() {
      this.setState({
          dataSource: this.state.dataSource.cloneWithRows(mockdata),

      });
  }

  onChangeText(e) {
      this.setState({
          dataSource: this.state.dataSource.cloneWithRows(mockdata.filter((item) =>
              item.trackName.toLowerCase().includes(e.toLowerCase()))),
      });
  }


  onCancelButtonPress() {
      this.setState({
          dataSource: this.state.dataSource.cloneWithRows(mockdata),
      });
  }

  renderSong(data){
    return (
    <View style={styles.container}>
      <Image source={{uri: data.artworkUrl60}}
        style={styles.thumbnail}/>
      <View style={styles.rightContainer}>
        <Text style={styles.song}>{data.trackName}</Text>
        <Text style={styles.album}>{data.collectionName}</Text>
      </View>
    </View>
  )
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
  album: {
    fontSize: 10,
    marginBottom: 8,
    marginLeft: 5
  },
  song: {
    fontSize: 13,
    marginLeft: 5
  },
  thumbnail: {
    width: 60,
    height: 60,
  },
  listView: {
  paddingTop: 20,
  backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('ListViewExample', () => ListViewExample);
