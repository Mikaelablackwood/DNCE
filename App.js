import React, { Component } from 'react';
import { StyleSheet, Text, Keyboard,  View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, Platform,Button, Image, TouchableHighlight,} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Homescreen from './src/login/homescreen.js';
import Email from './src/login/email.js';
import Dance from './src/login/Dance.js';
import Beginner from './src/login/Beginner.js';
import Intermediate from './src/login/intermediate.js';
import Expert from './src/login/Expert.js';






const RootStack = createStackNavigator(
{
  Home: { screen: Homescreen },
  Email: {screen: Email},
  Dance: {screen: Dance},
  Beginner: {screen: Beginner},
  Intermediate: {screen:Intermediate },
  Expert : {screen:Expert },
  
},
{
    initialRouteName: 'Home',
}

);

export default class App extends Component {
  render() {
    return <RootStack />;
  }
}

