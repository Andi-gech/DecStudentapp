import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableNativeFeedback,
  View,
} from "react-native";
import React from "react";

export default function Button({ name, onclick }) {
  return (
    <TouchableNativeFeedback onPress={onclick}>
      <View style={styles.container}>
        <Text>{name}</Text>
      </View>
    </TouchableNativeFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "orange",

    borderRadius: 10,
  },
});
