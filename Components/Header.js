import { StyleSheet, Text, View, TouchableNativeFeedback } from "react-native";
import React from "react";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";

import pic from "../assets/profile2.jpg";
import ProfileCircle from "./ProfileCircle";
export default function Header() {
  return (
    <View style={styles.header}>
      <ProfileCircle width={50} height={50} Images={pic} radius={29} />

      <TouchableNativeFeedback>
        <FontAwesome name="bars" size={30} />
      </TouchableNativeFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    display: "flex",
    width: "94%",
    marginTop: 10,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
