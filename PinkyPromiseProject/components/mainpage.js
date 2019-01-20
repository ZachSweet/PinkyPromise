import React , {Component} from 'react';
import { Button, Image, Platform, Text, StatusBar,StyleSheet, View } from 'react-native';
import AppNavigator from '../navigation/AppNavigator';
import { createAppContainer } from 'react-navigation';
import t from 'tcomb-form-native';
import { AsyncStorage } from "react-native";

export class MainPageScreen extends React.Component {
    static navigationOptions = {
      title: 'Main Page',
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
            title="View/Edit Profile"
            color= "#FFB6C1"
            onPress={() => navigate('CreateProfile')}
            />
            <Button
            title="Start Matching"
            color = "#FFB6C1"
            //onPress={() => navigate('SignUp')}
            />
            <Button
            title="Talk to Matches"
            color = "#FFB6C1"
            //onPress={() => navigate('SignUp')}
            />
            <Button
            title="Unmatch"
            color = "#FFB6C1"
            //onPress={() => navigate('SignUp')}
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