import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import {VIDEO_DATA} from '../data/videoData.js';

const TrainingResultScreen = props =>{

  const videoId = props.route.params.videoId
  const videoItem = VIDEO_DATA.find(video => videoId === video.id);
  
  return (
    <View style={styles.screen}>
      <Text> {"~~ This is a Result Screen ~~" + videoItem.name} </Text>
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