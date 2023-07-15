import { ImageBackground, StyleSheet, Text, View } from "react-native";

import React from "react";

export default function Bubble() {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    zIndex: 0,
    left: 0,
    right: 0,

    position: "absolute",
  },
});
