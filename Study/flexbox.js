import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

const App: () => React$Node = () => {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.left}></View>
                <View style={styles.right}>
                    <View style={styles.rightTop}></View>
                    <View style={styles.rightBottom}></View>
                </View>
            </View>
        </>
    );
};

class main extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.Nav}>
                    <Text>NavBar</Text>
                </View>
                <View style={styles.body}>
                    <View style={styles.left}></View>
                    <View style={styles.right}>
                        <View style={styles.rightTop}></View>
                        <View style={styles.rightBottom}></View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    Nav: {
        flex: 1,
        //height: 80,
        justifyContent: 'center', //수직정렬 위치
        alignItems: 'center', //수평정렬 위치
        backgroundColor: 'gray',
    },
    body: {
        flex: 9,
        flexDirection: 'row',
    },
    left: {
        flex: 1,
        backgroundColor: 'red',
    },
    right: {
        flex: 1
    },
    rightTop: {
        flex: 1,
        backgroundColor: 'blue',
    },
    rightBottom: {
        flex: 1,
        backgroundColor: 'yellow',
    }

});

export default main;
