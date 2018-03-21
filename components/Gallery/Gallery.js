import React, { Component } from 'react'
import {
    View,
    Text,
    CameraRoll,
    ScrollView,
    TouchableHighlight,
    Image,
    Button,
    PermissionsAndroid
} from 'react-native'

import { styles } from './styles'

export default class Gallery extends Component {

    constructor(props) {
        super(props)
        this.state = {
            images: []
        }
        this.getPhotos()
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Text style={styles.title}>Your Images</Text>
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    {
                        this.state.images.map((image, i) => {
                            return (
                                <Image
                                    style={styles.image}
                                    key={i}
                                    source={{ uri: image.node.image.uri }}
                                />
                            )
                        })
                    }
                </ScrollView>
            </View>
        )
    }

    getPhotos = async function () {
        await this.requestGalleryPermission()
        CameraRoll.getPhotos({
            first: 20,
            assetType: 'Photos'
        })
            .then(r => this.setState({ images: r.edges }))
    }

    requestGalleryPermission = async function () {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
                {
                    'title': 'Gallery',
                    'message': 'Watiz needs your authorization ' +
                        'so you can read awesome pictures.'
                }
            )
        } catch (err) {
            console.warn(err)
        }
    }
} 