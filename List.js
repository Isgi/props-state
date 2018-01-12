/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

//child component
class Item extends Component {
  constructor() {
    super();
    this.state = {
      deleted: false,
      deleteProcess: false
    }
  }
  handleDelete = () => {
    setTimeout(()=>this.setState({deleteProcess: true}), 3000)
    this.setState({ deleted: !this.state.deleted });
  }
  render() {
    return (
      <Text onPress={this.handleDelete} style={{textDecorationLine: this.state.deleted ? 'line-through' : 'none'}}>
        {this.props.name}
      </Text>
    )
  }
}

//parent component
export default class List extends Component {
  constructor() {
    super();
    this.state = {
      pageList: true
    }
  }
  handleChangeRoute = () => {
    this.setState({pageList: !this.state.pageList})
  }
  render() {
    return (
      <View style={styles.container}>
        {this.state.pageList ? (
          <View>
            <Item name='1. JavaScript' />
            <Item name='2. Java' />
            <Item name='3. PHP' />
            <Item name='4. C++' />
            <Item name='5. C#' />
          </View>
        ) : (
          <Text>Welcome Page</Text>
        )}
        <Button onPress={()=>this.handleChangeRoute()} title='Change Route'/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 50
  },
  label: {
    fontSize: 28,
    margin: 5
  }
})
