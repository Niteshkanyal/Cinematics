import React, { Component } from "react";
import {
	StyleSheet,
	Text,
	View,
	Dimensions,
	ActivityIndicator,
	FlatList,
	Image,
	TouchableOpacity,
} from "react-native";
import { Actions } from "react-native-router-flux";
let { height, width } = Dimensions.get("window");
import Icon from "react-native-vector-icons/FontAwesome";
import { API } from "../../constants/const";

export default class Actor_search extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<View style={styles.container}>
				<FlatList
					numColumns={3}
					data={this.props.data.person}
					keyExtractor={(x, i) => i}
					renderItem={({ item }) =>
						<TouchableOpacity onPress={() => { Actions.Person_detail({ item: item }); }}>
							<View style={styles.flatlist_frame}>
								<View style={styles.image_view}>
									<Image source={(item.profile_path ? { uri: API.IMGPATH + item.profile_path } : require("../../images/p.jpeg"))} style={styles.image} />
								</View>
								<View style={styles.text_view}><Text style={styles.text} numberOfLines={2}>{item.name}</Text></View>
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
    },
	flatlist_frame:
    {
    	height: height * 0.32,
    	flexDirection: "column",
    	marginTop: height * 0.015,
    	marginLeft: width * 0.03,
    	width: width * 0.294,
    	backgroundColor: "#d7d7d7",
    	marginBottom: width * 0.02,
    },
	image_view:
    {
    	height: height * 0.25,
    	overflow: "hidden",
    },
	image:
    {
    	width: width * 0.294,
    	height: height * 0.24,
    },
	text_view:
    {
    	height: height * 0.05,
    	flexWrap: "wrap",
    },
	text:
    {
    	color: "black",
    	fontSize: 15,
    	textAlign: "center",
    	padding: 3,
    },

});
