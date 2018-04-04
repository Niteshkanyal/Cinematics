
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ActivityIndicator,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Actions } from 'react-native-router-flux'
let { width, height } = Dimentions.get('window');
import Icon from 'react-native-vector-icons/FontAwesome'
import { API } from '../../constants/const';

export default class Movie_search extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column' }} >
        <FlatList
          numColumns={3}
          data={this.props.data.movies}
          keyExtractor={(x, i) => i}
          renderItem={({ item }) =>
            <TouchableOpacity onPress={() => { Actions.Movie_detail({ item: item }) }}>
              <View style={{ height: height * 0.32, flexDirection: 'column', marginTop: height * 0.015, marginLeft: width * 0.03, width: width * 0.294, backgroundColor: '#d7d7d7', marginBottom: width * 0.02 }}>
                <View style={{ height: height * 0.25 }}>
                  <Image source={(item.poster_path ? { uri: API.IMGPATH + item.poster_path } : require('../../images/reel.png'))} style={{ width: width * 0.294, height: height * 0.24 }} />
                </View>
                <View style={{ height: height * 0.05, flexWrap: 'wrap' }}><Text style={{ color: 'black', fontSize: 15, textAlign: 'center', padding: 3 }} numberOfLines={2}>{item.original_title}</Text></View>
              </View>
            </TouchableOpacity>
          }
        />
      </View>
    );
  }
}
