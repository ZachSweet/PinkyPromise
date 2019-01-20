import React , {Component} from 'react';
import { Button, Image, Platform, Text, StatusBar,StyleSheet, View } from 'react-native';
import AppNavigator from '../navigation/AppNavigator';
import { createAppContainer } from 'react-navigation';

export class SignInScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome to Pinky Promise2',
  };
  render() {
    const {navigate} = this.props.navigation;
    let pic = {
      uri: 'https://images.pexels.com/photos/1389098/pexels-photo-1389098.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    };
    return (
      <Button
        title="Sign In!"
        onPress={() => navigate('SignIn')}
      />
    );
  }
}