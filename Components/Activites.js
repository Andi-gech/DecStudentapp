import { StyleSheet, Text, View } from "react-native";
import React from "react";
import * as Progress from "react-native-progress";

export default function Activites() {
  return (
    <View style={styles.activities}>
      <Text style={styles.texts}>Digital Signal</Text>
      <Progress.Bar
        progress={0.3}
        width={350}
        height={8}
        color="orange"
        borderWidth={0}
        unfilledColor="#FAFAFA"
        animated
      />
    </View>
  );
}

const styles = StyleSheet.create({
  activities: {
    marginVertical: 5,
    padding: 2,
  },
  texts: {
    marginBottom: 10,
    color: "black",
    fontWeight: "normal",
  },
});
