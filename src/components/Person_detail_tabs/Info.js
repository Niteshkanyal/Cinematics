import React, { Component } from 'react';
import {
  Text,
  View,
  Dimensions,
  ScrollView
} from 'react-native';
let { height, width } = Dimensions.get('window');
import Icon from 'react-native-vector-icons/FontAwesome'
import Image from 'react-native-image-progress'

export default class Info extends Component {
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <ScrollView>
          <Text style={{ color: 'black', padding: 10, fontSize: 15, marginLeft: width * 0.01 }}>{this.props.info.biography}</Text>
          <Text style={{ color: 'black', padding: 2, marginTop: width * 0.01, marginLeft: width * 0.03 }}><Text style={{ fontWeight: 'bold', color: 'black', fontSize: 15 }}>Born:</Text>{this.props.info.birthday}</Text>
          <Text style={{ color: 'black', padding: 2, marginLeft: width * 0.03, marginBottom: width * 0.02 }}><Text style={{ fontWeight: 'bold', color: 'black', fontSize: 15 }}>Birthplace:</Text>{this.props.info.place_of_birth}</Text>
        </ScrollView>
      </View>
    );
  }
}