/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
//import { StackNavigator } from 'react-navigation';
//import Login from './App/components/Login';
import Routes from './App/config/Routes'

/*const Aplication = StackNavigator ({
  Home: {screen: Login},
},{
  navigationOptions: {
    header: false,
  }
});
*/

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Routes />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
