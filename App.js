import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BookTransaction from './screens/BookTransaction';
import SearchScreen from './screens/SearchScreen';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

export default class App extends React.Component{
  render(){
    return (
      <View style={styles.container}>
        <AppNavigator/>
      </View>
  );
  }
}

const TabNavigator = createBottomTabNavigator({
  Transaction: { screen: BookTransaction },
  Search: { screen: SearchScreen },
})

const AppNavigator = createAppContainer(TabNavigator)

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
