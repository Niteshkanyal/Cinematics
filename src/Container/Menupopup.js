
import React, { Component } from 'react';
import {
	Menu,
	MenuOptions,
	MenuOption,
	MenuTrigger
} from 'react-native-popup-menu';
import {
    Dimensions,
    Linking,
    Text
} from 'react-native';
var { width } = Dimensions.get('window');
var { height } = Dimensions.get('window');
import Icon from 'react-native-vector-icons/FontAwesome';
export default class Menupopup extends Component {
	render() {
		return (
			<Menu
				style={{
					flex: 0.1,
					justifyContent: 'center',
					alignItems: 'center'
				}}
			>
				<MenuTrigger>
					<Text style={{fontSize:22,zIndex:100}}>click jufs jlsd </Text>
				</MenuTrigger>
				<MenuOptions style={{ padding: 10 }}>
					<MenuOption onSelect={() => alert('Save')} text="Google Play Store" />
					<MenuOption onSelect={() => alert('Tmdb')} text="View on Tmdb" />
					<MenuOption onSelect={() => alert('IMDb')} text="View on IMDb" />
					<MenuOption
						onSelect={() => alert('Join')}
						text="Join the discussion"
					/>
				</MenuOptions>
			</Menu>
		)
  	}
}