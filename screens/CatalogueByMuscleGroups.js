import React, { Component } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Text
} from "react-native";
import Svg, { Ellipse } from "react-native-svg";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

function CatalogueByMuscleGroups(props) {
  return (
    <View style={styles.container}>
      <View style={styles.scrollArea1}>
        <ScrollView
          horizontal={false}
          contentContainerStyle={styles.scrollArea1_contentContainerStyle}
        >
          <View style={styles.rect1Stack}>
            <View style={styles.rect1}>
              <View style={styles.ellipse2StackRow}>
                <View style={styles.ellipse2Stack}>
                  <Svg viewBox="0 0 150 150.27" style={styles.ellipse2}>
                    <Ellipse
                      stroke="rgba(230, 230, 230,1)"
                      strokeWidth={0}
                      fill="rgba(248,171,28,1)"
                      cx={75}
                      cy={75}
                      rx={75}
                      ry={75}
                    ></Ellipse>
                  </Svg>
                  <Image
                    source={require("../assets/images/IMG-2761.jpg")}
                    resizeMode="contain"
                    style={styles.image}
                  ></Image>
                </View>
                <View style={styles.ellipse3Stack}>
                  <Svg viewBox="0 0 150 150.27" style={styles.ellipse3}>
                    <Ellipse
                      stroke="rgba(230, 230, 230,1)"
                      strokeWidth={0}
                      fill="rgba(248,171,28,1)"
                      cx={75}
                      cy={75}
                      rx={75}
                      ry={75}
                    ></Ellipse>
                  </Svg>
                  <Image
                    source={require("../assets/images/IMG-2760.jpg")}
                    resizeMode="contain"
                    style={styles.image2}
                  ></Image>
                </View>
              </View>
              <View style={styles.ellipse4StackRow}>
                <View style={styles.ellipse4Stack}>
                  <Svg viewBox="0 0 150 150.27" style={styles.ellipse4}>
                    <Ellipse
                      stroke="rgba(230, 230, 230,1)"
                      strokeWidth={0}
                      fill="rgba(248,171,28,1)"
                      cx={75}
                      cy={75}
                      rx={75}
                      ry={75}
                    ></Ellipse>
                  </Svg>
                  <Image
                    source={require("../assets/images/IMG-2759.jpg")}
                    resizeMode="contain"
                    style={styles.image3}
                  ></Image>
                </View>
                <View style={styles.ellipse5Stack}>
                  <Svg viewBox="0 0 150 150.27" style={styles.ellipse5}>
                    <Ellipse
                      stroke="rgba(230, 230, 230,1)"
                      strokeWidth={0}
                      fill="rgba(248,171,28,1)"
                      cx={75}
                      cy={75}
                      rx={75}
                      ry={75}
                    ></Ellipse>
                  </Svg>
                  <Image
                    source={require("../assets/images/IMG-2758.jpg")}
                    resizeMode="contain"
                    style={styles.image4}
                  ></Image>
                </View>
              </View>
              <View style={styles.ellipse6StackRow}>
                <View style={styles.ellipse6Stack}>
                  <Svg viewBox="0 0 150 150.27" style={styles.ellipse6}>
                    <Ellipse
                      stroke="rgba(230, 230, 230,1)"
                      strokeWidth={0}
                      fill="rgba(248,171,28,1)"
                      cx={75}
                      cy={75}
                      rx={75}
                      ry={75}
                    ></Ellipse>
                  </Svg>
                  <Image
                    source={require("../assets/images/IMG-2755.jpg")}
                    resizeMode="contain"
                    style={styles.image6}
                  ></Image>
                </View>
                <View style={styles.ellipse7Stack}>
                  <Svg viewBox="0 0 150 150.27" style={styles.ellipse7}>
                    <Ellipse
                      stroke="rgba(230, 230, 230,1)"
                      strokeWidth={0}
                      fill="rgba(248,171,28,1)"
                      cx={75}
                      cy={75}
                      rx={75}
                      ry={75}
                    ></Ellipse>
                  </Svg>
                  <Image
                    source={require("../assets/images/IMG-2756.jpg")}
                    resizeMode="contain"
                    style={styles.image5}
                  ></Image>
                </View>
              </View>
            </View>
            <Svg viewBox="0 0 500 400" style={styles.ellipse1}>
              <Ellipse
                stroke="rgba(230, 230, 230,1)"
                strokeWidth={0}
                fill="rgba(255,255,255,1)"
                cx={250}
                cy={200}
                rx={250}
                ry={200}
              ></Ellipse>
            </Svg>
            <TouchableOpacity style={styles.button1}>
              <Text style={styles.byExercise3}>By {"\n"}Exercise</Text>
            </TouchableOpacity>
            <Text style={styles.byMuscleGrps}>By{"\n"}Muscle Grps</Text>
          </View>
        </ScrollView>
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
      <Text style={styles.exerciseCatalogue1}>Exercise Catalogue</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(248,171,28,1)"
  },
  scrollArea1: {
    width: 551,
    height: 698,
    marginTop: 208,
    marginLeft: -64
  },
  scrollArea1_contentContainerStyle: {
    height: 698,
    width: 551
  },
  rect1: {
    top: 113,
    left: 5,
    width: 546,
    height: 585,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)"
  },
  ellipse2: {
    left: 0,
    width: 150,
    height: 150,
    position: "absolute",
    top: 0
  },
  image: {
    top: 26,
    left: 3,
    width: 131,
    height: 98,
    position: "absolute"
  },
  ellipse2Stack: {
    width: 150,
    height: 150
  },
  ellipse3: {
    top: 0,
    left: 0,
    width: 150,
    height: 150,
    position: "absolute"
  },
  image2: {
    top: 23,
    left: 19,
    width: 109,
    height: 102,
    position: "absolute"
  },
  ellipse3Stack: {
    width: 150,
    height: 150,
    marginLeft: 32
  },
  ellipse2StackRow: {
    height: 150,
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 80,
    marginRight: 134
  },
  ellipse4: {
    top: 0,
    left: 0,
    width: 150,
    height: 150,
    position: "absolute"
  },
  image3: {
    top: 18,
    left: 17,
    width: 119,
    height: 110,
    position: "absolute"
  },
  ellipse4Stack: {
    width: 150,
    height: 150
  },
  ellipse5: {
    top: 0,
    left: 0,
    width: 150,
    height: 150,
    position: "absolute"
  },
  image4: {
    top: 9,
    left: 17,
    width: 115,
    height: 137,
    position: "absolute"
  },
  ellipse5Stack: {
    width: 150,
    height: 150,
    marginLeft: 31
  },
  ellipse4StackRow: {
    height: 150,
    flexDirection: "row",
    marginTop: 51,
    marginLeft: 81,
    marginRight: 134
  },
  ellipse6: {
    top: 0,
    left: 0,
    width: 150,
    height: 150,
    position: "absolute"
  },
  image6: {
    top: 16,
    left: 14,
    width: 119,
    height: 124,
    position: "absolute"
  },
  ellipse6Stack: {
    width: 150,
    height: 150
  },
  ellipse7: {
    top: 0,
    left: 0,
    width: 150,
    height: 150,
    position: "absolute"
  },
  image5: {
    top: 0,
    left: 19,
    width: 104,
    height: 126,
    position: "absolute"
  },
  ellipse7Stack: {
    width: 150,
    height: 150,
    marginLeft: 36
  },
  ellipse6StackRow: {
    height: 150,
    flexDirection: "row",
    marginTop: 55,
    marginLeft: 83,
    marginRight: 127
  },
  ellipse1: {
    width: 500,
    height: 400,
    position: "absolute",
    left: 0,
    top: 0
  },
  button1: {
    top: 0,
    left: 55,
    width: 198,
    height: 91,
    position: "absolute",
    backgroundColor: "rgba(255,140,0,1)"
  },
  byExercise3: {
    fontFamily: "montserrat-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 27,
    textAlign: "right",
    marginTop: 17,
    marginLeft: 51
  },
  byMuscleGrps: {
    top: 17,
    left: 259,
    position: "absolute",
    fontFamily: "montserrat-regular",
    color: "rgba(248,171,28,1)",
    fontSize: 27,
    textAlign: "left"
  },
  rect1Stack: {
    width: 551,
    height: 698
  },
  icon1: {
    color: "rgba(255,255,255,1)",
    fontSize: 40
  },
  icon2: {
    color: "rgba(255,255,255,1)",
    fontSize: 40,
    marginLeft: 272
  },
  icon1Row: {
    height: 44,
    flexDirection: "row",
    marginTop: -866,
    marginLeft: 12,
    marginRight: 11
  },
  exerciseCatalogue1: {
    fontFamily: "montserrat-700",
    color: "rgba(255,255,255,1)",
    fontSize: 33,
    marginTop: 27,
    marginLeft: 21
  }
});

export default CatalogueByMuscleGroups;
