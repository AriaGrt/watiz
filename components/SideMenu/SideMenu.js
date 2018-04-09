import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { styles } from './styles';

export default class SideMenu extends Component {
    render() {
        return (
            <View style={{ width: '100%', height: '100%', zIndex: 1000 }}>
                <View style={styles.container}>
                    <View style={styles.wrapper}>
                        <View style={styles.uselessItem}>
                        </View>
                        <View style={styles.menuItemWrapper}>
                            <Text style={styles.itemTitle}>Mon Historique</Text>
                            <Icon name="search" style={styles.itemIcon} />
                        </View>
                        <View style={styles.menuItemWrapper}>
                            <Text style={styles.itemTitle}>Mes Favoris</Text>
                            <Icon name="star" style={styles.itemIcon} />
                        </View>
                        <View style={styles.menuItemWrapper}>
                            <Text style={styles.itemTitle}>Mes Albums</Text>
                            <Icon name="folder" style={styles.itemIcon} />
                        </View>
                        <View style={styles.menuItemWrapper}>
                            <Text style={styles.itemTitle}>Paramètres</Text>
                            <Icon name="settings" style={styles.itemIcon} />
                        </View>
                        <View style={styles.menuItemWrapper}>
                            <Text style={styles.itemTitle}>Crédits</Text>
                            <Icon name="info" style={styles.itemIcon} />
                        </View>
                        <View style={[styles.menuItemWrapper, { borderBottomWidth: 0 }]}>
                            <Text style={styles.itemTitle}>Contact</Text>
                            <Icon name="contact-phone" style={styles.itemIcon} />
                        </View>
                        <View style={styles.uselessItem}>
                            <View>
                                <Icon name="camera-alt" style={styles.cameraIcon} />
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}
