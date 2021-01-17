import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import {VIDEO_DATA} from '../data/videoData.js';
import Posenet from "../model/PositionRecognizer";
import * as Speech from 'expo-speech';


function average(nums) {

  return nums.length == 0? 0 : nums.reduce((a, b) => (a + b)) / nums.length;
}
export default class TrainingScreen extends React.Component {

  constructor(props) {
    super(props);
    this.videoId = this.props.route.params.videoId;
    this.state = {
      startTime:null,
      count:0,
      armAccuracy:[],
      legAccuracy:[],
      audioNotif: null
    };
    this.videoItem = VIDEO_DATA.find(video => this.videoId === video.id);

    this.onFinishSession = this.onFinishSession.bind(this);
    // this.onParseFrame = this.onParseFrame.bind(this);
  }

  componentDidMount() {

    this.setState({startTime:new Date()})

  }

  // componentWillUnmount(){
  //   this.setState({startTime:null})
  // }

  onFinishSession(){

    const finishTime = new Date();
    // console.log(parseInt(finishTime.getTime()))
    // console.log(parseInt(this.state.startTime.getTime()))
    // console.log(Math.floor(parseInt(finishTime.getTime() - this.state.startTime.getTime())/ 1000))

    this.props.navigation.navigate({
      name:'Result',
      params:{videoId: this.videoId,
              duration: Math.floor(parseInt(finishTime.getTime() - this.state.startTime.getTime())/ 1000),        
              count: this.state.count,
              armAccuracy: average(this.state.armAccuracy),
              legAccuracy: average(this.state.legAccuracy),
              // otherAccuracy: average(this.state.otherAccuracy),
            }
      })
  }


  speak(){
    const thingToSay = 'You are the best ';
    Speech.speak(thingToSay);
  };



  render(){

    // STEP 1: get model and user data, calculate difference
    // STEP 2: append accuracy array
    // STEP 3: redraw skeleton, audio/visual reminder when accuracy rate is too low


    return (
      <View style={styles.screen}>
        <View style={styles.posenetView}>
            <Posenet/>
        </View>
        <Button 
          title="Tap here to end the training" 
          onPress={this.onFinishSession}/> 
        <Text> {"TrainingPreview for: " + this.videoItem.name  }</Text>
        <Button title="Press to hear some words" onPress={this.speak} />
      </View>)

  }

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
    // backgroundColor:"lightblue"
  }

});

