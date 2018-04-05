import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'
import { View, BackgroundImage, ScrollView, TextInput, Text, Image, Platform, TouchableOpacity, Dimensions, ActivityIndicator } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
let { height, width } = Dimensions.get('window');
import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Movie from './Search_tabs/Movie_search.js';
import Actor from './Search_tabs/Actor_search.js';
import Tv from './Search_tabs/Tv_search.js';
import * as action from '../actions/searchAction';

class Search extends Component {
      constructor(props) {
            super(props);
            this.state = {
            }
      }
      componentWillReceiveProps = (nextProps) => {
            if (this.props.data != nextProps.data)
                  this.setState({ isLoading: false });
      }

      render() {
            return (
                  <View style={{ flex: 1, flexDirection: 'column' }}>
                        <View style={{ flexDirection: 'row', backgroundColor: "#333435" }}>
                              <View style={{ margin: 10, flex: 0.1 }}>
                                    <TouchableOpacity onPress={() => { Actions.pop() }}  >
                                          <Icon name="arrow-left" size={24} color="#fff" style={{ padding: 5 }} />
                                    </TouchableOpacity>
                              </View >
                              <View style={{ margin: 10, flex: 0.1 }}>
                                    <Icon name="search" size={20} color="#fff" style={{ padding: 5 }} />
                              </View>
                              <View style={{ marginLeft: 0, marginRight: 0, marginBottom: 10, flex: 0.7 }}>
                                    <KeyboardAwareScrollView>
                                          <TextInput
                                                placeholder={"Search " + "..."}
                                                placeholderTextColor="#BDC3C7"
                                                underlineColorAndroid="transparent"
                                                style={{
                                                      borderBottomColor: "#BDC3C7",
                                                      color: "#fff", borderBottomWidth: 2, fontSize: 18
                                                }}
                                                autoFocus
                                                onChangeText={(text) => {
                                                      this.setState({ query: text });
                                                      this.props.search(text)
                                                }} />
                                    </KeyboardAwareScrollView>
                              </View>
                        </View>
                        <View style={{ flex: 1 }}>

                              <ScrollableTabView
                                    tabBarBackgroundColor="#333435"
                                    tabBarActiveTextColor="#fff"
                                    tabBarInactiveTextColor="#BDC3C7"
                                    tabBarTextStyle={{ fontFamily: 'Roboto', fontSize: 15 }}
                                    tabBarUnderlineStyle={{ backgroundColor: '#3FC380' }}
                                    renderTabBar={() => <ScrollableTabBar />}>
                                    <Movie tabLabel="MOVIES" data={this.props.data} />
                                    <Actor tabLabel="ACTORS" data={this.props.data} />
                                    <Tv tabLabel="TV SHOWS" data={this.props.data} />
                              </ScrollableTabView>
                        </View>
                  </View>
            )
      }
}
mapStateToProps = (state, props) => {
      return {
            data: state.searchReducer.data,
      }
}

mapDispatchToProps = (dispatch) => {
      return bindActionCreators(action, dispatch);

}

export default connect(mapStateToProps, mapDispatchToProps)(Search);