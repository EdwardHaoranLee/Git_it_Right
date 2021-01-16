import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import {VIDEO_DATA} from '../data/videoData.js';


const TrainingPreviewScreen = props =>{


  const videoId = props.route.params.videoId
  const videoItem = VIDEO_DATA.find(video => videoId === video.id);
  
  return (
    <View style={styles.screen}>
      <Text>{"TrainingPreview for: " + videoItem.name   }</Text>
      <Button 
        title="Tap here to enter the training" 
        onPress={() => props.navigation.navigate({
          name:'Training',
          params:{videoId: videoId}
          })
        
        }/> 

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