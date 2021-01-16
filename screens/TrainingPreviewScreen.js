import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';


const TrainingPreviewScreen = props =>{

  return (
    <View style={styles.screen}>
      <Text> ~~ This is a TrainingPreviewScreen Screen ~~ </Text>
      <Button 
        title="Tap here to enter the training" 
        onPress={() => props.navigation.navigate('Training')}/> 

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

export default TrainingPreviewScreen;