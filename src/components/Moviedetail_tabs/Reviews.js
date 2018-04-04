
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
  ActivityIndicator
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as myActions from "../../actions/moviedetailAction.js";
let { height, width } = Dimensions.get('window');

class Reviews_detail extends Component {
  constructor(props) {
    super(props)
    state = {
      isLoading: true,
    }
  }

  componentWillReceiveProps = nextProps => {
    if (nextProps.moviereview != this.props.moviereview) {
      this.setState({
        moviereview: nextProps.moviereview,
        isLoading: false
      });
    }
  };
  componentDidMount = () => {
    this.props.getmovieReview(this.props.item.id);
  };


  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, marginTop: 100 }}>
          <ActivityIndicator />
        </View>
      )
    }
    return (
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <FlatList
          numColumns={1}
          data={this.props.moviereview}
          keyExtractor={item => item.id.toString()}
          key={`${
            this.props
              ? item => item.id.toString()
              : item => item.id * (0.1).toString()
            }`}
          renderItem={({ item }) =>
            <View style={{ flexDirection: 'column', marginTop: height * 0.01, padding: width * 0.03 }}>
              <Text style={{ fontSize: 15, fontWeight: 'bold', padding: 5 }}>{item.author}</Text>
              <Text style={{ padding: 5 }}>{item.content}</Text>
            </View>
          }
        />
      </View>
    );
  }
}


mapStateToProps = (state, props) => {
  return {
    moviereview: state.movieviewReducer.moviereview
  };
};

mapDispatchToProps = dispatch => {
  return bindActionCreators(myActions, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(Reviews_detail);