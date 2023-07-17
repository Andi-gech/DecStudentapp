import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ProfileCircle from "../Components/ProfileCircle";

import pic from "../assets/profile2.jpg";

export default function Message() {
  return (
    <View style={styles.message}>
      <ProfileCircle Images={pic} width={50} radius={26} height={50} />
      <Text style={styles.messagetext} numberOfLines={2} ellipsizeMode="tail">
        Attention For Every Student Tommorow to ggon 25-jan-2015 we have meeting
        at 12 O'clock at admin office
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
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
    backgroundColor: "rgba(227, 227, 227, 3.21)",

    margin: 5,
  },
});
