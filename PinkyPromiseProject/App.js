import React , {Component} from 'react';
import { Image, Platform, Text, StatusBar,StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import AppNavigator from './navigation/AppNavigator';
import t from 'tcomb-form-native';

//  This Form is the variable that we use to instantiate the form
const Form = t.form.Form;

//  Basic information that we are collecting from the users
const User = t.struct({
  email: t.String,
  username: t.String,
  password: t.String,
  terms: t.Boolean
});

export default class App extends Component {
  /*
    Function used to handle the data submitted when making a profile
  */
  handleSubmit = () => {
    // do the things  
  }

  //  Rendering the App (How it looks like on your phone)

  render() {
    let pic = {
      uri: 'https://images.pexels.com/photos/1389098/pexels-photo-1389098.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    };
    return (
      <View style= {styles.container}>
      <Form type={User} />
      <Image source={pic} style={{width: 253, height: 160}}/>
        <Text style = {styles.welcome}>Pinky Promise!</Text>
      </View>
    );
  }
}


/*
VISUAL COMPONENT OF CODE
These styles are used to customize the layout of our text
*/

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#FFB6C1",
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
