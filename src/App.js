import React, { Component } from "react";
import { StyleSheet } from "react-native";
import Router from "./routes.js";
import { Provider } from "react-redux";
import store from "./store/";
import { MenuProvider } from 'react-native-popup-menu'
export default class App extends Component {
  render() {
    return (
      <MenuProvider>
        <Provider store={store}>
          <Router />
        </Provider>
      </MenuProvider>
    );
  }
}