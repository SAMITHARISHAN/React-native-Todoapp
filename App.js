import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import InputBar from './components/InputBar';

export default class App extends React.Component() {

  constructor () {
    // super();

      this.state = {
        todoInput: '',
        todos: [
          {id: 0, title: 'Take out the trash', done: false},
          {id: 1, title: 'Cook dinner', done: false},
          {id: 2, title: 'Wash clothes', done: false}
        ]
      }
  }


  render(){
    return (
      <View style={styles.container}>
        <view style={styles.statusbar}></view>
          <Header title='TODOAPP'/>
            <InputBar/>

      </View>
    );
  } 
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  statusbar:{
    backgroundColor: '#FFCE00',
    height: 20
  }
});
