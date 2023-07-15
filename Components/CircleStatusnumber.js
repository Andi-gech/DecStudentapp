import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function CircleStatusnumber({
  number,
  width,
  height,
  radius,
  color,
}) {
  return (
    <View
      style={{
        width: width,
        height: height,
        borderRadius: radius,
        backgroundColor: "red",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ color: color, fontWeight: "bold" }}>{number}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
