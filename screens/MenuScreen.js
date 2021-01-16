import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';


const MenuScreen = props =>{

  return (
    <View style={styles.screen}>
      <Text> ~~ This is a Menu Screen ~~ </Text>
      <Button 
        title="Tap here to enter the This training session" 
        onPress={() => props.navigation.navigate('Preview')}/> 

    </View>)
}


const styles = StyleSheet.create({
  screen: {
    flex:1,
    margin:0,
    alignItems: 'center',
    justifyContent: 'center',
  },

});

export default MenuScreen;