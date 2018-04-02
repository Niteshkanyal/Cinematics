

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
export default class ListStyle extends Component {


  render() {
    return (
        <View style={{flex:1,flexDirection:'column',backgroundColor:'#f7faff'}}>
            <FlatList
            numColumns={1}
            keyExtractor={item => item.id.toString()}
            key={`${
              this.props
                ? item => item.id.toString()
                : item => item.id * (0.1).toString()
            }`}
            data={this.props.list}
            renderItem={({item}) =>
                <TouchableOpacity onPress={()=>{ Actions.Tv_detail({ item: item })}}>
                    <View style={{height:height*0.22,width:width*0.95,marginTop:width*0.025,marginLeft:width*0.026,backgroundColor:'white',flexDirection:'row',borderWidth:0.3,borderBottomColor:'gray',borderLeftColor:'white',borderTopColor:'white',borderRightColor:'white'}}>
                    <View style={{flex:0.3}}>
                        <Image indicator={ActivityIndicator} source={{ uri: API.IMGPATH + item.poster_path }} style={{ width:width*0.25, height:height*0.2}} />
                    </View>
                    <View style={{flex:0.7,flexDirection:"column"}}>
                        <View style={{flex:0.1}}></View>
                        <View style={{flex:0.1}}><Text style={{fontSize:width*0.03,fontWeight:'bold',color:'black',marginLeft:width*0.018}}>{new Date(item.first_air_date).getFullYear()}</Text></View>
                        <View style={{flex:0.15,flexWrap:'wrap'}}>
                        <Text style={{color:'black',fontSize:width*0.04,marginLeft:width*0.015}} numberOfLines={1}>{item.name}</Text>
                        </View>
                        <View style={{flex:0.3,flexDirection:'row'}}>
                        <View style={{flex:0.2}}>
                            <Icon name='heart' style={{color:'red', fontSize:25,marginTop:height*0.0089,marginLeft:width*0.02}}/>
                        </View>
                        <View style={{flex:0.8}}>
                            <Text style={{marginTop:height*0.012}}>{item.vote_count}</Text>
                        </View>
                        </View>
                        <View style={{flex:0.35,flexDirection:'row'}}>
                        <View style={{flex:0.2}}>
                            <Icon name='imdb' style={{color:'#00984f', fontSize:35,marginTop:height*0.007,marginLeft:width*0.02}}/>
                        </View>
                        <View style={{flex:0.1}}><Text style={{fontSize:width*0.04,marginTop:height*0.02}}>{item.vote_average}</Text></View>
                        <View style={{flex:0.7}}></View>
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

