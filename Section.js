import React, { Component } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

class Header extends Component {
  render() {
    return(
      <View style={styles.header}>
        <Text>{this.props.text}</Text>
      </View>
    )
  }
}
class Content extends Component{
  render() {
    return (
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => this.props.handleChangeText(text)}
      />
    )
  }
}

export default class Section extends Component {
  constructor() {
    super();
    this.state = {
      text: 'React Native ID'
    }
  }
  handleChangeText = (text) => {
    this.setState({text});
  }
  render() {
    return (
      <View>
        <Header text={this.state.text}/>
        <Content handleChangeText={this.handleChangeText}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    height: 50,

    backgroundColor: '#bebebe',
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
