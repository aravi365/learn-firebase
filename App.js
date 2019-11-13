import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import SplashPage from './src/containers/SplashPage';
import SignUp from './src/containers/Signup';
import Login from './src/containers/Login';
import Home from './src/containers/Home';

const App = createStackNavigator(
  {
    SplashPage: {
      screen: SplashPage,
      navigationOptions: {
        header: null,
      },
    },
    SignUp: {
      screen: SignUp,
      navigationOptions: {
        header: null,
      },
    },
    Login: {
      screen: Login,
      navigationOptions: {
        header: null,
      },
    },
    Home: {
      screen: Home,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    initialRouteName: 'SplashPage',
  },
);

export default createAppContainer(App);
