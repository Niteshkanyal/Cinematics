
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  DrawerLayoutAndroid,
  TouchableHighlight,
  Dimensions,
  ScrollerView,
  Image,
  AsyncStorage,ScrollView
} from 'react-native';
import {Router,Scene,Stack} from 'react-native-router-flux'

var {width} = Dimensions.get('window');
var {height}=Dimensions.get('window');
import Icon from 'react-native-vector-icons/FontAwesome'


export default class Info_detail extends Component{

  render() {
    return (
      <View style={{flex:1,flexDirection:'column',backgroundColor:'#f7faff'}}>
        <ScrollView>
        <View style={{flex:0.1,marginTop:height*0.02}}></View>
        <View style={{flex:0.24,flexDirection:'row'}}>
          <View style={{flex:0.05}}></View>
          <View style={{flex:0.12}}>
            <Icon name='star' style={{color:'#b6e5d9', fontSize:35,marginTop:height*0.007,marginLeft:width*0.02}}/>
            <Text style={{color:'black',textAlign:'center',fontWeight:'bold'}}>Rate</Text>
          </View>
          <View style={{flex:0.036}}></View>
          <View style={{flex:0.12}}>
            <Image source={require('../../images/tmdb1.png')} style={{height:height*0.062,width:width*0.11,resizeMode:'stretch'}}/>
            <Text style={{fontSize:13,color:'black',textAlign:'center',fontWeight:'bold'}}>{this.props.info.vote_average}</Text>
          </View>
          <View style={{flex:0.036}}></View>
          <View style={{flex:0.12}}>
              <Image source={require('../../images/imdb.png')}style={{height:height*0.062,width:width*0.11,resizeMode:'stretch'}}/>
              <Text style={{fontSize:13,color:'black',textAlign:'center',fontWeight:'bold'}}>7.8</Text>
          </View>
          <View style={{flex:0.043}}></View>
          <View style={{flex:0.116}}>
              <Image source={require('../../images/apple.png')}style={{height:height*0.062,width:width*0.11,resizeMode:'stretch'}}/>
              <Text style={{fontSize:13,color:'black',textAlign:'center',fontWeight:'bold'}}>76%</Text>
          </View>
          <View style={{flex:0.033}}></View>
          <View style={{flex:0.12}}>
              <Image source={require('../../images/popcorn.jpeg')}style={{height:height*0.063,width:width*0.12,resizeMode:'stretch'}}/>
              <Text style={{fontSize:13,color:'black',textAlign:'center',fontWeight:'bold'}}>82%</Text>
          </View>
          <View style={{flex:0.036}}></View>
          <View style={{flex:0.12,backgroundColor:'#66cc33',height:height*0.069,alignItems:'center'}}>
            <Text style={{color:'white',fontSize:14,padding:height*0.016}}>66</Text>
          </View>
          <View style={{flex:0.05}}></View>
        </View>
        <View style={{flex:0.2}}></View>
        <View style={{flex:0.5,flexDirection:'column'}}>
          <View style={{flex:0.3,marginLeft:width*0.044,marginTop:height*0.045,marginRight:width*0.02}}><Text style={{fontSize:width*0.035,color:'#010100'}}>{this.props.info.overview}</Text></View>
          <View style={{flex:0.05}}></View>
          <View style={{flex:0.25,padding:20}}>
            <Text style={{padding:2}}><Text style={{color:'black',fontWeight:'bold'}}>Release Date: </Text>{this.props.info.release_date}</Text>
            <Text style={{padding:2}}><Text style={{color:'black',fontWeight:'bold'}}>DVD Release Date: </Text>N/A</Text>
            <Text style={{padding:2}}><Text style={{color:'black',fontWeight:'bold'}}>Directed By: </Text>{this.props.info.revenue}</Text>
            <Text style={{padding:2}}><Text style={{color:'black',fontWeight:'bold'}}>Budget: </Text>${this.props.info.budget}</Text>
            <Text style={{padding:2}}><Text style={{color:'black',fontWeight:'bold'}}>Revenue: </Text>${this.props.info.revenue}</Text>
          </View>
          <View style={{flex:0.7}}></View>
        </View>
        </ScrollView>
      </View>
    );
  }
}
