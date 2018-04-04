import React, { Component } from 'react';
import {
  Text,
  View,
  Dimensions,
  ScrollView,
  StyleSheet,
} from 'react-native';
let { height, width } = Dimensions.get('window');
import Icon from 'react-native-vector-icons/FontAwesome'
import Image from 'react-native-image-progress'

export default class Info extends Component {
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <ScrollView>
          <Text style={styles.text_bio}>{this.props.info.biography}</Text>
          <Text style={styles.text_birthday}><Text style={{ fontWeight: 'bold', color: 'black', fontSize: 15 }}>Born:</Text>{this.props.info.birthday}</Text>
          <Text style={styles.text_place}><Text style={{ fontWeight: 'bold', color: 'black', fontSize: 15 }}>Birthplace:</Text>{this.props.info.place_of_birth}</Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text_bio:
    {
      color: 'black',
      padding: 10,
      fontSize: 15,
      marginLeft: width * 0.01,
    },
  text_birthday:
    {
      color: 'black',
      padding: 2,
      marginTop: width * 0.01,
      marginLeft: width * 0.03,
    },
  text_place:
    {
      color: 'black',
      padding: 2,
      marginLeft: width * 0.03,
      marginBottom: width * 0.02,
    },

});