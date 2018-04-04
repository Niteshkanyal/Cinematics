import React, { Component } from 'react';
import { API } from '../../constants/const';
import Icon from 'react-native-vector-icons/FontAwesome'
import { View, TextInput, Text, TouchableOpacity, ActivityIndicator, FlatList, Dimensions } from 'react-native'
import { Actions } from 'react-native-router-flux'
let { height, width } = Dimentions.get('window');
import Image from 'react-native-image-progress'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import ListStyle from './ListStyle.js'
import GridStyle from './GridStyle.js'
import * as myActions from "../../actions/tvviewAction.js";

class Airingtoday extends Component {
  constructor(props) {
    super(props);
    this.state =
      {
        isLoading: true,
        // movies:[],
        currentPage: 2,
        lang: "en-US",
      }
  }
  componentWillReceiveProps = nextProps => {
    if (nextProps.tv != this.props.tv) {
      this.setState({
        tv: nextProps.tv,
        isLoading: false
      });
    }
  };
  componentDidMount = () => {
    this.props.airingToday(this.state.lang, this.state.currentPage);
  };

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, marginTop: height * 0.34 }}>
          <ActivityIndicator />
        </View>
      )
    }

    if (this.props.listflip) {
      return (
        <ListStyle list={this.props.tv} />
      )
    } else {
      return (
        <GridStyle list={this.props.tv} />
      )
    }
  }
}

mapStateToProps = (state, props) => {
  return {
    tv: state.tvviewReducer.airingtoday
  };
};

mapDispatchToProps = dispatch => {
  return bindActionCreators(myActions, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(Airingtoday);