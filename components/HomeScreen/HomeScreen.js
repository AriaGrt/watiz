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
                <Text style={[styles.welcomeTexts, styles.first]}>Welcome On this new Watiz App</Text>
                <Text style={styles.welcomeTexts}>What Would you like to do?</Text>
                {/* <View style={styles.buttonsContainer}>
                    <Button
                        onPress={() =>
                            navigate('Capture')
                        }
                        title="Take a picture"
                        color="#841584"
                    />
                    <Button
                        title="Access to gallery"
                        color="#841584"
                    />
                </View> */}
            </View>
        );
    }

}


