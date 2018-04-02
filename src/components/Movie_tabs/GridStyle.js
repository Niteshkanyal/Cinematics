
import {MOVIEVIEW,API} from '../../constants/const';
import Icon from 'react-native-vector-icons/FontAwesome'
import { View, TextInput, AsyncStorage, Text, TouchableOpacity, ActivityIndicator, FlatList, Dimensions } from 'react-native'
import { Actions } from 'react-native-router-flux'
var { width } = Dimensions.get('window');
var { height } = Dimensions.get('window');
import Image from 'react-native-image-progress'
import ProgressBar from 'react-native-progress/Bar'
// import * as myActions from "../../actions/";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import React, { Component } from "react";
export default class GridStyle extends Component {
    detail =(item)=>
    {
      AsyncStorage.setItem('head',JSON.stringify(item))
      Actions.Movie_detail();
    }

  render() {
    return (
        <View style={{flex:1,flexDirection:'column',backgroundColor:'#f7faff'}}>
            <FlatList
            numColumns={3}
            keyExtractor={item => item.id.toString()}
            key={`${
              this.props
                ? item => item.id.toString()
                : item => item.id * (0.1).toString()
            }`}
            data={this.props.list}
            renderItem={({item}) =>
                <TouchableOpacity onPress={()=>{ Actions.Movie_detail({ item: item })}} >
                    <View style={{height:height*0.33,width:width*0.3,marginTop:width*0.02,marginLeft:width*0.026,backgroundColor:'#d7d7d7',flexDirection:'column',marginBottom:height*0.008}}>
                    <View style={{flex:0.8}}>
                        <Image source={{ uri:  API.IMGPATH+ item.poster_path }} style={{ width:width*0.3, height:height*0.25}} />
                    </View>
                    <View style={{flex:0.2,flexDirection:"row"}}>
                        <View style={{flex:0.8,flexWrap:'wrap'}}>
                        <Text style={{color:'#1c1c1c',marginLeft:width*0.015}}numberOfLines={2}>{item.title}</Text>
                        </View>
                        <View style={{flex:0.2}}>
                        <Icon name='ellipsis-v' style={{color:'black', fontSize:17,marginTop:height*0.007,marginLeft:width*0.03}}/>
                        </View>
                    </View>
                    </View>
                </TouchableOpacity>
                }
            />
      </View>
        
    );
  }
}
