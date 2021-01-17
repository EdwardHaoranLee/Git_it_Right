import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Svg, { Ellipse } from "react-native-svg";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

function Untitled(props) {
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
          <Image
            source={require("../assets/images/unnamed_(4).jpg")}
            resizeMode="contain"
            style={styles.image}
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
            source={require("../assets/images/unnamed_(5).jpg")}
            resizeMode="contain"
            style={styles.image2}
          ></Image>
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
        <Text style={styles.pushUp}>Push-Up</Text>
      </View>
      <View style={styles.icon1StackRow}>
        <View style={styles.icon1Stack}>
          <EntypoIcon
            name="arrow-with-circle-left"
            style={styles.icon1}
          ></EntypoIcon>
          <EntypoIcon
            name="arrow-with-circle-left"
            style={styles.icon2}
          ></EntypoIcon>
        </View>
        <MaterialCommunityIconsIcon
          name="home-circle"
          style={styles.icon3}
        ></MaterialCommunityIconsIcon>
      </View>
      <View style={styles.ellipse4Stack}>
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
    top: 104,
    width: 550,
    height: 413,
    position: "absolute",
    left: 0
  },
  ellipse2: {
    top: 0,
    left: 275,
    width: 171,
    height: 164,
    position: "absolute"
  },
  loremIpsum: {
    top: 16,
    left: 309,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  loremIpsum1: {
    top: 54,
    left: 305,
    position: "absolute",
    fontFamily: "montserrat-700",
    color: "rgba(255,140,0,1)",
    fontSize: 55
  },
  yourveGotten: {
    top: 32,
    left: 308,
    position: "absolute",
    fontFamily: "montserrat-700",
    color: "rgba(248,171,28,1)",
    fontSize: 15
  },
  right: {
    top: 121,
    left: 338,
    position: "absolute",
    fontFamily: "montserrat-700",
    color: "rgba(248,171,28,1)",
    fontSize: 15
  },
  image: {
    top: 95,
    left: 40,
    width: 441,
    height: 442,
    position: "absolute"
  },
  ellipse3: {
    top: 430,
    left: 206,
    width: 140,
    height: 144,
    position: "absolute"
  },
  image2: {
    top: 466,
    left: 240,
    width: 76,
    height: 76,
    position: "absolute"
  },
  ellipse5: {
    top: 4,
    left: 507,
    width: 400,
    height: 133,
    position: "absolute"
  },
  ellipseStack: {
    top: 0,
    left: 0,
    width: 907,
    height: 574,
    position: "absolute"
  },
  pushUp: {
    top: 18,
    left: 110,
    position: "absolute",
    fontFamily: "montserrat-700",
    color: "rgba(255,255,255,1)",
    fontSize: 35
  },
  ellipseStackStack: {
    width: 907,
    height: 574,
    marginTop: 96,
    marginLeft: -87
  },
  icon1: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 40
  },
  icon2: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 40
  },
  icon1Stack: {
    width: 40,
    height: 44
  },
  icon3: {
    color: "rgba(255,255,255,1)",
    fontSize: 40,
    marginLeft: 272
  },
  icon1StackRow: {
    height: 44,
    flexDirection: "row",
    marginTop: -630,
    marginLeft: 12,
    marginRight: 11
  },
  ellipse4: {
    top: 0,
    left: 0,
    width: 234,
    height: 77,
    position: "absolute"
  },
  tryItMyself: {
    top: 22,
    left: 39,
    position: "absolute",
    fontFamily: "montserrat-700",
    color: "rgba(255,140,0,1)",
    fontSize: 25
  },
  ellipse4Stack: {
    width: 234,
    height: 77,
    marginTop: 610,
    marginLeft: 74
  }
});

export default Untitled;
