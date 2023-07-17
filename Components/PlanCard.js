import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { Entypo } from "@expo/vector-icons";
export default function PlanCard() {
  return (
    <View style={styles.plancard}>
      <View style={styles.titles}>
        <Text style={{ fontSize: 13, color: "gray" }}>toutor</Text>
        <View style={styles.location}>
          <Entypo name="location-pin" size={14} color="#904646" />
          <Text style={{ fontSize: 12 }}>class a</Text>
        </View>
      </View>
      <Text style={{ fontSize: 17, marginLeft: 30 }}>
        Digital Signal Progress
      </Text>

      <Text style={{ fontSize: 12, marginLeft: 30, color: "gray" }}>
        2:00-8:00
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  plancard: {
    height: 80,
    backgroundColor: "rgba(227, 227, 227, 3.21)",
    width: "96%",
    borderRadius: 10,
    marginVertical: 5,
    display: "flex",
    justifyContent: "space-between",
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
