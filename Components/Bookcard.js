import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ImageBackground } from "react-native";
import pic from "../assets/book.jpg";

export default function Bookcard({ name, images }) {
  return (
    <ImageBackground source={images} style={styles.card}>
      <Text>f{name}</Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 200,
    height: 250,
    backgroundColor: "white",
    marginHorizontal: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    borderRadius: 10,
    overflow: "hidden",
  },
});
