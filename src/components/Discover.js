import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  DrawerLayoutAndroid,
  TouchableHighlight,
  Dimensions,
  AsyncStorage,
  ActivityIndicator,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import ScrollableTabView ,{ScrollableTabBar}from 'react-native-scrollable-tab-view'
import {Router,Actions,Scene,Stack} from 'react-native-router-flux'
import Modal from 'react-native-modal'
var {width} = Dimensions.get('window');
var {height}=Dimensions.get('window');
 import SideBarMenu from './SideBarMenu.js'
import Icon from 'react-native-vector-icons/FontAwesome'
import {API} from '../constants/const'
import Image from 'react-native-image-progress'
import * as action from '../actions/discoverAction';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Radio, List, ListItem, Right } from "native-base";
class Discover extends Component{
  constructor() {
          super();
          this.openDrawer = this.openDrawer.bind(this);
          this.state = {
               isLoading: true,
               listflip:true,
               selectedItem:'popularity.desc',
               isVisible:false,
         }
      }

openDrawer() {
    this.drawer.openDrawer(this.state.selectedItem);
}

   flipit =()=>
   {
       this.setState({listflip:!this.state.listflip});
   }
   
   componentWillReceiveProps = nextProps => {
    if (nextProps.info != this.props.info) {
      this.setState({
        info: nextProps.info,
        isLoading:false
      });
    }
  };
  componentDidMount = () => {
    this.props.getDiscover(this.state.selectedItem);
  };

  render() {
    console.log("data of discover",this.props.info)
    if(this.state.isLoading){
      return(
        <View style={{flex: 1,marginTop:height*0.48}}>
          <ActivityIndicator/>
        </View>
      )
    }


    let html_='';
    if(this.state.listflip)
    {
      html_=(
        <View style={{flex:1,flexDirection:'column',backgroundColor:'#f7faff'}}>
          <FlatList
            numColumns={1}
            keyExtractor={item => item.id.toString()}
            key={`${
              this.props
                ? item => item.id.toString()
                : item => item.id * (0.1).toString()
            }`}
            data={this.props.info}
            renderItem={({item}) =>
              <TouchableOpacity onPress={()=>{ Actions.Movie_detail({ item: item })}}>
                  <View style={{height:height*0.22,width:width*0.95,marginTop:width*0.025,marginLeft:width*0.026,backgroundColor:'white',flexDirection:'row',borderWidth:0.3,borderBottomColor:'gray',borderLeftColor:'white',borderTopColor:'white',borderRightColor:'white'}}>
                    <View style={{flex:0.3}}>
                        <Image indicator={ActivityIndicator} source={{ uri: API.IMGPATH+ item.poster_path }} style={{ width:width*0.25, height:height*0.2}} />
                    </View>
                    <View style={{flex:0.7,flexDirection:"column"}}>
                      <View style={{flex:0.1}}></View>
                      <View style={{flex:0.1}}><Text style={{fontSize:width*0.03,fontWeight:'bold',color:'black',marginLeft:width*0.018}}>{new Date(item.release_date).getFullYear()}</Text></View>
                      <View style={{flex:0.15,flexWrap:'wrap'}}>
                        <Text style={{color:'black',fontSize:width*0.04,marginLeft:width*0.015}} numberOfLines={1}>{item.title}</Text>
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


      )
    }else{
      html_=(
        <View style={{flex:1,flexDirection:'column',backgroundColor:'#f7faff'}}>
          <FlatList
            numColumns={3}
            keyExtractor={item => item.id.toString()}
            key={`${
              this.props
                ? item => item.id*(0.2).toString()
                : item => item.id * (0.8).toString()
            }`}
            data={this.props.info}
            renderItem={({item}) =>
              <TouchableOpacity onPress={()=>{ Actions.Movie_detail({ item: item })}}>
                  <View style={{height:height*0.33,width:width*0.3,marginTop:width*0.02,marginLeft:width*0.026,backgroundColor:'#d7d7d7',flexDirection:'column',marginBottom:height*0.008}}>
                    <View style={{flex:0.8}}>
                        <Image source={{ uri: API.IMGPATH + item.poster_path }} style={{ width:width*0.3, height:height*0.25}} />
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


      )
    }

    return (
    <DrawerLayoutAndroid
               drawerWidth={300}
               ref={(_drawer) => this.drawer = _drawer}
               drawerPosition={DrawerLayoutAndroid.positions.Left}
               renderNavigationView={() => <SideBarMenu/>}>

      <View style={{flex:1,flexDirection:'column'}}>
        <View style={{flex:0.1,flexDirection:'row',backgroundColor:'#333333'}}>
          <View>
            <Icon name='bars' style={{color:'#f7faff', fontSize:23,marginLeft:width*0.05,marginTop:height*0.028}} onPress={this.openDrawer}/>
          </View>
          <View>
            <Text style={{color:'#f7faff',fontSize:width*0.05,marginLeft:width*0.2,marginTop:height*0.026}}>Discover</Text>
          </View>
          <View>
            <Icon name='filter' style={{color:'#f7faff', fontSize:23,marginLeft:width*0.2,marginTop:height*0.028}}  onPress={() => {  this.setModalVisible(true) }}/>

          </View>
          <View>
            <Icon name='sort' style={{color:'#f7faff', fontSize:23,marginLeft:width*0.065,marginTop:height*0.028}} onPress={() => {   this.setState({isVisible:!this.state.isVisible}); }}/>
          </View>
          <View>
            <Icon name={this.state.listflip?'table':'th-list'}  style={{color:'#f7faff', fontSize:23,marginLeft:width*0.07,marginTop:height*0.028}} onPress={()=>{this.flipit()}}/>
          </View>

        </View>

          <Modal
            isVisible={this.state.isVisible}
            onBackdropPress={() => this.setState({ isVisible: false })}
          >
            <View style={{ backgroundColor: "#fff", flex: 0.6 }}>
              <Text
                style={{
                  color: "#000",
                  fontSize: 16,
                  fontWeight: "bold",
                  padding: 15
                }}
              >
                Apply Sorting By
              </Text>
              <List>
                <ListItem
                  onPress={ async () => {
                    await this.setState({
                      selectedItem: "original_title.desc",
                      isVisible: false,
                      isLoading: true
                    });
                    this.props.getDiscover(this.state.selectedItem);
                  }}
                >
                  <Radio
                    selected={this.state.selectedItem == "original_title.desc"}
                  />
                  <Text style={{ paddingLeft: 10,color: "#000"}}>Title</Text>
                </ListItem>
                <ListItem
                  onPress={() => {
                    this.setState({
                      selectedItem: "popularity.desc",
                      isVisible: false,
                      isLoading: true
                    });
                    this.props.getDiscover(this.state.selectedItem);
                  }}
                >
                  <Radio
                    selected={this.state.selectedItem == "popularity.desc"}
                  />
                  <Text style={{paddingLeft: 10,color: "#000"}}>Popularity</Text>
                </ListItem>
                <ListItem
                  onPress={() => {
                    this.setState({
                      selectedItem: "vote_average.desc",
                      isVisible: false,
                      isLoading: true
                    });
                    this.props.getDiscover(this.state.selectedItem);
                  }}
                >
                  <Radio
                    selected={this.state.selectedItem == "vote_average.desc"}
                  />
                  <Text style={{paddingLeft: 10,color: "#000"}}>Rating</Text>
                </ListItem>
                <ListItem
                  onPress={() => {
                    this.setState({
                      selectedItem: "release_date.desc",
                      isVisible: false,
                      lisLoading: true
                    });
                    this.props.getDiscover(this.state.selectedItem);
                    console.log('hello')
                  }}
                >
                  <Radio
                    selected={this.state.selectedItem == "release_date.desc"}
                  />
                  <Text style={{paddingLeft: 10,color: "#000"}}>Release Date</Text>
                </ListItem>
                <ListItem
                  onPress={() => {
                    this.setState({
                      selectedItem: "revenue.desc",
                      isVisible: false,
                      isLoading: true
                    });
                    this.props.getDiscover(this.state.selectedItem);
                  }}
                >
                  <Radio selected={this.state.selectedItem == "revenue.desc"} />
                  <Text style={{paddingLeft: 10,color: "#000"}}>Revenue</Text>
                </ListItem>
              </List>
              <Text
                style={{
                  textAlign: "right",
                  color: "green",
                  fontSize: 12,
                  marginRight: 10
                }}
                onPress={() => this.setState({ isVisible: false })}
              >
                CANCEL
              </Text>
            </View>
          </Modal>

        <View style={{flex:0.9,flexDirection:'column'}}>
        {html_}
        </View>
      </View>
     </DrawerLayoutAndroid>

    );
  }
}

mapStateToProps = (state, props) => {
    return {
        info: state.discoverReducer.data,
    }
}

mapDispatchToProps = (dispatch) => {
    return bindActionCreators(action, dispatch);

}

export default connect(mapStateToProps, mapDispatchToProps)(Discover);