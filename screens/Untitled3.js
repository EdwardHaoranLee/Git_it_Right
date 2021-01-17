import React, { Component } from "react";
import { StyleSheet, View, Image, ImageBackground, Text } from "react-native";
import Svg, { Ellipse } from "react-native-svg";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

function Untitled3(props) {
  return (
    <View style={styles.container}>
      <View style={styles.ellipseStackStack}>
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
            <View style={styles.ellipse3Stack}>
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
              <Text style={styles.loremIpsum}>View All My Exericises</Text>
            </View>
          </ImageBackground>
          <Image
            source={require("../assets/images/unnamed_(8).jpg")}
            resizeMode="contain"
            style={styles.image2}
          ></Image>
        </View>
        <Svg viewBox="0 0 531.63 610" style={styles.ellipse2}>
          <Ellipse
            stroke="rgba(230, 230, 230,1)"
            strokeWidth={0}
            fill="rgba(248,171,28,1)"
            cx={266}
            cy={305}
            rx={266}
            ry={305}
          ></Ellipse>
        </Svg>
        <Text style={styles.daysInARow}>Days in a Row!</Text>
        <Text style={styles.loremIpsum3}>Longest Streak: {"\n"}6 Days</Text>
        <Text style={styles.loremIpsum4}>3</Text>
        <Image
          source={require("../assets/images/IMG-27731.jpg")}
          resizeMode="contain"
          style={styles.image3}
        ></Image>
      </View>
      <View style={styles.icon1Row}>
        <EntypoIcon
          name="arrow-with-circle-left"
          style={styles.icon1}
        ></EntypoIcon>
        <MaterialCommunityIconsIcon
          name="home-circle"
          style={styles.icon2}
        ></MaterialCommunityIconsIcon>
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
    left: 38
  },
  image: {
    left: 0,
    width: 414,
    height: 574,
    position: "absolute",
    top: 136
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
    top: 24,
    left: 10,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "rgba(255,140,0,1)",
    fontSize: 45
  },
  ellipse4Stack: {
    width: 100,
    height: 100,
    marginTop: 164,
    marginLeft: 161
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
    top: 18,
    left: 8,
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
    left: 9,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "rgba(255,140,0,1)",
    fontSize: 30
  },
  ellipse6Stack: {
    width: 70,
    height: 70,
    marginLeft: 114,
    marginTop: 1
  },
  ellipse5StackRow: {
    height: 71,
    flexDirection: "row",
    marginTop: 18,
    marginLeft: 77,
    marginRight: 83
  },
  ellipse3: {
    top: 0,
    left: 0,
    width: 250,
    height: 70,
    position: "absolute"
  },
  loremIpsum: {
    top: 24,
    left: 25,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "rgba(255,140,0,1)",
    fontSize: 20
  },
  ellipse3Stack: {
    width: 250,
    height: 70,
    marginTop: 91,
    marginLeft: 81
  },
  image2: {
    top: 8,
    left: 61,
    width: 103,
    height: 134,
    position: "absolute"
  },
  ellipseStack: {
    top: 20,
    left: 60,
    width: 414,
    height: 710,
    position: "absolute"
  },
  ellipse2: {
    top: 210,
    left: 0,
    width: 532,
    height: 610,
    position: "absolute"
  },
  daysInARow: {
    top: 55,
    left: 276,
    position: "absolute",
    fontFamily: "montserrat-700",
    color: "rgba(255,140,0,1)",
    fontSize: 20
  },
  loremIpsum3: {
    top: 123,
    left: 286,
    position: "absolute",
    fontFamily: "montserrat-700italic",
    color: "rgba(248,171,28,1)",
    fontSize: 17,
    textAlign: "center"
  },
  loremIpsum4: {
    top: 0,
    left: 338,
    position: "absolute",
    fontFamily: "montserrat-700",
    color: "rgba(255,140,0,1)",
    fontSize: 40
  },
  image3: {
    top: 80,
    left: 280,
    width: 156,
    height: 40,
    position: "absolute"
  },
  ellipseStackStack: {
    width: 532,
    height: 820,
    marginTop: 90,
    marginLeft: -78
  },
  icon1: {
    color: "rgba(248,171,28,1)",
    fontSize: 40
  },
  icon2: {
    color: "rgba(248,171,28,1)",
    fontSize: 40,
    marginLeft: 272
  },
  icon1Row: {
    height: 44,
    flexDirection: "row",
    marginTop: -870,
    marginLeft: 12,
    marginRight: 11
  }
});

export default Untitled3;
