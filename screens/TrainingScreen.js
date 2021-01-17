import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import {VIDEO_DATA} from '../data/videoData.js';
import Posenet from "../model/PositionRecognizer";
const TrainingScreen = props =>{

  const videoId = props.route.params.videoId
  const videoItem = VIDEO_DATA.find(video => videoId === video.id);
  
  return (
    <View style={styles.screen}>
      <View style={styles.posenetView}>
          <Posenet/>
      </View>
      <Button 
        title="Tap here to end the training" 
        onPress={() => props.navigation.navigate({
          name:'Result',
          params:{videoId: videoId,
                  duration: 3,
                  accuracy: 0.8,
                  headAccuracy:0.5,
                  shoulderAccuracy:0.5}
          })
        
        }/> 
      <Text> {"TrainingPreview for: " + videoItem.name  }</Text>

    </View>)
}


const styles = StyleSheet.create({
  screen: {
    flex:1,
    margin:10,
    alignItems: 'center',
  },

  posenetView:{
    height:"90%",
    width:"100%",
    backgroundColor:"lightblue"
  }

});

export default TrainingScreen;