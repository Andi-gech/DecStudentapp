import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../Components/Header";
import { AntDesign } from "@expo/vector-icons";
import pic from "../assets/qr.png";

export default function EntranceDetail({ route }) {
  const { message, Data } = route.params;
  const Status = true;
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20 }}>Requested Leave</Text>
      <View
        style={{
          ...styles.cards,
          backgroundColor: Data ? "rgba(143, 255, 0, 1)" : "red",
        }}
      >
        <View style={styles.Text}>
          <View style={styles.inlines}>
            <Text style={styles.textfont}>!9-12-340</Text>
            <AntDesign name="downcircle" size={24} color="black" />
          </View>
          <Text style={styles.textfont}>{`Status:${
            Data ? `Approved` : `Declined`
          }`}</Text>
        </View>
        {Data && <Image source={pic} style={{ width: 250, height: 250 }} />}
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
  textfont: { fontSize: 17, fontWeight: "bold" },
  inlines: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  cards: {
    width: "85%",
    height: 382,

    display: "flex",
    alignItems: "center",
    borderRadius: 20,
    marginTop: 20,
  },
  Text: {
    height: 100,

    display: "flex",
    justifyContent: "center",

    width: "90%",
  },
});
