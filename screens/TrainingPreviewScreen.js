import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import {VIDEO_DATA} from '../data/videoData.js';
import { Video } from 'expo-av';

const TrainingPreviewScreen = props =>{


  const videoId = props.route.params.videoId
  const videoItem = VIDEO_DATA.find(video => videoId === video.id);
  
  return (
    <View style={styles.screen}>
      <View style={styles.videoPreview}>
        <Video
          source={require('../assets/pushUpVideo.mp4' )}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="cover"
          shouldPlay
          isLooping
          style={{ width: "100%", height: "50%" }}
        />
      </View>
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
  videoPreview:{
    height:"60%",
    width:"100%",
    backgroundColor:"lightgreen"
  }
});

export default TrainingPreviewScreen;