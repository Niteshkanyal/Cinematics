
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {Actions} from 'react-native-router-flux'
let {width,height} = Dimensions.get('window');
import Image from 'react-native-image-progress'
import Icon from 'react-native-vector-icons/FontAwesome'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {API} from '../../constants/const';
import * as myActions from "../../actions/moviedetailAction.js";

 class Movie_cast extends Component{
  constructor(props)
  {
    super(props)
    state = {
      isLoading: true,
    }
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
          <View style={styles.container}>
              <View style={{flex:0.03}}></View>
              <View style={{flex:0.3,borderRadius:100,marginTop:width*0.01}}>
                   <Image borderRadius={100} indicator={ActivityIndicator} source={{ uri: API.IMGPATH + item.profile_path }} style={styles.image} />
              </View>
              <View style={{flex:0.02}}></View>
              <View style={{flex:0.3}}>
                <Text style={{color:'black',fontWeight:'bold',padding:height*0.01}}>{item.name}</Text>
              </View>
              <View style={{flex:0.05}}></View>
              <View style={{flex:0.25}}>
                <Text style={{padding:height*0.008,fontStyle:'italic'}}>as {item.character}</Text>
              </View>
              <View style={{flex:0.05}}></View>
          </View>
        </TouchableOpacity>
          }
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:
  {
    flex:1,
    flexDirection:'row',
    marginTop:height*0.024,
    height:height*0.132,
    borderWidth:0.3,
    borderBottomColor:'gray',
    borderLeftColor:'white',
    borderTopColor:'white',
    borderRightColor:'white',
    backgroundColor:'white',
  },
  image:
  {
    width:80, 
    height:78,
    borderRadius:100,
  },

});

mapStateToProps = (state, props) => {
    return {
      moviecast: state.movieviewReducer.moviecast
    };
  };
  
  mapDispatchToProps = dispatch => {
    return bindActionCreators(myActions, dispatch);
  };
export default connect(mapStateToProps, mapDispatchToProps)(Movie_cast);