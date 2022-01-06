import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Card from './src/components/tinderCard'; 

//Writing our app as a function called App that's both defined and then exported right here. At 46:21 we have Image Background, name and bio, and shadow.

//Probably need to fill this function with data from the Yelp API.
const App = () => {
  return (
    <View style = {styles.container}>
      <Card />
    </View>  
  )  
}

//This sets default styles for the page container, images, text, etc.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default App;