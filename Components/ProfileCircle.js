import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function ProfileCircle({ width, height, radius, Images }) {
  return (
    <View style={styles.container}>
      <Image
        style={{ width: width, height: height, borderRadius: radius }}
        source={Images}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
