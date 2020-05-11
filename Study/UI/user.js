import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    Text,
    Image,
} from 'react-native';

export default class User extends Component {
    render() {
        return (
            <View style={styles.User}>
                <View style={{ height: 150, flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ width: 100, margin: 10 }}>
                        <View style={{ width: 100, height: 100 }}>
                            <Image source={require('./../UI/img/profile.png')} style={{ width: 100, height: 100 }} />
                        </View>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={{ fontSize: 30 }}>NicName</Text>
                        <Text style={{ color: 'gray' }}>Name / ID</Text>
                        <Text style={{ color: 'gray' }}>university studentNumber</Text>
                    </View>
                </View>
                <View style={{ height: 50, flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ flex: 1, flexDirection: 'row', height: 50, borderWidth: 0.5, borderRightWidth: 0, borderColor: 'gray', justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={require('./../UI/img/list_icon.png')} style={{ width: 30, height: 25, margin: 5 }} />
                        <Text style={{ marginLeft: 5 }}>내가 쓴 글</Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', height: 50, borderWidth: 0.5, borderRightWidth: 0, borderColor: 'gray', justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={require('./../UI/img/chat_icon.png')} style={{ width: 30, height: 25, margin: 5 }} />
                        <Text style={{ marginLeft: 5 }}>댓글 단 글</Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', height: 50, borderWidth: 0.5, borderRightWidth: 0, borderColor: 'gray', justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={require('./../UI/img/favorite_icon.png')} style={{ width: 30, height: 25, margin: 5 }} />
                        <Text style={{ marginLeft: 5 }}>스크랩</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    User: {
        height: 200,
        backgroundColor: 'white'
    }
});