import React, { Component } from "react";
import { StyleSheet, View, Text, Image, ImageBackground } from "react-native";
import Svg, { Ellipse } from "react-native-svg";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import EntypoIcon from "react-native-vector-icons/Entypo";

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
          <Svg viewBox="0 0 420 180" style={styles.ellipse4}>
            <Ellipse
              stroke="rgba(230, 230, 230,1)"
              strokeWidth={0}
              fill="rgba(255,255,255,1)"
              cx={210}
              cy={90}
              rx={210}
              ry={90}
            ></Ellipse>
          </Svg>
          <Text style={styles.pushUp2}>Push-Up</Text>
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
          <ImageBackground
            source={require("../assets/images/IMG-2768.jpg")}
            resizeMode="contain"
            style={styles.image}
            imageStyle={styles.image_imageStyle}
          >
            <Text style={styles.loremIpsum}></Text>
          </ImageBackground>
          <Image
            source={require("../assets/images/IMG-2765.jpg")}
            resizeMode="contain"
            style={styles.image2}
          ></Image>
          <Image
            source={require("../assets/images/IMG-2766.jpg")}
            resizeMode="contain"
            style={styles.image3}
          ></Image>
          <Image
            source={require("../assets/images/IMG-27671.jpg")}
            resizeMode="contain"
            style={styles.image4}
          ></Image>
          <Image
            source={require("../assets/images/IMG-2764.jpg")}
            resizeMode="contain"
            style={styles.image5}
          ></Image>
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
        </View>
        <Text style={styles.gotItCount}>GotIt! Count:</Text>
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
    top: 80,
    left: 0,
    width: 640,
    height: 300,
    position: "absolute"
  },
  ellipse4: {
    top: 0,
    left: 69,
    width: 420,
    height: 180,
    position: "absolute"
  },
  pushUp2: {
    top: 288,
    left: 239,
    position: "absolute",
    fontFamily: "montserrat-700",
    color: "rgba(255,140,0,1)",
    fontSize: 35
  },
  icon2: {
    top: 260,
    left: 455,
    position: "absolute",
    color: "rgba(248,171,28,1)",
    fontSize: 40
  },
  icon1: {
    top: 260,
    left: 143,
    position: "absolute",
    color: "rgba(248,171,28,1)",
    fontSize: 40
  },
  ellipse6: {
    top: 352,
    left: 347,
    width: 156,
    height: 153,
    position: "absolute"
  },
  loremIpsum2: {
    top: 386,
    left: 376,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "rgba(255,140,0,1)",
    fontSize: 73
  },
  ellipse5Stack: {
    top: 0,
    left: 0,
    width: 640,
    height: 505,
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
    top: 96,
    left: 121,
    width: 381,
    height: 263,
    position: "absolute"
  },
  image_imageStyle: {},
  loremIpsum: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 239,
    marginLeft: 162
  },
  image2: {
    top: 50,
    left: 456,
    width: 50,
    height: 50,
    position: "absolute"
  },
  image3: {
    top: 352,
    left: 131,
    width: 50,
    height: 48,
    position: "absolute"
  },
  image4: {
    top: 348,
    left: 455,
    width: 47,
    height: 47,
    position: "absolute"
  },
  image5: {
    top: 46,
    left: 127,
    width: 50,
    height: 50,
    position: "absolute"
  },
  ellipse3: {
    top: 360,
    left: 243,
    width: 140,
    height: 144,
    position: "absolute"
  },
  image6: {
    top: 393,
    left: 283,
    width: 60,
    height: 78,
    position: "absolute"
  },
  ellipseStack: {
    top: 480,
    left: 0,
    width: 633,
    height: 504,
    position: "absolute"
  },
  gotItCount: {
    top: 420,
    left: 171,
    position: "absolute",
    fontFamily: "montserrat-regular",
    color: "rgba(255,255,255,1)",
    lineHeight: 18,
    fontSize: 25
  },
  ellipse5StackStack: {
    width: 640,
    height: 984,
    marginTop: -220,
    marginLeft: -131
  }
});

export default Untitled1;
