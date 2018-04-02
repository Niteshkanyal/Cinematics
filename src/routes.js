import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  DrawerLayoutAndroid,
  TouchableHighlight,
  Dimensions
} from 'react-native';
import {Router,Scene,Stack} from 'react-native-router-flux'
var {width} = Dimensions.get('window');
var {height}=Dimensions.get('window');
import Icon from 'react-native-vector-icons/FontAwesome'
import Moviesview from './components/Moviesview.js'

import Tv_detail from './components/Tv_detail.js'
import SideBarMenu from './components/SideBarMenu.js'
import Tvview from './components/Tvview.js'
import Person_detail from './components/Person_detail.js'
import Popularpeople from './components/Popularpeople.js'
import Movie_detail from './components/Movie_detail.js'
import Search from './components/Search.js'
import Discover from './components/Discover.js'


export default class App extends Component{

  render() {
    return (
        <Router>
            <Scene key='root'>
                <Scene hideNavBar hideTabBar
                    component={Moviesview}
                    key="Moviesview"
                    initial
                />
                <Scene hideNavBar hideTabBar
                    component={Movie_detail}
                    key="Movie_detail"
                />
                <Scene hideNavBar hideTabBar
                    component={Search}
                    key="Search"
                />
                <Scene hideNavBar hideTabBar
                    component={Tv_detail}
                    key="Tv_detail"
                />
                <Scene hideNavBar hideTabBar
                    component={SideBarMenu}
                    key="side"
                />
                 <Scene hideNavBar hideTabBar
                    component={Tvview}
                    key="Tvview"
                />
                <Scene hideNavBar hideTabBar
                    component={Person_detail}
                    key="Person_detail"
                />
                <Scene hideNavBar hideTabBar
                    component={Popularpeople}
                    key="Popularpeople"
                />
            
                <Scene hideNavBar hideTabBar
                    component={Discover}
                    key="Discover"
                />
              
            </Scene>
        </Router>
    );}
}
