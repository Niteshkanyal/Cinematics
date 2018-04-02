
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  DrawerLayoutAndroid,
  TouchableHighlight,
  Dimensions,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  AsyncStorage

} from 'react-native';
const imgPath = "https://image.tmdb.org/t/p/w500/";
import {Router,Scene,Stack,Actions} from 'react-native-router-flux'

var {width} = Dimensions.get('window');
var {height}=Dimensions.get('window');
import Icon from 'react-native-vector-icons/FontAwesome'
import Image from 'react-native-image-progress'
import * as action from '../../actions/personAction';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


class Movies extends Component{
  state = {
      isLoading:true,

  }
  componentDidMount = () => {
    this.props.personmovieFetch(this.props.item.id);
}
componentWillReceiveProps = (nextProps) => {
    if (this.props.movie != nextProps.movie)
        this.setState({ isLoading: false });
}
   


  render() {
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, marginTop:100}}>
          <ActivityIndicator/>
        </View>
      )
    }
    return (
      <View style={{flex:1,flexDirection:'column'}}>
      <FlatList
        numColumns={3}
        data={this.props.movie}
        keyExtractor={(x, i) => i}
        renderItem={({item}) =>
        <TouchableOpacity onPress={()=>{ Actions.Movie_detail({ item: item })}}>
          <View style={{height:height*0.32,flexDirection:'column',marginTop:height*0.015,marginLeft:width*0.03,width:width*0.294,backgroundColor:'#d7d7d7',marginBottom:width*0.02}}>
              <View style={{height:height*0.25}}>
                   <Image indicator={ActivityIndicator} source={{ uri: imgPath + item.poster_path }} style={{ width:width*0.294, height:height*0.24}} />
              </View>
              <View style={{height:height*0.05,flexWrap:'wrap'}}><Text style={{color:'black',fontSize:15,fontWeight:'bold',textAlign:'center',padding:3}} numberOfLines={2}>{item.original_title}</Text></View>
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
        movie: state.personReducer.personmovie,
    }
}

mapDispatchToProps = (dispatch) => {
    return bindActionCreators(action, dispatch);

}

export default connect(mapStateToProps, mapDispatchToProps)(Movies);