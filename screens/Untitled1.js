import React, { Component } from "react";
import { StyleSheet, View, Text, Image, ImageBackground,TouchableOpacity } from "react-native";
import Svg, { Ellipse } from "react-native-svg";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import Posenet from "../model/PositionRecognizer";

function Untitled1(props) {
  return (
    <View style={styles.container}>
      <View style={styles.ellipse5StackStack}>
        <View style={styles.ellipse5Stack}>
          <Svg viewBox="0 0 640 300" style={styles.ellipse5}>
            <Ellipse
              stroke="rgba(230, 230, 230,1)"
              strokeWidth={0}
              fill="rgba(255,255,255,1)"
              cx={320}
              cy={150}
              rx={320}
              ry={150}
            ></Ellipse>
          </Svg>
          <Text style={styles.pushUp2}>Squat</Text>
          <MaterialCommunityIconsIcon
            name="home-circle"
            style={styles.icon2}
          ></MaterialCommunityIconsIcon>
          <EntypoIcon
            name="arrow-with-circle-left"
            style={styles.icon1}
          ></EntypoIcon>
          <Svg viewBox="0 0 155.65 153.19" style={styles.ellipse6}>
            <Ellipse
              stroke="rgba(255,140,0,1)"
              strokeWidth={9}
              fill="rgba(255,255,255,1)"
              cx={78}
              cy={77}
              rx={73}
              ry={72}
            ></Ellipse>
          </Svg>
          <Text style={styles.loremIpsum2}>14</Text>
        </View>
        <View style={styles.ellipseStack}>
          <Svg viewBox="0 0 632.92 440" style={styles.ellipse}>
            <Ellipse
              stroke="rgba(255,255,255,1)"
              strokeWidth={0}
              fill="rgba(255,255,255,1)"
              cx={316}
              cy={220}
              rx={316}
              ry={220}
            ></Ellipse>
          </Svg>

          <View style={styles.posenetView}>
            {/* <Posenet/> */}
          </View>


          <ImageBackground
            source={require("../assets/images/IMG-2768.jpg")}
            resizeMode="contain"
            style={styles.image}
            imageStyle={styles.image_imageStyle}
          >
            {/* <Posenet/> */}
            {/* <Text style={styles.loremIpsum}></Text> */}
          </ImageBackground>




          <TouchableOpacity
            onPress={() => props.navigation.navigate({
              name:'Result',
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
              source={require("../assets/images/IMG-2770.jpg")}
              resizeMode="contain"
              style={styles.image6}
            ></Image>
          </TouchableOpacity>

        </View>
        <Text style={styles.gotItCount}>Training Time:</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(248,171,28,1)"
  },
  ellipse5: {
    top: 0,
    width: 640,
    height: 300,
    position: "absolute",
    left: 0
  },
  pushUp2: {
    top: 204,
    left: 233,
    position: "absolute",
    fontFamily: "montserrat-700",
    color: "rgba(255,140,0,1)",
    fontSize: 35
  },
  icon2: {
    top: 160,
    left: 471,
    position: "absolute",
    color: "rgba(248,171,28,1)",
    fontSize: 40
  },
  icon1: {
    top: 160,
    left: 133,
    position: "absolute",
    color: "rgba(248,171,28,1)",
    fontSize: 40
  },
  ellipse6: {
    top: 287,
    left: 337,
    width: 156,
    height: 153,
    position: "absolute"
  },
  loremIpsum2: {
    top: 320,
    left: 369,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "rgba(255,140,0,1)",
    fontSize: 73
  },
  ellipse5Stack: {
    top: 0,
    left: 0,
    width: 640,
    height: 440,
    position: "absolute"
  },
  ellipse: {
    width: 633,
    height: 440,
    position: "absolute",
    left: 0,
    top: 0
  },
  image: {
    top: 76,
    left: 114,
    width: 404,
    height: 287,
    position: "absolute"
  },
  image_imageStyle: {},
  loremIpsum: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 219,
    marginLeft: 147
  },
  ellipse3: {
    top: 356,
    left: 249,
    width: 140,
    height: 144,
    position: "absolute"
  },
  image6: {
    top: 389,
    left: 289,
    width: 60,
    height: 78,
    position: "absolute"
  },
  ellipseStack: {
    top: 420,
    left: 4,
    width: 633,
    height: 500,
    position: "absolute"
  },
  gotItCount: {
    top: 355,
    left: 142,
    position: "absolute",
    fontFamily: "montserrat-regular",
    color: "rgba(255,255,255,1)",
    lineHeight: 18,
    fontSize: 25
  },
  ellipse5StackStack: {
    width: 640,
    height: 920,
    marginTop: -120,
    marginLeft: -113
  },

  posenetView:{
    height:"60%",
    width:"100%",
    backgroundColor:"lightblue"
  }
});

export default Untitled1;
