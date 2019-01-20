import React , {Component} from 'react';
import { Button, Image, Platform, Text, StatusBar,StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import AppNavigator from './navigation/AppNavigator';
import {createStackNavigator} from 'react-navigation';
import { createAppContainer } from 'react-navigation';
import { HomeScreen } from './components/home';
import { LogInScreen } from './components/login';
import { SignInScreen } from './components/signin';
import { SignUpScreen } from './components/signup';
import { CreateProfileScreen } from './components/createprofile';

const FunStack = createStackNavigator({
  Home: {screen: HomeScreen},
  LogIn: {screen: LogInScreen},
  SignIn: {screen: SignInScreen},
  SignUp: {screen: SignUpScreen},
  CreateProfile: {screen: CreateProfileScreen},
});

const App = createAppContainer(FunStack);

export default App;