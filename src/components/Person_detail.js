import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ActivityIndicator,
  FlatList,
  Linking
} from 'react-native';
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view'
import { Actions } from 'react-native-router-flux'
let { width, height } = Dimensions.get('window');
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Modal from 'react-native-modal'
import Icon from 'react-native-vector-icons/FontAwesome'
import { API } from '../constants/const'
import Info from './Person_detail_tabs/Info.js'
import Movies from './Person_detail_tabs/Movies.js'
import Tv from './Person_detail_tabs/Tv.js'
import Image from 'react-native-image-progress'
import * as action from '../actions/personAction.js';

class Person_detail extends Component {
  state = {
    isLoading: true,
    visible: false,
    modalVisible: false,
  }
  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  componentDidMount = () => {
    this.props.personFetch(this.props.item.id);
  }
  componentWillReceiveProps = (nextProps) => {
    if (this.props.info != nextProps.info)
      this.setState({ isLoading: false });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, marginTop: height * 0.44 }}>
          <ActivityIndicator />
        </View>
      )
    }
    return (
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <View style={{ flex: 0.55, flexDirection: 'column', position: 'relative' }}>

          <View style={{ flex: 0.6, position: 'relative' }}>
            <Modal

              backdrop={true}
              overlayColor={'rgba(255, 255, 255, .25)'}
              onBackdropPress={() => this.setState({ modalVisible: false })}
              transparent={true}
              visible={this.state.modalVisible}
              onRequestClose={() => {
                this.setModalVisible(!this.state.modalVisible);
              }}>
              <View style={{ marginLeft: width * 0.52, flexDirection: 'column', height: 180, width: 210, marginTop: width * -0.89, backgroundColor: '#f7faff', borderColor: "rgba(2, 4, 33, 0.4)", }} >
                <View style={{ flexDirection: 'column', borderRadius: 20, padding: 3 }}>
                  <Text style={{ color: 'black', fontSize: width * 0.04, marginLeft: width * 0.02, marginTop: height * 0.018 }} onPress={() => Linking.openURL('http://googleplaystore.com')}>Google Play Store</Text>
                  <Text style={{ color: 'black', fontSize: width * 0.04, marginLeft: width * 0.02, marginTop: height * 0.028 }} onPress={() => Linking.openURL('http://themoviedb.org')}>View on Tmdb</Text>
                  <Text style={{ color: 'black', fontSize: width * 0.04, marginLeft: width * 0.02, marginTop: height * 0.028 }} onPress={() => Linking.openURL('http://imdb.com')}>View on Imdb</Text>
                  <Text style={{ color: 'black', fontSize: width * 0.04, marginLeft: width * 0.02, marginTop: height * 0.028 }} onPress={() => Linking.openURL('http://facebook.com')}>Join the Discussion</Text>
                </View>
              </View>
            </Modal>
            <Image indicator={ActivityIndicator} source={{ uri: API.IMGPATH + this.props.info.profile_path }} style={{ width: width, height: height * 0.38, position: 'relative' }} />
            <Icon name='arrow-left' style={{ color: 'white', fontSize: 24, marginTop: height * 0.01, marginLeft: width * 0.03, position: 'absolute' }} onPress={() => Actions.pop()} />
            <Icon name='home' style={{ color: 'white', fontSize: 25, marginTop: height * 0.01, marginLeft: width * 0.8, position: 'absolute' }} onPress={() => Actions.popTo('Moviesview')} />
            <Icon name='ellipsis-v' style={{ color: 'white', fontSize: 25, marginTop: height * 0.01, marginLeft: width * 0.95, position: 'absolute' }} onPress={() => { this.setModalVisible(true) }} />
          </View>

          <View style={{ flex: 0.4, backgroundColor: '#382030', flexDirection: 'row', position: 'relative' }}>

            <View style={{ flex: 0.38 }}></View>
            <View style={{ flex: 0.62, flexDirection: 'column' }}>
              <View style={{ flex: 0.15 }}></View>
              <View style={{ flex: 0.15, flexDirection: 'row' }}>
                <View style={{ flex: 0.15 }}></View>
                <View style={{ flex: 0.05 }}>
                </View>
                <View style={{ flex: 0.15 }}></View>
                <View style={{ flex: 0.05 }}>
                </View>
                <View style={{ flex: 0.6 }}></View>
              </View>
              <View style={{ flex: 0.35 }}>
                <Text style={{ color: 'white', fontSize: width * 0.052, fontWeight: 'bold' }}>{this.props.info.name}</Text>
              </View>
              <View style={{ flex: 0.05 }}></View>
              <View style={{ flex: 0.3, flexDirection: 'row' }}>
              </View>
            </View>

          </View>
          <Image indicator={ActivityIndicator} source={{ uri: API.IMGPATH + this.props.info.profile_path }} style={{ width: width * 0.3, height: height * 0.25, position: 'absolute', marginTop: height * 0.259, marginLeft: width * 0.036 }} />

        </View>
        <View style={{ flex: 0.45 }}>
          <View style={{ flex: 2 }}>
            <ScrollableTabView
              tabBarBackgroundColor="#6880a8"
              tabBarActiveTextColor="#f7faff"
              tabBarInactiveTextColor="#99a9c4"
              tabBarTextStyle={{ fontFamily: 'Roboto', fontSize: width * 0.037 }}
              tabBarUnderlineStyle={{ backgroundColor: 'white' }}
              renderTabBar={() => <ScrollableTabBar />}>
              <Info tabLabel='INFO' info={this.props.info} />
              <Movies tabLabel='MOVIES' item={this.props.item} />
              <Tv tabLabel='TV SHOWS' item={this.props.item} />
            </ScrollableTabView>
          </View>

        </View>
      </View>

    );
  }
}

mapStateToProps = (state, props) => {
  return {
    info: state.personReducer.personinfo,
  }
}

mapDispatchToProps = (dispatch) => {
  return bindActionCreators(action, dispatch);

}

export default connect(mapStateToProps, mapDispatchToProps)(Person_detail);