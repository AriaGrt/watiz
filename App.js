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
import Gallery from './components/Gallery/Gallery';

export default class App extends Component {
  render() {
     return <RootStack />;
  }
}

const RootStack = StackNavigator(
  {
    HomeScreen: {
      screen: HomeScreen
    },
    Capture: {
      screen: Camera
    },
    Gallery: {
      screen: Gallery
    }
  },
  {
    initialRouteName: 'HomeScreen',
    navigationOptions: {
      header: null
    }
  }
);

