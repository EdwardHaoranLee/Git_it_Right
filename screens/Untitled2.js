import React, { Component } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import Svg, { Ellipse } from "react-native-svg";
import Icon from "react-native-vector-icons/FontAwesome";


function Untitled2(props) {
  return (
    <View style={styles.container}>
      <View style={styles.ellipseStack}>
        <Svg viewBox="0 0 522.5 710" style={styles.ellipse}>
          <Ellipse
            stroke="rgba(230, 230, 230,1)"
            strokeWidth={0}
            fill="rgba(248,171,28,1)"
            cx={261}
            cy={355}
            rx={261}
            ry={355}
          ></Ellipse>
        </Svg>
        <Svg viewBox="0 0 440 420" style={styles.ellipse3}>
          <Ellipse
            stroke="rgba(230, 230, 230,1)"
            strokeWidth={0}
            fill="rgba(255,255,255,1)"
            cx={220}
            cy={210}
            rx={220}
            ry={210}
          ></Ellipse>
        </Svg>
        <Image
          source={require("../assets/images/unnamed_(4).jpg")}
          resizeMode="contain"
          style={styles.image1}
        ></Image>
        <TouchableOpacity 
          activeOpacity={.7}
          onPress={() => props.navigation.navigate('Menu')}
          >
          <Svg viewBox="0 0 139.75 143.75" style={styles.ellipse4}>
            
            <Ellipse
              stroke="rgba(255,255,255,1)"
              strokeWidth={11}
              fill="rgba(255,140,0,1)"
              cx={70}
              cy={72}
              rx={64}
              ry={66}
            ></Ellipse>
          </Svg>
          <Text style={styles.loremIpsum}>TRY!</Text>
        </TouchableOpacity>



        <Svg viewBox="0 0 293.25 113.19" style={styles.ellipse6}>
          <Ellipse
            stroke="rgba(255,255,255,1)"
            strokeWidth={10}
            fill="rgba(255,140,0,1)"
            cx={147}
            cy={57}
            rx={142}
            ry={52}
          ></Ellipse>
        </Svg>
        <Text style={styles.featuringToday}>Give it Right</Text>
        <Icon name="user-circle" style={styles.icon}></Icon>
      </View>
      <View style={styles.ellipse2StackRow}>
        <View style={styles.ellipse2Stack}>
          <Svg viewBox="0 0 160 100" style={styles.ellipse2}>
            <Ellipse
              stroke="rgba(230, 230, 230,1)"
              strokeWidth={0}
              fill="rgba(248,171,28,1)"
              cx={80}
              cy={50}
              rx={80}
              ry={50}
            ></Ellipse>
          </Svg>
          <Text style={styles.browseCatalogue}>Browse{"\n"} Catalogue</Text>
        </View>
        <View style={styles.ellipse5Stack}>
          <Svg viewBox="0 0 163.5 100" style={styles.ellipse5}>
            <Ellipse
              stroke="rgba(230, 230, 230,1)"
              strokeWidth={0}
              fill="rgba(248,171,28,1)"
              cx={82}
              cy={50}
              rx={82}
              ry={50}
            ></Ellipse>
          </Svg>
          <Text style={styles.browseCatalogue1}>
            Continue{"\n"}Last Exercise
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  ellipse: {
    top: 0,
    width: 557,
    height: 840,
    position: "absolute",
    left: 0
  },
  ellipse3: {
    top: 240,
    left: 28,
    width: 500,
    height: 489,
    position: "absolute"
  },
  image1: {
    top: 340,
    width: 360,
    height: 360,
    position: "absolute",
    left: 95
  },
  ellipse4: {
    top: 676,
    left: 203,
    width: 140,
    height: 144,
    position: "absolute"
  },
  loremIpsum: {
    top: 720,
    left: 220,
    position: "absolute",
    fontFamily: "montserrat-700",
    color: "rgba(255,255,255,1)",
    fontSize: 45
  },
  ellipse6: {
    top: 247,
    left: 131,
    width: 293,
    height: 113,
    position: "absolute"
  },
  featuringToday: {
    top: 285,
    left: 205,
    position: "absolute",
    fontFamily: "montserrat-700",
    color: "rgba(255,255,255,1)",
    fontSize: 29
  },
  icon: {
    top: 160,
    left: 414,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 40
  },
  ellipseStack: {
    width: 557,
    height: 840,
    marginTop: -120,
    marginLeft: -68
  },
  ellipse2: {
    top: 0,
    left: 0,
    width: 160,
    height: 100,
    position: "absolute"
  },
  browseCatalogue: {
    position: "absolute",
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 25,
    left: 20,
    top: 20,
    textAlign: "center"
  },
  ellipse2Stack: {
    width: 160,
    height: 100
  },
  ellipse5: {
    top: 0,
    left: 0,
    width: 164,
    height: 100,
    position: "absolute"
  },
  browseCatalogue1: {
    position: "absolute",
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 25,
    left: 8,
    top: 14,
    textAlign: "center"
  },
  ellipse5Stack: {
    width: 164,
    height: 100,
    marginLeft: 43,
    marginTop: 4
  },
  ellipse2StackRow: {
    height: 106,
    flexDirection: "row",
    marginTop: -10,
    marginLeft: 20,
    marginRight: 27
  }
});

export default Untitled2;
