'use strict';
import React, { Component } from 'react';
import {
    AppRegistry,
    Dimensions,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    PermissionsAndroid,
    CameraRoll
} from 'react-native';
import { RNCamera } from 'react-native-camera';
import Icon from 'react-native-vector-icons/MaterialIcons';

//importing styles
import { styles } from './styles';

//importing components
import SideMenu from '../SideMenu/SideMenu';

export default class Camera extends Component {

    constructor(props) {
        super(props)

        this.state = {
            sideMenuDisplayed: false
        }

        this.requestCameraRollPermission = this.requestCameraRollPermission.bind(this)
        this.takePicture = this.takePicture.bind(this)
    }

    componentDidMount = () => {
        this.requestCameraRollPermission()
    };


    render() {
        return (
            <View style={styles.container} >
                <RNCamera
                    ref={ref => {
                        this.camera = ref;
                    }}
                    style={styles.preview}
                    type={RNCamera.Constants.Type.back}
                    flashMode={RNCamera.Constants.FlashMode.on}
                    permissionDialogTitle={'Permission to use camera'}
                    permissionDialogMessage={'We need your permission to use your camera phone'}
                >
                    <View style={styles.header}>
                        <View style={styles.topWrapper}>
                            <TouchableOpacity style={styles.touchableOpacityMenuIcon} onPress={this.displayMenu}>
                                <Icon name="menu" style={styles.menuIcon} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.snapWrapper}>
                        <TouchableOpacity style={styles.snap} onPress={this.takePicture} />
                    </View>
                    <View style={styles.galleryWrapper}>
                        <TouchableOpacity style={styles.toGalleryTouchable} onPress={console.log('going to library')}>
                            <Icon name="collections" color="#4F8EF7" style={styles.toGallery} />
                        </TouchableOpacity>
                    </View>
                </RNCamera>
                {this.manipulateSideMenu()}

            </View>
        );
    }

    takePicture = async function () {
        if (this.camera) {
            const options = { quality: 0.5, base64: true };
            const data = await this.camera.takePictureAsync(options)
            CameraRoll.saveToCameraRoll(data.uri)
        }
    };

    requestCameraRollPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
            )
        }
        catch (err) {
            console.warn(err)
        }
    }

    manipulateSideMenu = () => {
        if (this.state.sideMenuDisplayed) {
            return <SideMenu />
        }
    };

    displayMenu = () => {
        this.setState({
            sideMenuDisplayed: true
        })
    };


}
