import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    DrawerLayoutAndroid,
    TouchableHighlight,
    Dimensions, AsyncStorage,
    ActivityIndicator,
    ScrollView,
    FlatList,
    TouchableOpacity,
    Linking
} from 'react-native';
import Menupopup from './Menupopup.js'
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view'
import { Router, Actions, Scene, Stack } from 'react-native-router-flux'
import { SOCIAL } from '../constants/const';
var { width } = Dimensions.get('window');
var { height } = Dimensions.get('window');
import Icon from 'react-native-vector-icons/FontAwesome'
import { MOVIEVIEW, API } from '../constants/const';
import Image from 'react-native-image-progress'
import ProgressBar from 'react-native-progress/Circle'
import Share_social from './Container/Share_social.js'
import Share, { ShareSheet, Button } from "react-native-share"
import Info from './Moviedetail_tabs/Info.js'
import Cast from './Moviedetail_tabs/Cast.js'
import Reviews from './Moviedetail_tabs/Reviews.js'
import { Menu, MenuOptions, MenuOption, MenuTrigger, } from 'react-native-popup-menu';
import * as action from '../actions/moviedetailAction';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Modal from 'react-native-modal'
class Movie_detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            modalVisible: false,
            visible: false,
        }
    };
    setModalVisible(visible) {
        this.setState({modalVisible: visible});
      }
    componentDidMount = () => {
        this.props.movieFetch(this.props.item.id);
    }
    componentWillReceiveProps = (nextProps) => {
        if (this.props.info != nextProps.info)
            this.setState({ isLoading: false });
    }
    render() {
        console.log(this.props);
        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, marginTop: height * 0.48 }}>
                    <ActivityIndicator />
                </View>
            )
        }
        return (
            <View style={{ flex: 1, flexDirection: 'column' }}>
                <View style={{ flex: 0.55, flexDirection: 'column', position: 'relative' }}>
                
                    <View style={{ flex: 0.6,position:'relative'}}>
                        <Modal

                                backdrop={true}
                                overlayColor={'rgba(255, 255, 255, .25)'}
                                onBackdropPress={() => this.setState({ modalVisible: false })}
                                transparent={true}
                                visible={this.state.modalVisible}
                                onRequestClose={() => {
                                this.setModalVisible(!this.state.modalVisible);
                            }}>
                            <View   style={{marginLeft:width*0.52,flexDirection:'column',height:180,width:210,marginTop:width*-0.89,backgroundColor:'#f7faff',borderColor: "rgba(2, 4, 33, 0.4)",}} >
                                <View style={{flexDirection:'column',borderRadius:20,padding:3}}>
                                    <Text style={{color:'black',fontSize:width*0.04,marginLeft:width*0.02,marginTop:height*0.018}}   onPress={() => Linking.openURL('http://googleplaystore.com')}>Google Play Store</Text>
                                    <Text style={{color:'black',fontSize:width*0.04,marginLeft:width*0.02,marginTop:height*0.028}}   onPress={() => Linking.openURL('http://themoviedb.org')}>View on Tmdb</Text>
                                    <Text style={{color:'black',fontSize:width*0.04,marginLeft:width*0.02,marginTop:height*0.028}}   onPress={() => Linking.openURL('http://imdb.com')}>View on Imdb</Text>
                                        <Text style={{color:'black',fontSize:width*0.04,marginLeft:width*0.02,marginTop:height*0.028}}   onPress={() => Linking.openURL('http://facebook.com')}>Join the Discussion</Text>
                                </View>
                            </View>
                    </Modal>
                        <Image indicator={ActivityIndicator} source={{ uri: API.IMGPATH + this.props.info.backdrop_path }} style={{ width: width, height: height * 0.38, position: 'relative' }} />
                        
                        <Icon name='arrow-left' style={{ color: 'white', fontSize: 24, marginTop: height * 0.01, marginLeft: width * 0.03, position: 'absolute' }} onPress={() => Actions.pop()} />
                        <Icon name='home' style={{ color: 'white', fontSize: 25, marginTop: height * 0.01, marginLeft: width * 0.7, position: 'absolute' }} onPress={() => Actions.popTo('Moviesview')} />
                        <Icon name='share-alt' style={{ color: 'white', fontSize: 20, marginTop: height * 0.014, marginLeft: width * 0.824, position: 'absolute' }} onPress={() => this.props.toggeleShareButton()} />
                        <Icon name='ellipsis-v' style={{ color: 'white', fontSize: 25, marginTop: height * 0.014, marginLeft: width * 0.95, position: 'absolute' }}  onPress={() => {  this.setModalVisible(true) }}/>
                    </View>
                  

                    <View style={{ flex: 0.4, backgroundColor: '#303840', flexDirection: 'row', position: 'relative' }}>
                   
                        <View style={{ flex: 0.38 }}></View>
                        <View style={{ flex: 0.62, flexDirection: 'column' }}>
                            <View style={{ flex: 0.15 }}></View>
                            <View style={{ flex: 0.15, flexDirection: 'row' }}>
                                <View style={{ flex: 0.15 }}><Text style={{ color: '#7f898f' }}>N/A</Text></View>
                                <View style={{ flex: 0.05 }}>
                                    <Icon name='circle' style={{ color: '#7f898f', fontSize: 7, marginTop: height * 0.01 }} />
                                </View>
                                <View style={{ flex: 0.15 }}><Text style={{ color: '#7f898f' }}>{new Date(this.props.info.release_date).getFullYear()}</Text></View>
                                <View style={{ flex: 0.05 }}>
                                    <Icon name='circle' style={{ color: '#7f898f', fontSize: 7, marginTop: height * 0.01 }} />
                                </View>
                                <View style={{ flex: 0.6 }}><Text style={{ color: '#7f898f' }}>{Math.floor(this.props.info.runtime / 60)}hrs {(this.props.info.runtime % 60)}mins</Text></View>
                            </View>
                            <View style={{ flex: 0.35 }}>
                                <Text style={{ color: 'white', fontSize: width * 0.052, fontWeight: 'bold' }}>{this.props.info.title}</Text>
                            </View>
                            <View style={{ flex: 0.05 }}></View>
                            <View style={{ flex: 0.3, flexDirection: 'row' }}>
                                <FlatList
                                    numColumns={3}
                                    data={this.props.info.genres}
                                    keyExtractor={(x, i) => i}
                                    renderItem={({ item }) =>
                                        <Text style={{ color: '#f7faff' }}>{item.name}, </Text>
                                    }
                                />
                            </View>
                        </View>
                     
                    </View>
                    <Image indicator={ActivityIndicator} source={{ uri: API.IMGPATH + this.props.info.poster_path }} style={{ width: width * 0.3, height: height * 0.25, position: 'absolute', marginTop: height * 0.259, marginLeft: width * 0.036 }} />

                </View>


                <View style={{ flex: 0.45 }}>
                    <View style={{ flex: 2 }}>
                        <ScrollableTabView
                            tabBarBackgroundColor="#709060"
                            tabBarActiveTextColor="#f7faff"
                            tabBarInactiveTextColor="#aabda0"
                            tabBarTextStyle={{ fontFamily: 'Roboto', fontSize: width * 0.037 }}
                            tabBarUnderlineStyle={{ backgroundColor: 'white' }}
                            renderTabBar={() => <ScrollableTabBar />}>
                            <Info tabLabel='INFO' info={this.props.info}/>
                            <Cast tabLabel='CAST' item={this.props.item} />
                            <Reviews tabLabel='REVIEWS' item={this.props.item} />
                        </ScrollableTabView>

                        <Share_social/>
                    </View>

                </View>
            </View>

        );
    }
}
mapStateToProps = (state, props) => {
    return {
        info: state.movieviewReducer.movieDetails,
        isVisible: state.shareReducer.isVisible
    }
}

mapDispatchToProps = (dispatch) => {
    return bindActionCreators(action, dispatch);

}

export default connect(mapStateToProps, mapDispatchToProps)(Movie_detail);