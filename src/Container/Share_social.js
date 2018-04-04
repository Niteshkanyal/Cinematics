import React, { Component } from "react";
import { SOCIAL } from '../constants/const';
import Share, { ShareSheet, Button } from "react-native-share"
import {
    StyleSheet,
    Text,
    ActivityIndicator,
    FlatList,
    Linking
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as action from '../actions/moviedetailAction';
class Share_social extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: false,
        }
    }

    render() {
        console.log("myprops: ", this.props.isVisible);
        return (
            <ShareSheet
                visible={this.props.isVisible}
            >
                <Button
                    iconSrc={{ uri: SOCIAL.TWITTER_ICON }}
                    onPress={() => {
                        this.props.toggeleShareButton();
                        Linking.openURL('http://twitter.com')
                    }}
                >
                    Twitter
              </Button>
                <Button
                    iconSrc={{ uri: SOCIAL.FACEBOOK_ICON }}
                    onPress={() => {
                        this.props.toggeleShareButton();
                        Linking.openURL('http://facebook.com')
                    }}
                >
                    Facebook
              </Button>
                <Button
                    iconSrc={{ uri: SOCIAL.WHATSAPP_ICON }}
                    onPress={() => {
                        this.props.toggeleShareButton();
                        Linking.openURL('http://whatsapp.com')
                    }}
                >
                    Whatsapp
              </Button>
                <Button
                    iconSrc={{ uri: SOCIAL.GOOGLE_PLUS_ICON }}
                    onPress={() => {
                        this.props.toggeleShareButton();
                        Linking.openURL('http://googleplus.com')
                    }}
                >
                    Google +
              </Button>
                <Button
                    iconSrc={{ uri: SOCIAL.EMAIL_ICON }}
                    onPress={() => {
                        this.props.toggeleShareButton();
                        Linking.openURL('http://gmail.com')
                    }}
                >
                    Email
              </Button>
            </ShareSheet>
        );
    }
}
mapStateToProps = (state, props) => {
    return {
        isVisible: state.shareReducer.isVisible
    }
}

mapDispatchToProps = (dispatch) => {
    return bindActionCreators(action, dispatch);

}

export default connect(mapStateToProps, mapDispatchToProps)(Share_social);