
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { Actions } from 'react-native-router-flux'
let { height, width } = Dimentions.get('window');
import Icon from 'react-native-vector-icons/FontAwesome'
import Image from 'react-native-image-progress'
import { API } from '../../constants/const'

export default class Tv_search extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column' }} >
        <FlatList
          numColumns={3}
          data={this.props.data.tv}
          keyExtractor={(x, i) => i}
          renderItem={({ item }) =>
            <TouchableOpacity onPress={() => { Actions.Tv_detail({ item: item }) }}>
              <View style={{ height: height * 0.32, flexDirection: 'column', marginTop: height * 0.015, marginLeft: width * 0.03, width: width * 0.294, backgroundColor: '#d7d7d7', marginBottom: width * 0.02 }}>
                <View style={{ height: height * 0.25 }}>
                  <Image indicator={ActivityIndicator} source={{ uri: API.IMGPATH + item.poster_path }} style={{ width: width * 0.294, height: height * 0.24 }} />
                </View>
                <View style={{ height: height * 0.05, flexWrap: 'wrap' }}><Text style={{ color: 'black', fontSize: 15, textAlign: 'center', padding: 3 }} numberOfLines={2}>{item.name}</Text></View>
              </View>
            </TouchableOpacity>
          }
        />
      </View>
    );
  }
}