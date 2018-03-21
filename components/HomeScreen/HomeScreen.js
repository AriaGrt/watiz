'use strict';

import React, { Component } from 'react';
import {
    Text,
    View,
    Button
} from 'react-native';
import { styles } from './styles'

export default class Camera extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <View style={styles.textsContainer}>
                    <Text style={styles.text1}>Welcome On this new Watiz App</Text>
                    <Text style={styles.text2}>What Would you like to do?</Text>
                </View>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonsWrapper}>
                        <Button
                            onPress={() =>
                                navigate('Capture')
                            }
                            title="Camera"
                            color='darkorange'
                        />
                    </View>
                    <View style={styles.buttonsWrapper}>
                        <Button
                            onPress={() =>
                                navigate('Gallery')
                            }
                            title="Gallery"
                            color='darkorange'
                        />
                    </View>
                </View>
            </View>
        );
    }

}


