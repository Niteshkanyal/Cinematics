import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  DrawerLayoutAndroid,
  TouchableHighlight,
  Dimensions,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';

import ScrollableTabView ,{ScrollableTabBar}from 'react-native-scrollable-tab-view'
var {width} = Dimensions.get('window');
var {height}=Dimensions.get('window');
import Icon from 'react-native-vector-icons/FontAwesome'
import SideBarMenu from './SideBarMenu.js'

import * as myActions from "../actions/movieviewAction.js";

import {Router,Scene,Stack,Actions} from 'react-native-router-flux'
import Nowplaying from './Movie_tabs/Nowplaying.js'
import Topboxoffice from './Movie_tabs/Topboxoffice.js'
import Anticipated from './Movie_tabs/Anticipated.js'
import Toprated from './Movie_tabs/Toprated.js'


import { bindActionCreators } from "redux";
import { connect } from "react-redux";

export default class Moviesview extends Component{
  constructor(props) {
          super(props);
          this.openDrawer = this.openDrawer.bind(this);
          this.state = {
             listflip:false,
         }
      }
   
    openDrawer() {
        this.drawer.openDrawer();
        // this.drawer.closeDrawer();
    }

  render() {
  
    //   console.log("Porps",this.props)
    return (
      <DrawerLayoutAndroid
            drawerWidth={300}
            ref={(_drawer) => this.drawer = _drawer}
            drawerPosition={DrawerLayoutAndroid.positions.Left}
            renderNavigationView={() => <SideBarMenu/>}>
            <View style={{flex: 1,flexDirection:'column', alignItems: 'center'}}>
                <View style={{flex:0.1,flexDirection:'row',backgroundColor:'#333333'}}>
                    <View style={{flex:0.06}}></View>
                    <View style={{flex:0.09}}>
                      <Icon name='bars' style={{color:'white', fontSize:24,marginTop:height*0.029}} onPress={this.openDrawer}/>
                    </View>
                    <View style={{flex:0.03}}></View>
                    <View style={{flex:0.52}}><Text style={{fontSize:width*0.052,color:'#f7faff',padding:15}}>Cinematics</Text></View>
                    <View style={{flex:0.05}}></View>
                    <View style={{flex:0.1}}>
                      <TouchableOpacity  onPress={() => {this.setState({listflip:!this.state.listflip})}}>
                        <Icon  name={this.state.listflip?'table':'th-list'} style={{color:'white', fontSize:23,marginTop:height*0.028}}/>
                      </TouchableOpacity>
                    </View>
                    <View style={{flex:0.05}}></View>
                    <View style={{flex:0.05}}>
                      <Icon name='search' style={{color:'white', fontSize:20,marginTop:height*0.029}} onPress = { () => { Actions.Search()}}/>
                    </View>
                    <View style={{flex:0.05}}></View>
                </View>
                <View style={{flex:0.9,flexDirection:'column'}}>
                    <View style={{flex:1}}>
                        <ScrollableTabView
                            tabBarBackgroundColor="#333333"
                            tabBarActiveTextColor="#f7faff"
                            tabBarInactiveTextColor="#c1c1c1"
                            tabBarTextStyle={{ fontFamily: 'Roboto', fontSize:width*0.037 }}
                            tabBarUnderlineStyle={{ backgroundColor: '#3FC380' }}
                            renderTabBar={() => <ScrollableTabBar />}>
                               <Nowplaying tabLabel='NOW PLAYING' listflip={this.state.listflip} />
                               <Topboxoffice tabLabel="TOP BOX OFFICE" listflip={this.state.listflip}/>
                               <Anticipated tabLabel="ANTICIPATED" listflip={this.state.listflip}/>
                               <Toprated tabLabel="TOP RATED" listflip={this.state.listflip}/>
                        </ScrollableTabView>
                    </View>
                </View>
            </View>
        </DrawerLayoutAndroid>
    );}
}

  