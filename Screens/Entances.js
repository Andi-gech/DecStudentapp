import { StyleSheet, Text, TouchableNativeFeedback, View } from "react-native";
import React from "react";
import PlanCard from "../Components/PlanCard";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import Header from "../Components/Header";

export default function Entances({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 17 }}>Request History </Text>
      <TouchableNativeFeedback
        onPress={() =>
          navigation.navigate("detail", {
            message: "f=detail meessaes 1",
            Data: false,
          })
        }
      >
        <View style={styles.card}>
          <FontAwesome5 name="door-closed" size={24} color="gray" />
          <Text>12-33-2013</Text>
          <AntDesign name="checkcircle" size={24} color="red" />
        </View>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback
        onPress={() =>
          navigation.navigate("detail", {
            message: "f=detail meessaes 2",
            Data: true,
          })
        }
      >
        <View style={styles.card}>
          <FontAwesome5 name="door-open" size={24} color="gray" />
          <Text>12-33-2013</Text>
          <AntDesign name="checkcircle" size={24} color="green" />
        </View>
      </TouchableNativeFeedback>

      <TouchableNativeFeedback onPress={() => navigation.navigate("request")}>
        <View style={styles.add}>
          <AntDesign name="pluscircle" size={24} color="white" />
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",

    alignItems: "center",

    display: "flex",
  },
  card: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 20,
    height: 100,
    margin: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    shadowColor: "hsla(0, 9.10%, 82.70%, 0.70)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.4,
    shadowRadius: 1.0,

    elevation: 1,
  },
  add: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "orange",
    width: "40%",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    borderRadius: 20,
  },
});
