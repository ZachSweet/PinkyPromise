import React , {Component} from 'react';
import { Button, Image, Platform, Text, StatusBar,StyleSheet, View } from 'react-native';
import AppNavigator from '../navigation/AppNavigator';
import { createAppContainer } from 'react-navigation';
import t from 'tcomb-form-native';
import { AsyncStorage } from "react-native";

//  This Form is the variable that we use to instantiate the form
const Form = t.form.Form;

//  Basic information that we are collecting from the users
const User = t.struct({
  email: t.String,
  username: t.maybe(t.String),
  password: t.String,
  terms: t.Boolean
});

const options = {
  fields: {
    email: {
      error: 'Email Adress Required!'
    },
    password: {
      error: 'Password Required!'
    },
    terms: {
      label: 'Agree to Terms and Conditions',
    },
  },
};



export class SignUpScreen extends React.Component {
  static navigationOptions = {
    title: 'Sign Up!',
  };
  
  render() {
    return (
      <View style= {styles.container}>
      <Form 
          ref={c => this._form = c} // assign a ref
          type={User} 
          options={options}
        />
        <Button
          title="Set up your Profile!"
          onPress={
            this.handleSubmit}
          
        />
      </View>
    );
  }
  handleSubmit = () => {
    const {navigate} = this.props.navigation;
    const value = this._form.getValue(); // use that ref to get the form value
    console.log('value: ', value);
    
    if (value != null)
    {
      const email = value.email;
      const saveEmail = async email => {
      try {
      await AsyncStorage.setItem('email', value.email);
      } catch (error) {
      // Error retrieving data
      console.log(error.message);
  }
      const password = value.password;
      const savePassword = async password => {
      try {
      await AsyncStorage.setItem('password', value.password);
      } catch (error) {
      // Error retrieving data
      console.log(error.message);
}
      }
}
    navigate('CreateProfile');
    }
    
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