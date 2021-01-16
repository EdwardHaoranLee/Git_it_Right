import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';


const HomeScreen = props =>{

  return (
    <View style={styles.screen}>
      <Text> ~~ This is a Home Screen ~~ </Text>
      <Button 
        title="Tap here to enter the app" 
        onPress={() => props.navigation.navigate('Menu')}/> 

    </View>)
}


const styles = StyleSheet.create({
  screen: {
    flex:1,
    margin:10,
    alignItems: 'center',
    justifyContent: 'center',
  },

});

export default HomeScreen;