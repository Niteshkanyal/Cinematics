
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
let { height, width } = Dimensions.get('window');
import Icon from 'react-native-vector-icons/FontAwesome'
import Image from 'react-native-image-progress'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as action from '../../actions/personAction';
import { API } from "../../constants/const"

class Movies extends Component {
  constructor(props) {
    super(props)
    state = {
      isLoading: true,
    }
  }

  componentDidMount = () => {
    this.props.personmovieFetch(this.props.item.id);
  }
  componentWillReceiveProps = (nextProps) => {
    if (this.props.movie != nextProps.movie)
      this.setState({ isLoading: false });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, marginTop: 100 }}>
          <ActivityIndicator />
        </View>
      )
    }
    return (
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <FlatList
          numColumns={3}
          data={this.props.movie}
          keyExtractor={(x, i) => i}
          renderItem={({ item }) =>
            <TouchableOpacity onPress={() => { Actions.Movie_detail({ item: item }) }}>
              <View style={styles.container}>
                <View style={{ height: height * 0.25 }}>
                  <Image indicator={ActivityIndicator} source={{ uri: API.IMGPATH + item.poster_path }} style={styles.image} />
                </View>
                <View style={{ height: height * 0.05, flexWrap: 'wrap' }}><Text style={styles.text_title} numberOfLines={2}>{item.original_title}</Text></View>
              </View>
            </TouchableOpacity>
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:
    {
      height: height * 0.32,
      flexDirection: 'column',
      marginTop: height * 0.015,
      marginLeft: width * 0.03,
      width: width * 0.294,
      backgroundColor: '#d7d7d7',
      marginBottom: width * 0.02,
    },
  text_title:
    {
      color: 'black',
      fontSize: 15,
      fontWeight: 'bold',
      textAlign: 'center',
      padding: 3,
    },
  image:
    {
      width: width * 0.294,
      height: height * 0.24,
    },
});

mapStateToProps = (state, props) => {
  return {
    movie: state.personReducer.personmovie,
  }
}

mapDispatchToProps = (dispatch) => {
  return bindActionCreators(action, dispatch);

}

export default connect(mapStateToProps, mapDispatchToProps)(Movies);