/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { ListEmail, SignIn } from './pages';
import Router from './router';

const App = () => {
  return (
      <NavigationContainer>
        <Router/>
      </NavigationContainer>
  );
};

const styles = StyleSheet.create({

});

export default App;
