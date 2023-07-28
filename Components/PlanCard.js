import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { Entypo } from "@expo/vector-icons";
export default function PlanCard() {
  return (
    <View style={styles.plancard}>
      <View style={styles.titles}>
        <Text style={{ fontSize: 13, color: "black" }}>toutor</Text>
        <View style={styles.location}>
          <Entypo name="location-pin" size={14} color="#904646" />
          <Text style={{ fontSize: 12, color: "black" }}>class a</Text>
        </View>
      </View>
      <Text style={{ fontSize: 17, marginLeft: 30, color: "black" }}>
        Digital Signal Progress
      </Text>

      <Text style={{ fontSize: 12, marginLeft: 30, color: "black" }}>
        2:00-8:004
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  plancard: {
    height: 80,
    backgroundColor: "rgba(0, 191, 255, 0.12)",

    width: "96%",
    borderRadius: 10,
    marginVertical: 5,
    display: "flex",
    justifyContent: "space-between",
    shadowColor: "hsla(0, 9.10%, 82.70%, 0.70)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.4,
    shadowRadius: 1.0,

    elevation: 1,
  },
  location: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    alignItems: "center",
  },
  titles: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    width: "100%",
  },
});
