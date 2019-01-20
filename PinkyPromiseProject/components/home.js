import React , {Component} from 'react';
import { Button, Image, Platform, Text, StatusBar,StyleSheet, View } from 'react-native';
import AppNavigator from '../navigation/AppNavigator';
import { createAppContainer } from 'react-navigation';

export class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome to Pinky Promise!',
  };
  render() {
    const {navigate} = this.props.navigation;
    let pic = {
      uri: 'https://images.pexels.com/photos/1389098/pexels-photo-1389098.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    };
    return (
    <View style= {styles.container}>
    <Image source={pic} style={{width: 253, height: 160}}/>
    <Text style = {styles.welcome}>Pinky Promise!</Text>
      <Button
        title="Sign In"
        onPress={() => navigate('SignIn')}
        />
        <Button
        title="Sign Up"
        onPress={() => navigate('SignUp')}
        />
    </View>
    
    );
  }
}

const styles = StyleSheet.create({
    container: {
      justifyContent: "center",
      padding: 60,
      backgroundColor: "#FFB6C1",
      flex: 1
    },
    bigblue: {
      color: 'blue',
      fontWeight: 'bold',
      fontSize: 30,
    },
    welcome: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 30,
      fontFamily: "MarkerFelt-Wide",
      textAlign: "center",
      margin: 10
    },
    red: {
      color: 'red',
    },
  });