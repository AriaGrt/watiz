/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';

//Import of Components
import HomeScreen from './components/HomeScreen/HomeScreen';
import Camera from './components/Camera/Camera';

export default class App extends Component {
  render() {
      return (
        <Camera />
      );
  }
}












// const RootStack = StackNavigator(
//   {
//     HomeScreen: {
//       screen: HomeScreen
//     },
//     Capture: {
//       screen: Camera
//     }
//   },
//   {
//     initialRouteName: 'Capture',
//     navigationOptions: {
//       header: null
//     }
//   }
// );

