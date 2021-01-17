import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Touchable
} from "react-native";
import Backbutton from "../components/Backbutton";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Svg, { Ellipse } from "react-native-svg";
import Figure0 from "../components/Figure0";

function CatalogueByExercise(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rectStack}>
        <View style={styles.rect}>
          <View style={styles.backbuttonRow}>
            <Backbutton style={styles.backbutton}></Backbutton>
            <Icon name="home-circle" style={styles.icon2}></Icon>
          </View>
          <Text style={styles.exerciseCatalogue}>Exercise Catalogue</Text>
        </View>
        <View style={styles.scrollArea}>
          <ScrollView
            horizontal={false}
            contentContainerStyle={styles.scrollArea_contentContainerStyle}
          >
            <View style={styles.rect2Stack}>
              <View style={styles.rect2}>
                <View style={styles.rect3Row}>
                  <View style={styles.rect3}>
                    <View style={styles.ellipse4Stack}>
                      <TouchableOpacity>
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
                        <Figure0 style={styles.figure0}></Figure0>
                      </TouchableOpacity>


                      
                      <Svg viewBox="0 0 54.95 55.22" style={styles.ellipse10}>
                        <Ellipse
                          stroke="rgba(248,171,28,1)"
                          strokeWidth={5}
                          fill="rgba(255,255,255,1)"
                          cx={27}
                          cy={28}
                          rx={25}
                          ry={25}
                        ></Ellipse>
                      </Svg>
                      <Text style={styles.loremIpsum}></Text>
                      <Text style={styles.loremIpsum2}>93%</Text>
                    </View>
                  </View>
                  <View style={styles.group2Stack}>
                    <View style={styles.group2}>
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
                          source={require("../assets/images/IMG-2750.jpg")}
                          resizeMode="contain"
                          style={styles.image2}
                        ></Image>
                        <Text style={styles.loremIpsum3}>87%</Text>
                      </View>
                    </View>
                    <Svg viewBox="0 0 54.95 55.22" style={styles.ellipse9}>
                      <Ellipse
                        stroke="rgba(248,171,28,1)"
                        strokeWidth={5}
                        fill="rgba(255,255,255,1)"
                        cx={27}
                        cy={28}
                        rx={25}
                        ry={25}
                      ></Ellipse>
                    </Svg>
                  </View>
                </View>
                <View style={styles.groupStackRow}>
                  <View style={styles.groupStack}>
                    <View style={styles.group}>
                      <Text style={styles.loremIpsum6}>80%</Text>
                      <View style={styles.ellipse2Stack}>

                        <TouchableOpacity
                          onPress={() => props.navigation.navigate({
                            name:'Preview',
                            params:{videoId: 1}
                            })
                          
                          }
                        >
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
                            source={require("../assets/images/IMG-2749.jpg")}
                            resizeMode="contain"
                            style={styles.image}
                          ></Image>

                        </TouchableOpacity>


                        <Svg viewBox="0 0 54.95 55.22" style={styles.ellipse8}>
                          <Ellipse
                            stroke="rgba(248,171,28,1)"
                            strokeWidth={5}
                            fill="rgba(255,255,255,1)"
                            cx={27}
                            cy={28}
                            rx={25}
                            ry={25}
                          ></Ellipse>
                        </Svg>
                      </View>
                    </View>
                    <Text style={styles.loremIpsum7}>82%</Text>
                  </View>
                  <View style={styles.group4}>
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
                        source={require("../assets/images/IMG-2752.jpg")}
                        resizeMode="contain"
                        style={styles.image4}
                      ></Image>
                      <Svg viewBox="0 0 54.95 55.22" style={styles.ellipse11}>
                        <Ellipse
                          stroke="rgba(248,171,28,1)"
                          strokeWidth={5}
                          fill="rgba(255,255,255,1)"
                          cx={27}
                          cy={28}
                          rx={25}
                          ry={25}
                        ></Ellipse>
                      </Svg>
                      <Text style={styles.loremIpsum5}>80%</Text>
                    </View>
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
                      source={require("../assets/images/IMG-2754.jpg")}
                      resizeMode="contain"
                      style={styles.image5}
                    ></Image>
                    <Svg viewBox="0 0 54.95 55.22" style={styles.ellipse12}>
                      <Ellipse
                        stroke="rgba(248,171,28,1)"
                        strokeWidth={5}
                        fill="rgba(255,255,255,1)"
                        cx={27}
                        cy={28}
                        rx={25}
                        ry={25}
                      ></Ellipse>
                    </Svg>
                    <Text style={styles.loremIpsum8}>73%</Text>
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
                      source={require("../assets/images/IMG-2753.jpg")}
                      resizeMode="contain"
                      style={styles.image6}
                    ></Image>
                    <Svg viewBox="0 0 54.95 55.22" style={styles.ellipse13}>
                      <Ellipse
                        stroke="rgba(248,171,28,1)"
                        strokeWidth={5}
                        fill="rgba(255,255,255,1)"
                        cx={27}
                        cy={28}
                        rx={25}
                        ry={25}
                      ></Ellipse>
                    </Svg>
                    <Text style={styles.loremIpsum9}>60%</Text>
                  </View>
                </View>
              </View>
              {/* <Svg viewBox="0 0 500 400" style={styles.ellipse}>
                <Ellipse
                  stroke="rgba(230, 230, 230,1)"
                  strokeWidth={0}
                  fill="rgba(255,255,255,1)"
                  cx={250}
                  cy={200}
                  rx={250}
                  ry={200}
                ></Ellipse>
              </Svg> */}
              {/* <Text style={styles.byExercise}>By{"\n"}Exercise</Text>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.byMuscleGrps}>By{"\n"}Muscle Grps</Text>
              </TouchableOpacity> */}
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rect: {
    top: 0,
    left: 0,
    width: 656,
    height: 289,
    position: "absolute",
    backgroundColor: "rgba(248,171,28,1)",
    borderRadius: 100
  },
  backbutton: {
    height: 44,
    width: 40
  },
  icon2: {
    color: "rgba(255,255,255,1)",
    fontSize: 40,
    height: 44,
    width: 40,
    marginLeft: 293
  },
  backbuttonRow: {
    height: 44,
    flexDirection: "row",
    marginTop: 52,
    marginLeft: 177,
    marginRight: 106
  },
  exerciseCatalogue: {
    fontFamily: "montserrat-700",
    color: "rgba(255,255,255,1)",
    fontSize: 33,
    marginTop: 36,
    marginLeft: 198
  },
  scrollArea: {
    top: 100,
    left: 88,
    width: 551,
    height: 698,
    position: "absolute"
  },
  scrollArea_contentContainerStyle: {
    height: 698,
    width: 551
  },
  rect2: {
    top: 113,
    left: 5,
    width: 546,
    height: 585,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)"
  },
  rect3: {
    width: 158,
    height: 145,
    marginTop: 14
  },
  ellipse4: {
    top: 10,
    left: 0,
    width: 150,
    height: 150,
    position: "absolute"
  },
  figure0: {
    position: "absolute",
    top: 29,
    left: 19,
    height: 115,
    width: 113
  },
  ellipse10: {
    top: 0,
    left: 111,
    width: 55,
    height: 55,
    position: "absolute"
  },
  loremIpsum: {
    top: 11,
    left: 125,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  loremIpsum2: {
    top: 17,
    left: 123,
    position: "absolute",
    fontFamily: "montserrat-700",
    color: "rgba(248,171,28,1)",
    fontSize: 15
  },
  ellipse4Stack: {
    width: 166,
    height: 160,
    marginTop: -10
  },
  group2: {
    top: 9,
    left: 0,
    width: 150,
    height: 150,
    position: "absolute"
  },
  ellipse3: {
    top: 0,
    left: 0,
    width: 150,
    height: 150,
    position: "absolute"
  },
  image2: {
    top: 25,
    left: 19,
    width: 115,
    height: 106,
    position: "absolute"
  },
  loremIpsum3: {
    top: 9,
    left: 112,
    position: "absolute",
    fontFamily: "montserrat-700",
    color: "rgba(248,171,28,1)",
    fontSize: 15
  },
  ellipse3Stack: {
    width: 150,
    height: 150
  },
  ellipse9: {
    top: 0,
    left: 97,
    width: 55,
    height: 55,
    position: "absolute"
  },
  group2Stack: {
    width: 152,
    height: 159,
    marginLeft: 57
  },
  rect3Row: {
    height: 159,
    flexDirection: "row",
    marginTop: 5,
    marginLeft: 84,
    marginRight: 95
  },
  group: {
    left: 0,
    width: 150,
    height: 150,
    position: "absolute",
    top: 0
  },
  loremIpsum6: {
    fontFamily: "montserrat-700",
    color: "rgba(248,171,28,1)",
    fontSize: 15,
    marginTop: -552,
    marginLeft: 83
  },
  ellipse2: {
    top: 14,
    left: 0,
    width: 150,
    height: 150,
    position: "absolute"
  },
  image: {
    top: 18,
    left: 23,
    width: 106,
    height: 143,
    position: "absolute"
  },
  ellipse8: {
    top: 0,
    left: 111,
    width: 55,
    height: 55,
    position: "absolute"
  },
  ellipse2Stack: {
    width: 166,
    height: 164,
    marginTop: 519
  },
  loremIpsum7: {
    top: 3,
    left: 124,
    position: "absolute",
    fontFamily: "montserrat-700",
    color: "rgba(248,171,28,1)",
    fontSize: 15
  },
  groupStack: {
    width: 156,
    height: 150
  },
  group4: {
    width: 110,
    height: 115,
    marginLeft: 76,
    marginTop: 19
  },
  ellipse5: {
    top: 10,
    left: 0,
    width: 150,
    height: 150,
    position: "absolute"
  },
  image4: {
    top: 28,
    left: 23,
    width: 110,
    height: 115,
    position: "absolute"
  },
  ellipse11: {
    top: 0,
    left: 105,
    width: 55,
    height: 55,
    position: "absolute"
  },
  loremIpsum5: {
    top: 20,
    left: 118,
    position: "absolute",
    fontFamily: "montserrat-700",
    color: "rgba(248,171,28,1)",
    fontSize: 15
  },
  ellipse5Stack: {
    width: 160,
    height: 160,
    marginTop: -28,
    marginLeft: -23
  },
  groupStackRow: {
    height: 150,
    flexDirection: "row",
    marginTop: 53,
    marginLeft: 83,
    marginRight: 121
  },
  ellipse6: {
    top: 12,
    left: 0,
    width: 150,
    height: 150,
    position: "absolute"
  },
  image5: {
    top: 24,
    left: 31,
    width: 90,
    height: 125,
    position: "absolute"
  },
  ellipse12: {
    top: 0,
    left: 103,
    width: 55,
    height: 55,
    position: "absolute"
  },
  loremIpsum8: {
    top: 20,
    left: 120,
    position: "absolute",
    fontFamily: "montserrat-700",
    color: "rgba(248,171,28,1)",
    fontSize: 15
  },
  ellipse6Stack: {
    width: 158,
    height: 162,
    marginTop: 7
  },
  ellipse7: {
    top: 15,
    left: 0,
    width: 150,
    height: 150,
    position: "absolute"
  },
  image6: {
    top: 35,
    left: 30,
    width: 98,
    height: 104,
    position: "absolute"
  },
  ellipse13: {
    top: 0,
    left: 93,
    width: 55,
    height: 55,
    position: "absolute"
  },
  loremIpsum9: {
    top: 19,
    left: 104,
    position: "absolute",
    fontFamily: "montserrat-700",
    color: "rgba(248,171,28,1)",
    fontSize: 15
  },
  ellipse7Stack: {
    width: 150,
    height: 165,
    marginLeft: 54
  },
  ellipse6StackRow: {
    height: 169,
    flexDirection: "row",
    marginTop: 37,
    marginLeft: 84,
    marginRight: 100
  },
  ellipse: {
    width: 500,
    height: 400,
    position: "absolute",
    left: 0,
    top: 0
  },
  byExercise: {
    top: 17,
    left: 118,
    position: "absolute",
    fontFamily: "montserrat-regular",
    color: "rgba(248,171,28,1)",
    fontSize: 27,
    textAlign: "right"
  },
  button: {
    top: 0,
    left: 268,
    width: 214,
    height: 91,
    position: "absolute",
    backgroundColor: "rgba(255,140,0,1)"
  },
  byMuscleGrps: {
    fontFamily: "montserrat-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 27,
    marginTop: 17,
    marginLeft: 20
  },
  rect2Stack: {
    width: 551,
    height: 698
  },
  rectStack: {
    width: 656,
    height: 918,
    marginTop: -12,
    marginLeft: -156
  }
});

export default CatalogueByExercise;
