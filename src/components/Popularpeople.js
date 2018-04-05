import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  DrawerLayoutAndroid,
  Dimensions,
  ActivityIndicator,
  FlatList,
  TouchableOpacity
} from 'react-native';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view'
import { Actions } from 'react-native-router-flux'
import { bindActionCreators } from "redux";
import Icon from 'react-native-vector-icons/FontAwesome'
import Image from 'react-native-image-progress'
import { connect } from "react-redux";
import { API } from '../constants/const';
let { width, height } = Dimensions.get('window');
import SideBarMenu from './SideBarMenu.js'
import * as myActions from "../actions/popularpeopleAction";

class Popularpeople extends Component {
  constructor(props) {
    super(props);
    this.openDrawer = this.openDrawer.bind(this);
    this.state = {
      isLoading: true,
    }
  }
  openDrawer() {
    this.drawer.openDrawer();
  }
  componentWillReceiveProps = nextProps => {
    if (nextProps.popular != this.props.popular) {
      this.setState({
        popular: nextProps.popular,
        isLoading: false
      });
    }
  };
  componentDidMount = () => {
    this.props.getPopular(this.state.lang, this.state.currentPage);
  };
  render() {
    console.log("PPULAR PEOPLE", this.props);
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, marginTop: height * 0.48 }}>
          <ActivityIndicator />
        </View>
      )
    }
    return (
      <DrawerLayoutAndroid
        drawerWidth={300}
        ref={(_drawer) => this.drawer = _drawer}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => <SideBarMenu />}>

        <View style={{ flex: 1, flexDirection: 'column' }}>
          <View style={{ flex: 0.1, flexDirection: 'row', backgroundColor: '#333333' }}>
            <View>
              <Icon name='bars' style={{ color: '#f7faff', fontSize: 23, marginLeft: width * 0.05, marginTop: height * 0.028 }} onPress={this.openDrawer} />
            </View>
            <View>
              <Text style={{ color: '#f7faff', fontSize: width * 0.05, marginLeft: width * 0.2, marginTop: height * 0.026 }}>Popular People</Text>
            </View>
            <View>
              <Icon name='search' style={{ color: '#f7faff', fontSize: 23, marginLeft: width * 0.27, marginTop: height * 0.028 }} onPress={() => { Actions.Search() }} />
            </View>
          </View>
          <View style={{ flex: 0.9, flexDirection: 'column' }}>
            <FlatList
              numColumns={1}
              data={this.props.popular}
              keyExtractor={item => item.id.toString()}
              key={`${
                this.props
                  ? item => item.id.toString()
                  : item => item.id * (0.1).toString()
                }`}
              renderItem={({ item, index }) =>
                <TouchableOpacity onPress={() => { Actions.Person_detail({ item: item }) }}>
                  <View style={{ height: height * 0.17, flexDirection: 'row', marginTop: height * 0.02, }}>
                    <Image borderRadius={100} indicator={ActivityIndicator} source={{ uri: API.IMGPATH + item.profile_path }} style={{ width: 100, height: 100, marginLeft: width * 0.036, borderRadius: 100 }} />
                    <Text style={{ marginLeft: width * 0.04, fontSize: 15, fontWeight: 'bold', color: "black", marginTop: height * 0.056 }}>{item.name}</Text>
                  </View>
                </TouchableOpacity>
              }
            />
          </View>
        </View>
      </DrawerLayoutAndroid>
    );
  }
}
mapStateToProps = (state, props) => {
  return {
    popular: state.popularpeopleReducer.popularpeople,
  };
};

mapDispatchToProps = dispatch => {
  return bindActionCreators(myActions, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(Popularpeople);