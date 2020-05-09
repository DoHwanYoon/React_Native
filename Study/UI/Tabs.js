import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';

class TabsButton extends Component{
    render(){
        return(
            <View style={{flex:1, height:60, justifyContent:'center', alignItems:'center'}}>
                <View style={{width:30, height:30, backgroundColor:'gray'}}></View>
                <Text style={{marginTop: 5, color: '#A0A0A0'}}>{this.props.name}</Text>
            </View>
        )
    }
}

export default class Tabs extends Component{
    render(){
        return(
            <View style={styles.Taps}>
                <View style={{flex:1, flexDirection:'row'}}>
                    <TabsButton name="홈" />
                    <TabsButton name="시간표" />
                    <TabsButton name="커뮤니티" />
                    <TabsButton name="모임" />
                    <TabsButton name="더보기" />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Taps:{
        height: 60,
        borderWidth : 0.5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: 'yellow'
    }
});