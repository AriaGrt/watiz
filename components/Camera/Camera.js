'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  Text,
  TouchableOpacity,
  View,
  CameraRoll,
  PermissionsAndroid

} from 'react-native';
import { RNCamera } from 'react-native-camera';

import { styles } from './styles'

export default class Camera extends Component {

  componentDidMount() {
    this.requestCameraPermission()
  }

  render() {
    return (
      <View style={styles.container}>
        <RNCamera
            ref={ref => {
              this.camera = ref;
            }}
            style = {styles.preview}
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.on}
            permissionDialogTitle={'Permission to use camera'}
            permissionDialogMessage={'We need your permission to use your camera phone'}
        />
        <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center',}}>
        <TouchableOpacity
            onPress={this.takePicture.bind(this)}
            style = {styles.capture}
        >
            <Text style={{fontSize: 14}}> SNAP </Text>
        </TouchableOpacity>
        </View>
      </View>
    );
  }

  takePicture = async function() {
    const { navigate } = this.props.navigation;
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options)
      CameraRoll.saveToCameraRoll(data.uri)
        .then(() => {
          navigate('HomeScreen')
        })
    }
  }

  requestCameraPermission = async function() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          'title': 'Camera Roll',
          'message': 'Watiz needs your authorization ' +
                     'so you can save awesome pictures.'
        }
      )
    } catch (err) {
      console.warn(err)
    }
  }
}

