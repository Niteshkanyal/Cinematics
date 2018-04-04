
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ActivityIndicator,
  FlatList,
} from 'react-native';
let {height,width} = Dimensions.get('window');
import Icon from 'react-native-vector-icons/FontAwesome'
import Image from 'react-native-image-progress'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as myActions from "../../actions/tvdetailAction.js";
import {API} from '../../constants/const';

 class Seasons extends Component{
   constructor(props)
   {
    super(props)
    state = {
      isLoading: true,
    }
   }

  componentWillReceiveProps = nextProps => {
    if (nextProps.tvseason != this.props.tvseason) {
      this.setState({
        tvseason: nextProps.tvseason,
        isLoading:false
      });
    }
  };
  componentDidMount = () => {
    this.props.gettvSeason(this.props.item.id);
  };


  render() {
      console.log(this.props.tvseason)
    if(this.state.isLoading){
      return(
        <View style={{flex: 1,marginTop:100}}>
          <ActivityIndicator/>
        </View>
      )
    }

      return(
        <View style={{flex:1,flexDirection:'column'}}>
        <FlatList
          numColumns={1}
          data={this.props.tvseason}
          keyExtractor={item => item.id.toString()}
          key={`${
            this.props
              ? item => item.id.toString()
              : item => item.id * (0.1).toString()
          }`}
          renderItem={({item}) =>
            <View style={{flex:1,flexDirection:'column',marginTop:height*0.02}}>
                <View style={{flex:0.1,flexDirection:'row'}}>
                  <View style={{flex:0.05}}></View>
                  <View style={{flex:0.3}}><Text style={{fontSize:17,fontWeight:'bold',color:'black'}}>SEASON {item.season_number}</Text></View>
                  <View style={{flex:0.3}}><Text style={{fontSize:14,fontWeight:'bold',color:'black'}}>{item.episode_count} episodes</Text></View>
                  <View style={{flex:0.3}}></View>
                </View>
                <View>
                   <Image indicator={ActivityIndicator} source={{ uri: API.IMGPATH + item.poster_path }} style={{marginLeft:width*0.05,height:height*0.3,width:width*0.9 }} />
                </View>

            </View>

            }
        />
        </View>
      );
    }
  }

  mapStateToProps = (state, props) => {
    return {
      tvseason: state.tvviewReducer.tvseason
    };
  };
  
  mapDispatchToProps = dispatch => {
    return bindActionCreators(myActions, dispatch);
  };
export default connect(mapStateToProps, mapDispatchToProps)(Seasons);