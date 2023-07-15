import { StyleSheet, Text, TouchableNativeFeedback, View } from "react-native";
import React from "react";

import Ionicons from "@expo/vector-icons/Ionicons";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import CircleStatusnumber from "../Components/CircleStatusnumber";
import Header from "../Components/Header";
export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Header />
      <View>
        <Text style={{ fontSize: 30 }}>
          HI <Text style={{ fontSize: 20, color: "orange" }}>Andi</Text>
        </Text>
      </View>
      <View style={styles.body}>
        <TouchableNativeFeedback
          onPress={() => navigation.navigate("StudentSys")}
        >
          <View style={styles.card}>
            <View style={{ position: "absolute", top: 0, right: 0, zIndex: 2 }}>
              <CircleStatusnumber
                radius={20}
                number={18}
                width={25}
                height={25}
                color="white"
              />
            </View>
            <MaterialIcons name="cast-for-education" size={24} color="black" />
            <Text>Student Sys</Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback>
          <View style={styles.card}>
            <Entypo
              name="text-document"
              size={24}
              color="black"
              style={{ fontWeight: "100" }}
            />
            <Text style={{ fontWeight: "100" }}>Attendance Sys</Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback>
          <View style={styles.card}>
            <FontAwesome5 name="door-open" size={24} color="black" />
            <Text>Entrance Sys</Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback>
          <View style={styles.card}>
            <Ionicons name="library-outline" size={24} color="black" />
            <Text>library Sys</Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback>
          <View style={styles.card}>
            <Ionicons name="md-restaurant-outline" size={24} color="black" />
            <Text>Cafe Sys</Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback>
          <View style={styles.card}>
            <AntDesign name="calculator" size={24} color="black" />
            <Text>Grade calculator</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",

    alignItems: "center",

    display: "flex",
  },

  body: {
    flex: 1,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  card: {
    height: 130,
    width: 130,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    borderRadius: 5,
    shadowColor: "hsla(0, 9.10%, 82.70%, 0.70)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.4,
    shadowRadius: 1.0,

    elevation: 1,
  },
});
