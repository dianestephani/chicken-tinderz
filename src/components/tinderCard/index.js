import React from 'react';
import Text from 'react-native';


//We've turned the card into a component that generates our "props" so we don't have to hard code every single card into the app.
const Card = (props) => {
    const {name, image, bio} = props;
    return (
      <View style = {styles.card}>
          
      <ImageBackground source = {{
          uri: image,
        }}
          style =  {styles.image}>
    
        <View style = {styles.cardInner}>
          <Text style = {styles.name}> {name} </Text>
          <Text style = {styles.bio}> {bio} </Text>
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