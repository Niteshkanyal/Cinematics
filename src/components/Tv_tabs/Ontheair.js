import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator, FlatList, Dimensions } from 'react-native'
import { Actions } from 'react-native-router-flux'
let { height, width } = Dimensions.get('window');
import Image from 'react-native-image-progress'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import ListStyle from './ListStyle.js'
import GridStyle from './GridStyle.js'
import * as myActions from "../../actions/tvviewAction.js";
import { API } from '../../constants/const';

class Ontheair extends Component {
  constructor(props) {
    super(props);
    this.state =
      {
        isLoading: true,
        currentPage: 3,
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
    this.props.ontheAir(this.state.lang, this.state.currentPage);
  };

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.container}>
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

const styles = StyleSheet.create({
  container:
    {
      flex: 1,
      marginTop: height * 0.34,
    },
});

mapStateToProps = (state, props) => {
  return {
    tv: state.tvviewReducer.ontheair
  };
};

mapDispatchToProps = dispatch => {
  return bindActionCreators(myActions, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(Ontheair);