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
          {/* <Text>helllo</Text> */}
          <Posenet/>
      </View>
      <Button 
        title="Tap here to end the training" 
        onPress={() => props.navigation.navigate({
          name:'Result',
          params:{videoId: videoId}
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