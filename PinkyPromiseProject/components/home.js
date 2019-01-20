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
      uri: 'https://i.imgur.com/pHSU9El.jpg'
    };
    return (
    <View style= {styles.container}>
    <Image source={pic} style={{width: 253, height: 160}}/>
      <Button
        title="Sign In"
        color= "#FFB6C1"
        onPress={() => navigate('SignIn')}
        />
        <Button
        title="Sign Up"
        color = "#FFB6C1"
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
      backgroundColor: "#FFFFFF",
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
    button: {
        backgroundColor: 'pink',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 12,
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        overflow: 'hidden',
        padding: 12,
        textAlign:'center',

    }
  });