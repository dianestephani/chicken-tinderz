import React from 'react';
import Text from 'react-native';

const Card = () => {
    return (
        <View style = {styles.card}>
          
      <ImageBackground source = {{
          uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png'
        }}
          style =  {styles.image}>
    
      <View style = {styles.cardInner}>
                <Text style = {styles.name}>Elon Musk</Text>
                <Text style = {styles.bio}> 
                  A dude with a rocket is looking for a gal with fuel
                </Text>
              </View>
    
        </ImageBackground>
    
      </View>
    
  );
    
}

//This sets default styles for the page container, images, text, etc.
const styles = StyleSheet.create({
    // container: {
    //   flex: 1,
    //   backgroundColor: '#fff',
    //   alignItems: 'center',
    //   justifyContent: 'center',
    // },
  
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
        overflow: 'hidden',
  
        justifyContent: 'flex-end',
        padding: 20,
    },
  
    card: {
      width: '95%',
      height: '70%',
      borderRadius: 10,
  
      shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 5,
        },
      shadowOpacity: 0.36,
      shadowRadius: 6.68,
  
      elevation: 11,
    },
  
    name: {
      fontSize: 30,
      color: 'white',
      fontWeight: 'bold',
    },
  
    bio: {
      fontSize: 18,
      color: 'white',
      fontWeight: 'bold',
      lineHeight: 25,
    },
  
    cardInner: {
      padding: 10,
    }
    
  });

export default Card;