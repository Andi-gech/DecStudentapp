import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../Components/Header";
import { Feather } from "@expo/vector-icons";
import ProfileCircle from "../Components/ProfileCircle";

import pic from "../assets/profile2.jpg";
export default function Studentsys() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.body}>
        <View style={styles.notify}>
          <Feather name="bell" size={24} color="gray" />
          <View style={styles.message}>
            <ProfileCircle Images={pic} width={50} radius={26} height={50} />
            <Text
              style={styles.messagetext}
              numberOfLines={2}
              ellipsizeMode="tail"
            >
              Attention For Every Student Tommorow to ggon 25-jan-2015 we have
              meeting at 12 O'clock at admin office
            </Text>
          </View>
          <View style={styles.message}>
            <ProfileCircle Images={pic} width={50} radius={26} height={50} />
            <Text
              style={styles.messagetext}
              numberOfLines={2}
              ellipsizeMode="tail"
            >
              Attention For Every Student Tommorow to ggon 25-jan-2015 we have
              meeting at 12 O'clock at admin office
            </Text>
          </View>
        </View>
        <View style={styles.planning}></View>
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
  messagetext: {
    width: "80%",
    marginLeft: 5,
  },
  message: {
    backgroundColor: "white",
    height: 100,
    width: "90%",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 10,

    alignSelf: "center",
    backgroundColor: "rgba(227, 227, 227, 3.11)",

    margin: 5,
  },
  body: {
    flex: 1,
    width: "95%",
    marginTop: 10,
  },
  notify: {
    flex: 1,

    borderRadius: 20,
    display: "flex",

    width: "100%",
  },
  planning: {
    flex: 2,
    marginTop: 30,
    borderRadius: 40,
    backgroundColor: "rgba(227, 227, 227, 0.21)",
    width: "100%",
  },
});
