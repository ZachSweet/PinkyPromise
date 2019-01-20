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
  password: t.String
});

const options = {
  fields: {
    email: {
      error: 'Email Adress Required!'
    },
    password: {
      error: 'Password Required!'
    },
  },
};

export class SignInScreen extends React.Component {
  static navigationOptions = {
    title: 'Sign In',
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
        title="Sign In!"
        onPress={ this.handleSubmit}

      />
      </View>
    );
  }

  handleSubmit = () => {
    const {navigate} = this.props.navigation;
    const value = this._form.getValue(); // use that ref to get the form value
    console.log('value: ', value);
    let email = null;
    let password = null;
    AsyncStorage.multiGet(['email', 'password']).then((data) => {
      let emails = data[0][1];
      let passwords = data[1][1];
      if (emails == null || passwords == null) return;
      if (emails.trim() === (value.email.trim()) && passwords.trim() === (value.password.trim()))
      {
        navigate('MainPage');
      }
    else
        return;
      console.log(5);
      console.log(emails);
      console.log(value.email);
      console.log(passwords);
      console.log(value.password);
      console.log(emails.trim() === (value.email.trim()));
      console.log(passwords.trim() === (value.password.trim()));
  });
    
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