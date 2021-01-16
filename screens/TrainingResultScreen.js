import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';


const TrainingResultScreen = props =>{

  return (
    <View style={styles.screen}>
      <Text> ~~ This is a Result Screen ~~ </Text>
      <Button 
        title="Tap here to go back to Menu" 
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

export default TrainingResultScreen;