import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'
import { View, ActivityIndicator, Dimensions } from 'react-native'
import { Actions } from 'react-native-router-flux'
let { height, width } = Dimensions.get('window');
import Image from 'react-native-image-progress'
import ProgressBar from 'react-native-progress/Bar'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as myActions from "../../actions/movieviewAction.js";
import ListStyle from './ListStyle.js'
import GridStyle from './GridStyle.js'
import { API } from '../../constants/const';

class Anticipated extends Component {
  constructor(props) {
    super(props);
    this.state =
      {
        isLoading: true,
        movies: [],
        currentPage: 2,
        lang: "en-US",
      }
  }
  componentWillReceiveProps = nextProps => {
    if (nextProps.movies != this.props.movies) {
      this.setState({
        movies: nextProps.movies,
        isLoading: false
      });
    }
  };
  componentDidMount = () => {
    this.props.getAnticipated(this.state.lang, this.state.currentPage);
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
        <ListStyle list={this.props.movies} />
      )
    } else {
      return (
        <GridStyle list={this.props.movies} />
      )
    }

  }
}

mapStateToProps = (state, props) => {
  return {
    movies: state.movieviewReducer.anticipated
  };
};

mapDispatchToProps = dispatch => {
  return bindActionCreators(myActions, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(Anticipated);