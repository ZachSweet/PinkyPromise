import React , {Component} from 'react';
import { Image, Platform, Text, StatusBar,StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import AppNavigator from './navigation/AppNavigator';

/*
VISUAL COMPONENT OF CODE
*/

const styles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  bigpink: {
    color: 'pink',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});

export default class App extends Component {
  render() {
    let pic = {
      uri: 'https://images.pexels.com/photos/1389098/pexels-photo-1389098.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    };
    return (
      <View>
        <Image source={pic} style={{width: 193, height: 110}}/>
        <Text style = {styles.bigpink}>Pinky Promise!</Text>
      </View>
    );
  }
}
