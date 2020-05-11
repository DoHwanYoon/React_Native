import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

export default class NavBar extends Component {
    render() {
        return (
            <View style={styles.NavBar}>
                <Text style={styles.navBarText}>More</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    NavBar: {
        height: 60,
        backgroundColor: '#FF6E40',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    navBarText: {
        fontSize: 30,
        //textAlign: 'center',
        color: 'white',
        margin: 10
    }
});