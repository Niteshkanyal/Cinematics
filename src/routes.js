import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/FontAwesome'
import Movies_view from './components/Movies_view.js'
import Tv_detail from './components/Tv_detail.js'
import Sidebar_menu from './components/Sidebar_menu.js'
import Tv_view from './components/Tv_view.js'
import Person_detail from './components/Person_detail.js'
import Popular_people from './components/Popular_people.js'
import Movie_detail from './components/Movie_detail.js'
import Search from './components/Search.js'
import Discover from './components/Discover.js'

export default class Routes extends Component {
    render() {
        return (
            <Router>
                <Scene key='root'>
                    <Scene hideNavBar hideTabBar
                        component={Movies_view}
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
                        component={Sidebar_menu}
                        key="side"
                    />
                    <Scene hideNavBar hideTabBar
                        component={Tv_view}
                        key="Tvview"
                    />
                    <Scene hideNavBar hideTabBar
                        component={Person_detail}
                        key="Person_detail"
                    />
                    <Scene hideNavBar hideTabBar
                        component={Popular_people}
                        key="Popularpeople"
                    />
                    <Scene hideNavBar hideTabBar
                        component={Discover}
                        key="Discover"
                    />
                </Scene>
            </Router>
        );
    }
}
