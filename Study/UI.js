import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';

class NavBar extends Component{
    render(){
        return(
            <View style={styles.NavBar}>
                <Text style={styles.navBarText}>More</Text>
            </View>
        )
    }
}

class User extends Component{
    render(){
        return(
            <View style={styles.User}>
                <View style={{height: 150, flexDirection: 'row', borderWidth: 1,alignItems:'center'}}>
                    <View style={{width:100, margin:10}}>
                        <View style={{width:100, height:100}}>
                            <Image source={require('./../img/profile.png')} style={{width: 100, height: 100}}/>
                        </View>
                    </View>
                    <View style={{flex: 1}}>
                        <Text style={{fontSize:30}}>NicName</Text>
                        <Text style={{color: 'gray'}}>Name / ID</Text>
                        <Text style={{color: 'gray'}}>university studentNumber</Text>
                    </View>
                </View>
                <View style={{height: 50, flexDirection: 'row', alignItems: 'center'}}>
                    <View style={{flex:1, flexDirection: 'row', height:50, borderWidth: 0.5,borderRightWidth:0, borderColor:'gray',justifyContent:'center', alignItems: 'center'}}>
                        <Image source={require('./../img/list_icon.png')} style={{width: 30, height: 25, margin:5}}/>
                        <Text style={{marginLeft:5}}>내가 쓴 글</Text>
                    </View>
                    <View style={{flex:1, flexDirection: 'row', height:50, borderWidth: 0.5,borderRightWidth:0, borderColor:'gray',justifyContent:'center', alignItems: 'center'}}>
                        <Image source={require('./../img/chat_icon.png')} style={{width: 30, height: 25, margin:5}}/>
                        <Text style={{marginLeft:5}}>댓글 단 글</Text>
                    </View>
                    <View style={{flex:1, flexDirection: 'row', height:50, borderWidth: 0.5,borderRightWidth:0, borderColor:'gray',justifyContent:'center', alignItems: 'center'}}>
                        <Image source={require('./../img/favorite_icon.png')} style={{width: 30, height: 25, margin:5}}/> 
                        <Text style={{marginLeft:5}}>스크랩</Text>
                    </View>
                </View>
            </View>
        )
    }
}

class ButtonGroup extends Component{
    render(){
        return(
            <View style={styles.ButtonGroup}>
                
            </View>
        )
    }
}

class Taps extends Component{
    render(){
        return(
            <View style={styles.Taps}>
                
            </View>
        )
    }
}

class main extends Component{
    render(){
        return(
            <View style={styles.container}>
                <NavBar />
                <User />
                <View style={{height:30}}></View>
                <ButtonGroup />
                <View style={{height:30}}></View>
                <Taps />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'column',
    },
    NavBar: {
        height: 60,
        backgroundColor: '#FF6E40',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    User: {
        height: 200,
        backgroundColor: 'white'
    },
    ButtonGroup: {
        height: 150,
        backgroundColor: 'green'
    },
    Taps:{
        height: 100,
        backgroundColor: 'yellow'
    },
    navBarText: {
        fontSize: 30,
        //textAlign: 'center',
        color: 'white',
        margin: 10
    }

});

export default main;

