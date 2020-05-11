import React, { Component } from 'react';
import User from './../UI/user.js'
import NavBar from './../UI/navBar.js'
import ButtonGroup from './../UI/BottonGroup.js'
import Tabs from './../UI/Tabs.js'

import {
    StyleSheet,
    View,
    Text,
    Image,
} from 'react-native';

class main extends Component {
    render() {
        return (
            <View style={styles.container}>
                <NavBar />
                <User />
                <View style={{ height: 30 }}></View>
                <ButtonGroup />
                <View style={{ flex: 1 }}></View>
                <Tabs />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    }
});

export default main;

