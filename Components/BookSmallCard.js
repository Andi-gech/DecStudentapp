import {
  Image,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
} from "react-native";
import React from "react";
import pic from "../assets/book.jpg";
import { AntDesign } from "@expo/vector-icons";
export default function BookSmallCard({
  image,
  name,
  discription,
  navigation,
}) {
  return (
    <TouchableNativeFeedback
      onPress={() =>
        navigation.navigate("bookdetail", {
          bookimage: { image: image, description: discription },
        })
      }
    >
      <View style={styles.smallcard}>
        <Image source={image} style={styles.image} />
        <View style={styles.title}>
          <Text numberOfLines={2} style={{ fontSize: 19, fontWeight: "bold" }}>
            {name}
          </Text>
          <Text numberOfLines={3} style={{ color: "gray" }}>
            {discription}
          </Text>
          <View style={styles.rating}>
            <AntDesign name="star" size={15} color="orange" />
            <AntDesign name="star" size={15} color="orange" />
            <AntDesign name="star" size={15} color="orange" />
            <AntDesign name="staro" size={15} color="black" />
            <AntDesign name="staro" size={15} color="black" />
          </View>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
}

const styles = StyleSheet.create({
  rating: {
    display: "flex",
    flexDirection: "row",
  },
  smallcard: {
    width: 350,
    height: 150,
    backgroundColor: "white",
    overflow: "hidden",
    padding: 10,
    marginVertical: 10,
    display: "flex",
    flexDirection: "row",
  },
  image: {
    width: 100,
    height: "100%",
  },
  title: {
    display: "flex",
    flexDirection: "column",

    padding: 10,

    width: "60%",
    height: "100%",
  },
});
