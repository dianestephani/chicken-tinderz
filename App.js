import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

//Writing our app as a function called App that's both defined and then exported right here.

//Probably need to fill this function with data from the Yelp API.
export default function App() {
  return (
    <View style = {styles.container}>
      
      <View style = {styles.card}>
      
        <Image source = {{
          uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png'
        }}
          style =  {styles.image}
        />

      </View>

  </View>
  );
}

//This sets default styles for the page container and for images.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
      width: '100%',
      height: '100%'
  },

  card: {
    width: '95%',
    height: '70%'
  }
  
});
