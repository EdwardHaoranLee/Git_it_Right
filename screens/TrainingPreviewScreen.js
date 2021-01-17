import React from 'react';
import { StyleSheet, Text, View, Button, Image} from 'react-native';
import {VIDEO_DATA} from '../data/videoData.js';
import { Video } from 'expo-av';
// import Video from 'react-native-video';

// const TrainingPreviewScreen = props =>{
export default class TrainingPreviewScreen extends React.Component {

  constructor(props) {
    super(props);
    this.videoId = this.props.route.params.videoId;
    this.state = {
      duration:0,
      count:0,
      armAccuracy:[],
      legAccuracy:[],
      audioNotif: null
    };
    this.videoItem = VIDEO_DATA.find(video => this.videoId === video.id);
  }

  renderAsset(){

    // const asset = 
    return this.videoItem.assetType == "video"? (
      <Video
      source={this.videoItem.assetFile}
      rate={1.0}
      volume={0}
      isMuted={false}
      resizeMode="cover"
      shouldPlay
      isLooping
      style={{ width: "100%", height: "50%" }}
    />
    ):(
      <Image style={{ width: "100%", height: "50%" }} source={this.videoItem.assetFile} />
    )
  }


  render(){
    return (
      <View style={styles.screen}>
        <View style={styles.videoPreview}>
          {this.renderAsset()}
        </View>
        <Text>{"TrainingPreview for: " + this.videoItem.name   }</Text>
        <Button 
          title="Tap here to enter the training" 
          onPress={() => this.props.navigation.navigate({
            name:'Training',
            params:{videoId: this.videoId}
            })
          }/> 
  
      </View>)

  }

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

// export default TrainingPreviewScreen;