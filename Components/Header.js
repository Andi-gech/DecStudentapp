import { StyleSheet, Text, View, TouchableNativeFeedback } from "react-native";
import React from "react";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";

import pic from "../assets/profile2.jpg";
import ProfileCircle from "./ProfileCircle";
export default function Header({ onclick }) {
  return (
    <View style={styles.header}>
      <ProfileCircle width={50} height={50} Images={pic} radius={29} />
      <TouchableNativeFeedback onPress={onclick}>
        <FontAwesome name="bars" size={30} />
      </TouchableNativeFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    display: "flex",
    width: "100%",

    paddingHorizontal: 15,
    backgroundColor: "#FAFAFA",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
