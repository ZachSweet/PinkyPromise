import React , {Component} from 'react';
import { Button, Image, Platform, Text, StatusBar,StyleSheet, View } from 'react-native';
import AppNavigator from '../navigation/AppNavigator';
import { createAppContainer } from 'react-navigation';
import t from 'tcomb-form-native';

//  This Form is the variable that we use to instantiate the form
const Form = t.form.Form;

//  Basic information that we are collecting from the users
const User = t.struct({
  bio: t.String,
  top_promise: t.String,
  second_promise: t.maybe(t.String),
  third_promise: t.maybe(t.String)
});

const options = {
  fields: {
    bio: {
      error: 'A bio is required!'
    },
    top_promise: {
      error: 'At least one promise required!'
    },
  },
};

export class CreateProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Profile',
  };
  
  handleSubmit = () => {
    const value = this._form.getValue(); // use that ref to get the form value
    console.log('value: ', value);
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style= {styles.container}>
      <Form type={User} />
      <Button
        title="I'm done setting up!"
        onPress={() => navigate('Home')}
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