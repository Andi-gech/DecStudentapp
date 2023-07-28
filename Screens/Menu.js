import { StyleSheet, Text, TouchableNativeFeedback, View } from "react-native";
import React from "react";
import ProfileCircle from "../Components/ProfileCircle";
import pic from "../assets/profile2.jpg";
import Header from "../Components/Header";
import { Feather } from "@expo/vector-icons";

export default function Menu({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <ProfileCircle Images={pic} width={100} height={100} radius={50} />
        <Text style={styles.userName}>
          @Andi725 <Feather name="copy" size={16} color="gray" />
        </Text>

        <View style={styles.buttoncontainer}>
          <View style={styles.button}>
            <Text>Account</Text>
          </View>
          <View style={styles.button}>
            <Text>Setting</Text>
          </View>
          <View style={styles.button}>
            <Text>lang-Eng</Text>
          </View>
          <TouchableNativeFeedback onPress={() => navigation.navigate("Login")}>
            <View style={styles.button}>
              <Text>LogOut</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
      </View>
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
  body: {
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
  button: {
    width: "100%",
    backgroundColor: "rgba(8, 7, 7, 0.10)",
    height: 60,
    marginTop: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  userName: {
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 10,
    color: "blue",
  },
  buttoncontainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    marginTop: 30,
  },
});
