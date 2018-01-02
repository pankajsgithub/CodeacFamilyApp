import React, { Component } from 'react'
import { } from 'react-native'
import Login_Page from './Components1/Login_page'
import List_View from './Components1/List_View'

import { StackNavigator } from 'react-navigation'
import Login from './Components1/Login_page';
import Welcome from './Components1/Welcome';

const Application = StackNavigator({
  Home: { screen: Login_Page },
  Welcome:{ screen: Welcome},
}, {
    navigationOptions: {
      header: false,
    }
  });

export default class App extends Component {
  render() {
    return (
      <Application/>
    );
  }
}