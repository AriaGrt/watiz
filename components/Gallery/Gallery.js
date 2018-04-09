'use strict';

import React, { Component } from 'react';
import {
    View,
    Text,
    CameraRoll,
    ScrollView,
    TouchableHighlight
} from 'react-native';
import { styles } from './styles'

export default class Camera extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    {
                        this.state.photos.map((photos) => {
                            return (
                                <TouchableHighlight>
                                    <Image
                                        source={{ uri: photos.node.image.uri }}
                                    />
                                </TouchableHighlight>
                            )
                        })
                    }
                </ScrollView>
            </View>
        );
    }

    // Get Photos From Camera Roll
    async getCameraRoll() {
        CameraRoll.getPhotos({
            first: 20
        })
            .then(r => this.setState({ photos: r.edges }))
    }
}


