import Icon from "react-native-vector-icons/FontAwesome";
import { View,StyleSheet, Text, TouchableOpacity, ActivityIndicator, FlatList, Dimensions } from "react-native";
import { Actions } from "react-native-router-flux";
let { width, height } = Dimensions.get("window");
import Image from "react-native-image-progress";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import React, { Component } from "react";
import { API } from "../../constants/const";

export default class GridStyle extends Component {
	render() {
		return (
			<View style={styles.container}>
				<FlatList
					numColumns={3}
					keyExtractor={item => item.id.toString()}
					key={`${
						this.props
							? item => item.id.toString()
							: item => item.id * (0.1).toString()
					}`}
					data={this.props.list}
					renderItem={({ item }) =>
						<TouchableOpacity onPress={() => { Actions.Tv_detail({ item: item }); }} >
							<View style={styles.flatlist_frame}>
								<View style={styles.image_view}>
									<Image source={{ uri: API.IMGPATH + item.poster_path }} style={styles.image} />
								</View>
								<View style={styles.inner_container}>
									<View style={styles.text_view}>
										<Text style={styles.text} numberOfLines={2}>{item.name}</Text>
									</View>
									<View style={styles.icon_view}>
										<Icon name='ellipsis-v' style={styles.icon} />
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

const styles = StyleSheet.create({
    container:
      {
        flex: 1, 
        flexDirection: "column",
         backgroundColor: "#f7faff", 
      },
      flatlist_frame:
      {
        height: height * 0.33, 
        width: width * 0.3, 
        marginTop: width * 0.02, 
        marginLeft: width * 0.026, 
        backgroundColor: "#d7d7d7", 
        flexDirection: "column", 
        marginBottom: height * 0.008 ,
      },
      image_view:
      {
        flex: 0.8 ,
      },
      image:
      {
        width: width * 0.3, 
        height: height * 0.25 ,
      },
      inner_container:
      {
        flex: 0.2, 
        flexDirection: "row",
      },
      text_view:
      {
        flex: 0.8, 
        flexWrap: "wrap" ,
      },
      text:
      {
        color: "#1c1c1c", 
        marginLeft: width * 0.015,
      },
      icon_view:
      {
        flex: 0.2 ,
      },
      icon:
      {
        color: "black", 
        fontSize: 17, 
        marginTop: height * 0.007, 
        marginLeft: width * 0.03,
      },
  });