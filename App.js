import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Home from "./ticketNew/Home";


export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.Appjs}>
        <Home/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Appjs: {
    flex: 1,
  },

});
