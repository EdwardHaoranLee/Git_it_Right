import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/Entypo";

function Backbutton(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Icon name="arrow-with-circle-left" style={styles.icon}></Icon>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  icon: {
    color: "rgba(255,255,255,1)",
    fontSize: 40
  }
});

export default Backbutton;
