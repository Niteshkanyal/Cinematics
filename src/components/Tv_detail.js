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
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Modal from 'react-native-modal'
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view'
import { Actions } from 'react-native-router-flux'
let { width, height } = Dimensions.get('window');
import Icon from 'react-native-vector-icons/FontAwesome'
import Image from 'react-native-image-progress'
import { API } from '../constants/const';
import Share_social from '../container/Share_social'
import Info from './Tvdetail_tabs/Info.js'
import Cast from './Tvdetail_tabs/Cast.js'
import Seasons from './Tvdetail_tabs/Seasons.js'
import * as action from '../actions/tvdetailAction';

class Tv_detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            modalVisible: false,
            visible: false,
        }
    };
    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    componentDidMount = () => {
        this.props.tvFetch(this.props.item.id);
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
                            <View style={styles.modal_view} >
                                <View style={{ flexDirection: 'column', borderRadius: 20, padding: 3 }}>
                                    <Text style={styles.text_modal} onPress={() => Linking.openURL('http://googleplaystore.com')}>Google Play Store</Text>
                                    <Text style={styles.text_modal} onPress={() => Linking.openURL('http://themoviedb.org')}>View on Tmdb</Text>
                                    <Text style={styles.text_modal} onPress={() => Linking.openURL('http://imdb.com')}>View on Imdb</Text>
                                    <Text style={styles.text_modal} onPress={() => Linking.openURL('http://facebook.com')}>Join the Discussion</Text>
                                </View>
                            </View>
                        </Modal>
                        <Image indicator={ActivityIndicator} source={{ uri: API.IMGPATH + this.props.info.backdrop_path }} style={styles.image_backdrop} />

                        <Icon name='arrow-left' style={styles.icon_arrow} onPress={() => Actions.pop()} />
                        <Icon name='home' style={styles.icon_home} onPress={() => Actions.popTo('Tvview')} />
                        <Icon name='share-alt' style={styles.icon_share} onPress={() => this.props.toggeleShareButton()} />
                        <Icon name='ellipsis-v' style={styles.icon_3d} onPress={() => { this.setModalVisible(true) }} />
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
                                <View style={{ flex: 0.15 }}>
                                    <Text style={{ color: '#7f898f' }}>{new Date(this.props.info.first_air_date).getFullYear()}</Text>
                                </View>
                                <View style={{ flex: 0.05 }}>
                                    <Icon name='circle' style={{ color: '#7f898f', fontSize: 7, marginTop: height * 0.01 }} />
                                </View>
                                <View style={{ flex: 0.6 }}>
                                    <Text style={{ color: '#7f898f' }}>{this.props.info.episode_run_time[0]} mins</Text>
                                </View>
                            </View>
                            <View style={{ flex: 0.35 }}>
                                <Text style={{ color: 'white', fontSize: width * 0.052, fontWeight: 'bold' }}>{this.props.info.name}</Text>
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
                    <Image indicator={ActivityIndicator} source={{ uri: API.IMGPATH + this.props.info.poster_path }} style={styles.image_poster} />

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
                            <Info tabLabel='INFO' info={this.props.info} />
                            <Cast tabLabel='CAST' item={this.props.item} />
                            <Seasons tabLabel='SEASONS' item={this.props.item} />
                        </ScrollableTabView>
                        <Share_social />
                    </View>

                </View>
            </View>

        );
    }
}


const styles = StyleSheet.create({
    container:
        {
            flex: 1,
            flexDirection: "column",
            backgroundColor: "#f7faff",
        },
    text_modal:
        {
            color: 'black',
            fontSize: width * 0.04,
            marginLeft: width * 0.02,
            marginTop: height * 0.028,
        },
    modal_view:
        {
            marginLeft: width * 0.52,
            flexDirection: 'column',
            height: 180, width: 210,
            marginTop: width * -0.89,
            backgroundColor: '#f7faff',
            borderColor: "rgba(2, 4, 33, 0.4)",
        },
    image_backdrop:
        {
            width: width,
            height: height * 0.38,
            position: 'relative',
        },
    image_poster:
        {
            width: width * 0.3,
            height: height * 0.25,
            position: 'absolute',
            marginTop: height * 0.259,
            marginLeft: width * 0.036,
        },
    icon_arrow:
        {
            color: 'white',
            fontSize: 24,
            marginTop: height * 0.01,
            marginLeft: width * 0.03,
            position: 'absolute',
        },
    icon_home:
        {
            color: 'white',
            fontSize: 25,
            marginTop: height * 0.01,
            marginLeft: width * 0.7,
            position: 'absolute',
        },
    icon_share:
        {
            color: 'white',
            fontSize: 20,
            marginTop: height * 0.014,
            marginLeft: width * 0.824,
            position: 'absolute',
        },
    icon_3d:
        {
            color: 'white',
            fontSize: 25,
            marginTop: height * 0.014,
            marginLeft: width * 0.95,
            position: 'absolute',
        },
});

mapStateToProps = (state, props) => {
    return {
        info: state.tvviewReducer.tvdetail,
        isVisible: state.shareReducer.isVisible
    }
}

mapDispatchToProps = (dispatch) => {
    return bindActionCreators(action, dispatch);

}

export default connect(mapStateToProps, mapDispatchToProps)(Tv_detail);