import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';


const TrainingScreen = props =>{

  return (
    <View style={styles.screen}>
      <Text> ~~ This is a Training Screen ~~ </Text>
      <Button 
        title="Tap here to end the training" 
        onPress={() => props.navigation.navigate('Result')}/> 

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

export default TrainingScreen;