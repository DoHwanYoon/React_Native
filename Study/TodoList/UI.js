import React, {Component} from 'react';

import {
    StyleSheet,
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
  } from 'react-native';
  
  console.log('asd')
  class main extends Component{
    componentWillMount() {
        this.setState({
          inputText: '',
        })
      }
      render(){
          return(
              <View style={styles.container}>
                  <TextInput style={{height:40, borderColor:'gray', borderWidth:1}} onChangeText={(Text) => {
                      this.setState({inputText: Text})
                    }}
                    value={this.state.inputText}
                    />
                  <TouchableOpacity onPress={this.addTodo.bind(this)}>
                      <Text>
                          add Todo
                      </Text>
                  </TouchableOpacity>
              </View>
        );
    }

    addTodo()
    {

    }

  }
  
  const styles = StyleSheet.create({
      container: {
          flex:1,
          flexDirection: 'column',
      }
  });
  
  export default main;