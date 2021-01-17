import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";

function Figure0(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Image
        source={require("../assets/images/IMG-2751.jpg")}
        resizeMode="contain"
        style={styles.image3}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  image3: {
    width: 113,
    height: 115
  }
});

export default Figure0;
