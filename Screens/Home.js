import { StyleSheet, Text, TouchableNativeFeedback, View } from "react-native";
import React from "react";
import ProfileCircle from "../Components/ProfileCircle";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import pic from "../assets/profile2.jpg";
export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ProfileCircle width={50} height={50} Images={pic} radius={29} />
        <FontAwesome name="bars" size={30} />
      </View>
      <View>
        <Text style={{ fontSize: 30 }}>
          HI <Text style={{ fontSize: 20, color: "orange" }}>Andi</Text>
        </Text>
      </View>
      <View style={styles.body}>
        <TouchableNativeFeedback>
          <View style={styles.card}>
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
  header: {
    display: "flex",
    width: "94%",
    marginTop: 10,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
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
