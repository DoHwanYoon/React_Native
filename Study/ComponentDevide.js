import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

class NavBar extends Component{
    render(){
        return(
            <View style={styles.nav}>
                <Text>NavBar</Text>
            </View>
        )
    }
}

class NavBar2 extends Component{
    render(){
        return(
            <View style={styles.nav}>
                <Text>NavBar2</Text>
            </View>
        )
    }
}

class Body extends Component{
    render(){
        return(
            <View style={styles.body}>
                <View style={styles.left}></View>
                <View style={styles.right}>
                    <View style={styles.rightTop}></View>
                    <View style={styles.rightBottom}></View>
                </View>
            </View>
        )
    }
}

class main extends Component{
    render(){
        return(
            <View style={styles.container}>
                <NavBar />
                <Body />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'column',
    },
    nav: {
        //flex:1,
        height: 50,
        justifyContent: 'center', //수직정렬 위치
        alignItems: 'center', //수평정렬 위치
        backgroundColor: 'gray',
    },
    body: {
        flex: 1,
        flexDirection: 'row',
    },
    left: {
        flex: 1,
        backgroundColor: 'red',
    },
    right:{
        flex:1
    },
    rightTop: {
        flex:1,
        backgroundColor: 'blue',
    },
    rightBottom: {
        flex:1,
        backgroundColor: 'yellow',
    }

});

export default main;

