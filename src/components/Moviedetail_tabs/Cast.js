
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  DrawerLayoutAndroid,
  TouchableHighlight,
  Dimensions,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';

import {MOVIEVIEW,API} from '../../constants/const';
import {Router,Scene,Stack,Actions} from 'react-native-router-flux'

var {width} = Dimensions.get('window');
var {height}=Dimensions.get('window');
import Image from 'react-native-image-progress'
import Icon from 'react-native-vector-icons/FontAwesome'
import * as myActions from "../../actions/moviedetailAction.js";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

 class Cast extends Component{
  state = {
     cast_movie:[],
      isLoading: true,

  }
  componentWillReceiveProps = nextProps => {
    if (nextProps.moviecast != this.props.moviecast) {
      this.setState({
        moviecast: nextProps.moviecast,
        isLoading:false
      });
    }
  };
  componentDidMount = () => {
    this.props.getmovieCast(this.props.item.id);
  };
  
  render() {
    if(this.state.isLoading){
      return(
        <View style={{flex: 1,marginTop:100}}>
          <ActivityIndicator/>
        </View>
      )
    }
    return (
      <View style={{flex:1,flexDirection:'row'}}>
      <FlatList
        numColumns={1}
        data={this.props.moviecast}
        keyExtractor={item => item.id.toString()}
        key={`${
          this.props
            ? item => item.id.toString()
            : item => item.id * (0.1).toString()
        }`}
        renderItem={({item}) =>
        <TouchableOpacity onPress={()=>{ Actions.Person_detail({ item: item })}}>
          <View style={{flex:1,flexDirection:'row',marginTop:height*0.024,height:height*0.132,borderWidth:0.3,borderBottomColor:'gray',borderLeftColor:'white',borderTopColor:'white',borderRightColor:'white',backgroundColor:'white'}}>
              <View style={{flex:0.03}}></View>
              <View style={{flex:0.3,borderRadius:100,marginTop:width*0.01}}>
                   <Image borderRadius={100} indicator={ActivityIndicator} source={{ uri: API.IMGPATH + item.profile_path }} style={{ width:80, height:78,borderRadius:100}} />
              </View>
              <View style={{flex:0.02}}></View>
              <View style={{flex:0.3}}><Text style={{color:'black',fontWeight:'bold',padding:height*0.01}}>{item.name}</Text></View>
              <View style={{flex:0.05}}></View>
              <View style={{flex:0.25}}><Text style={{padding:height*0.008,fontStyle:'italic'}}>as {item.character}</Text></View>
              <View style={{flex:0.05}}></View>
          </View>
        </TouchableOpacity>

          }
      />
      </View>
    );
  }
}

mapStateToProps = (state, props) => {
    return {
      moviecast: state.movieviewReducer.moviecast
    };
  };
  
  mapDispatchToProps = dispatch => {
    return bindActionCreators(myActions, dispatch);
  };
export default connect(mapStateToProps, mapDispatchToProps)(Cast);