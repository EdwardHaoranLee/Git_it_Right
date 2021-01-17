import React, { Component } from "react";
import { StyleSheet, View, Image, Text, ImageBackground, TouchableOpacity } from "react-native";
import Svg, { Ellipse } from "react-native-svg";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

function Untitled3(props) {
  return (
    <View style={styles.container}>
      <View style={styles.ellipseStackRow}>
        <View style={styles.ellipseStack}>
          <Svg viewBox="0 0 150 150" style={styles.ellipse}>
            <Ellipse
              stroke="rgba(248,171,28,1)"
              strokeWidth={5}
              fill="rgba(255,255,255,1)"
              cx={75}
              cy={75}
              rx={73}
              ry={73}
            ></Ellipse>
          </Svg>
          <Image
            source={require("../assets/images/unnamed_(8).jpg")}
            resizeMode="contain"
            style={styles.image2}
          ></Image>
        </View>
        <View style={styles.loremIpsum4Column}>
          <Text style={styles.loremIpsum4}>3</Text>
          <Text style={styles.daysInARow}>Days in a Row!</Text>
          <Image
            source={require("../assets/images/IMG-27731.jpg")}
            resizeMode="contain"
            style={styles.image3}
          ></Image>
          <Text style={styles.loremIpsum3}>Longest Streak: {"\n"}6 Days</Text>
        </View>
      </View>
      <View style={styles.icon1Row}>
        {/* {"backbutton"} */}
      
      <TouchableOpacity 
        onPress={() => props.navigation.navigate('Menu')}
        >
        <EntypoIcon
              name="arrow-with-circle-left"
              style={styles.icon1}
          ></EntypoIcon>
      </TouchableOpacity>


        <MaterialCommunityIconsIcon
          name="home-circle"
          style={styles.icon2}
        ></MaterialCommunityIconsIcon>
      </View>
      <View style={styles.imageStack}>
        <ImageBackground
          source={require("../assets/images/unnamed_(7)_(1)1.jpg")}
          resizeMode="contain"
          style={styles.image}
          imageStyle={styles.image_imageStyle}
        >
          <View style={styles.ellipse4Stack}>
            <Svg viewBox="0 0 99.5 100" style={styles.ellipse4}>
              <Ellipse
                stroke="rgba(255,140,0,1)"
                strokeWidth={0}
                fill="rgba(255,255,255,1)"
                cx={50}
                cy={50}
                rx={50}
                ry={50}
              ></Ellipse>
            </Svg>
            <Text style={styles.loremIpsum5}>93%</Text>
          </View>
          <View style={styles.ellipse5StackRow}>
            <View style={styles.ellipse5Stack}>
              <Svg viewBox="0 0 69.79 69.72" style={styles.ellipse5}>
                <Ellipse
                  stroke="rgba(255,140,0,1)"
                  strokeWidth={0}
                  fill="rgba(255,255,255,1)"
                  cx={35}
                  cy={35}
                  rx={35}
                  ry={35}
                ></Ellipse>
              </Svg>
              <Text style={styles.loremIpsum6}>87%</Text>
            </View>
            <View style={styles.ellipse6Stack}>
              <Svg viewBox="0 0 69.63 69.72" style={styles.ellipse6}>
                <Ellipse
                  stroke="rgba(255,140,0,1)"
                  strokeWidth={0}
                  fill="rgba(255,255,255,1)"
                  cx={35}
                  cy={35}
                  rx={35}
                  ry={35}
                ></Ellipse>
              </Svg>
              <Text style={styles.loremIpsum7}>82%</Text>
            </View>
          </View>
          <Text style={styles.loremIpsum}>View All My{"\n"} Exericises</Text>
        </ImageBackground>
        <View style={styles.rect}></View>
  
        <Svg viewBox="0 0 250 70" style={styles.ellipse3}>
          <Ellipse
            stroke="rgba(230, 230, 230,1)"
            strokeWidth={0}
            fill="rgba(255,255,255,1)"
            cx={125}
            cy={35}
            rx={125}
            ry={35}
          ></Ellipse>
          
        </Svg>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  ellipse: {
    top: 0,
    width: 150,
    height: 150,
    position: "absolute",
    left: 0
  },
  image2: {
    top: 8,
    left: 27,
    width: 103,
    height: 134,
    position: "absolute"
  },
  ellipseStack: {
    width: 150,
    height: 150,
    marginTop: 14
  },
  loremIpsum4: {
    fontFamily: "montserrat-700",
    color: "rgba(255,140,0,1)",
    fontSize: 40,
    marginLeft: 62
  },
  daysInARow: {
    fontFamily: "montserrat-700",
    color: "rgba(255,140,0,1)",
    fontSize: 20,
    marginTop: 6
  },
  image3: {
    width: 156,
    height: 40,
    marginLeft: 4
  },
  loremIpsum3: {
    fontFamily: "montserrat-700italic",
    color: "rgba(248,171,28,1)",
    fontSize: 17,
    textAlign: "center",
    marginTop: 3,
    marginLeft: 10
  },
  loremIpsum4Column: {
    width: 160,
    marginLeft: 40
  },
  ellipseStackRow: {
    height: 164,
    flexDirection: "row",
    marginTop: 96,
    marginLeft: 30,
    marginRight: 34
  },
  icon1: {
    color: "rgba(248,171,28,1)",
    fontSize: 40,
    marginTop: 4
  },
  icon2: {
    color: "rgba(248,171,28,1)",
    fontSize: 40,
    marginLeft: 301
  },
  icon1Row: {
    height: 48,
    flexDirection: "row",
    marginTop: -224,
    marginLeft: 17,
    marginRight: 16
  },
  image: {
    left: 0,
    width: 459,
    height: 540,
    position: "absolute",
    top: 0
  },
  image_imageStyle: {},
  ellipse4: {
    top: 0,
    left: 0,
    width: 100,
    height: 100,
    position: "absolute"
  },
  loremIpsum5: {
    top: 26,
    left: 8,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "rgba(255,140,0,1)",
    fontSize: 45
  },
  ellipse4Stack: {
    width: 100,
    height: 100,
    marginTop: 140,
    marginLeft: 179
  },
  ellipse5: {
    top: 0,
    left: 0,
    width: 70,
    height: 70,
    position: "absolute",
    transform: [
      {
        rotate: "182.00deg"
      }
    ]
  },
  loremIpsum6: {
    top: 17,
    left: 5,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "rgba(255,140,0,1)",
    fontSize: 30
  },
  ellipse5Stack: {
    width: 70,
    height: 70
  },
  ellipse6: {
    top: 0,
    left: 0,
    width: 70,
    height: 70,
    position: "absolute",
    transform: [
      {
        rotate: "182.00deg"
      }
    ]
  },
  loremIpsum7: {
    top: 17,
    left: 7,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "rgba(255,140,0,1)",
    fontSize: 30
  },
  ellipse6Stack: {
    width: 70,
    height: 70,
    marginLeft: 131,
    marginTop: 5
  },
  ellipse5StackRow: {
    height: 75,
    flexDirection: "row",
    marginTop: 24,
    marginLeft: 92,
    marginRight: 96
  },
  loremIpsum: {
    fontFamily: "roboto-700",
    color: "rgba(255,140,0,1)",
    fontSize: 25,
    marginTop: 136,
    marginLeft: 165
  },
  rect: {
    top: 520,
    left: 22,
    width: 414,
    height: 116,
    position: "absolute",
    backgroundColor: "rgba(248,171,28,1)"
  },
  ellipse3: {
    top: 450,
    left: 104,
    width: 250,
    height: 110,
    position: "absolute"
  },
  imageStack: {
    width: 459,
    height: 636,
    marginTop: 176,
    marginLeft: -22
  }
});

export default Untitled3;
