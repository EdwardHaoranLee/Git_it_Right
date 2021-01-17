import React, { Component } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import Svg, { Ellipse } from "react-native-svg";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { Video } from 'expo-av';
import {VIDEO_DATA} from '../data/videoData.js';

function Untitled(props) {

  const videoItem = VIDEO_DATA.find(video => props.route.params.videoId === video.id);
  return (
    <View style={styles.container}>
      <View style={styles.ellipseStackStack}>
        <View style={styles.ellipseStack}>
          <Svg viewBox="0 0 550 412.69" style={styles.ellipse}>
            <Ellipse
              stroke="rgba(230, 230, 230,1)"
              strokeWidth={0}
              fill="rgba(255,255,255,1)"
              cx={275}
              cy={206}
              rx={275}
              ry={206}
            ></Ellipse>
          </Svg>
          <Svg viewBox="0 0 171.48 164.39" style={styles.ellipse2}>
            <Ellipse
              stroke="rgba(255,140,0,1)"
              strokeWidth={9}
              fill="rgba(255,255,255,1)"
              cx={86}
              cy={82}
              rx={81}
              ry={78}
            ></Ellipse>
          </Svg>
          <Text style={styles.loremIpsum}></Text>
          <Text style={styles.loremIpsum1}>93%</Text>
          <Text style={styles.yourveGotten}>Your&#39;ve gotten</Text>
          <Text style={styles.right}>Right!</Text>
          {/* <Image
            source={require("../assets/images/unnamed_(4).jpg")}
            resizeMode="contain"
            style={styles.image}
          ></Image> */}
            <Video
              source={videoItem.assetFile}
              rate={1.0}
              volume={0}
              isMuted={false}
              resizeMode="cover"
              shouldPlay
              isLooping
              style={{ marginTop:200, width: "60%", height: "70%" }}
            />



          <TouchableOpacity
            onPress={() => props.navigation.navigate({
              name:'Training',
              params:{videoId: 1}
              })
            
            }
          >
            <Svg viewBox="0 0 139.75 143.75" style={styles.ellipse3}>
              <Ellipse
                stroke="rgba(255,255,255,1)"
                strokeWidth={11}
                fill="rgba(248,171,28,1)"
                cx={70}
                cy={72}
                rx={64}
                ry={66}
              ></Ellipse>
            </Svg>
            <Image
              source={require("../assets/images/unnamed_(5).jpg")}
              resizeMode="contain"
              style={styles.image2}
            ></Image>
          </TouchableOpacity>


          <Svg viewBox="0 0 400 132.81" style={styles.ellipse5}>
            <Ellipse
              stroke="rgba(230, 230, 230,1)"
              strokeWidth={0}
              fill="rgba(230, 230, 230,1)"
              cx={200}
              cy={66}
              rx={200}
              ry={66}
            ></Ellipse>
          </Svg>
        </View>
        <Text style={styles.pushUp}>Squat</Text>
      </View>
      <View style={styles.icon1Row}>
        <EntypoIcon
          name="arrow-with-circle-left"
          style={styles.icon1}
        ></EntypoIcon>
        <MaterialCommunityIconsIcon
          name="home-circle"
          style={styles.icon3}
        ></MaterialCommunityIconsIcon>
      </View>
      
        <View style={styles.ellipse4Stack}>
        <TouchableOpacity activeOpacity={0.7}
            onPress={() => props.navigation.navigate({
              name:'Training',
              params:{videoId: 1}
              })
            
            }
          >
            <Svg viewBox="0 0 234.41 76.58" style={styles.ellipse4}>
              <Ellipse
                stroke="rgba(230, 230, 230,1)"
                strokeWidth={0}
                fill="rgba(255,255,255,1)"
                cx={117}
                cy={38}
                rx={117}
                ry={38}
              ></Ellipse>
            </Svg>
            <Text style={styles.tryItMyself}>Try It Myself!</Text>
          </TouchableOpacity>
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(248,171,28,1)"
  },
  ellipse: {
    top: 100,
    width: 550,
    height: 440,
    position: "absolute",
    left: 0
  },
  ellipse2: {
    top: 0,
    left: 282,
    width: 171,
    height: 164,
    position: "absolute"
  },
  loremIpsum: {
    top: 12,
    left: 292,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  loremIpsum1: {
    top: 50,
    left: 310,
    position: "absolute",
    fontFamily: "montserrat-700",
    color: "rgba(255,140,0,1)",
    fontSize: 55
  },
  yourveGotten: {
    top: 31,
    left: 310,
    position: "absolute",
    fontFamily: "montserrat-700",
    color: "rgba(248,171,28,1)",
    fontSize: 15
  },
  right: {
    top: 115,
    left: 343,
    position: "absolute",
    fontFamily: "montserrat-700",
    color: "rgba(248,171,28,1)",
    fontSize: 15
  },
  image: {
    top: 125,
    left: 59,
    width: 415,
    height: 395,
    position: "absolute"
  },
  ellipse3: {
    top: 440,
    left: 207,
    width: 140,
    height: 144,
    position: "absolute"
  },
  image2: {
    top: 474,
    left: 244,
    width: 76,
    height: 76,
    position: "absolute"
  },
  ellipse5: {
    top: 0,
    left: 490,
    width: 400,
    height: 133,
    position: "absolute"
  },
  ellipseStack: {
    top: 0,
    left: 0,
    width: 890,
    height: 584,
    position: "absolute"
  },
  pushUp: {
    top: 17,
    left: 110,
    position: "absolute",
    fontFamily: "montserrat-700",
    color: "rgba(255,255,255,1)",
    fontSize: 35
  },
  ellipseStackStack: {
    width: 890,
    height: 584,
    marginTop: 100,
    marginLeft: -70
  },
  icon1: {
    color: "rgba(255,255,255,1)",
    fontSize: 40
  },
  icon3: {
    color: "rgba(255,255,255,1)",
    fontSize: 40,
    marginLeft: 295
  },
  icon1Row: {
    height: 44,
    flexDirection: "row",
    marginTop: -644,
    marginLeft: 20,
    marginRight: 19
  },
  ellipse4: {
    top: 0,
    width: 234,
    height: 77,
    position: "absolute",
    left: 0
  },
  tryItMyself: {
    top: 19,
    left: 34,
    position: "absolute",
    fontFamily: "montserrat-700",
    color: "rgba(255,140,0,1)",
    fontSize: 25
  },
  ellipse4Stack: {
    width: 234,
    height: 77,
    marginTop: 647,
    marginLeft: 90
  }
});

export default Untitled;
