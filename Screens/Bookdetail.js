import {
  ImageBackground,
  StyleSheet,
  Animated,
  Text,
  View,
} from "react-native";
import React, { useRef, useState } from "react";
import pic from "../assets/book.jpg";
import { AntDesign } from "@expo/vector-icons";
import { TouchableNativeFeedback } from "react-native";

import { Camera, CameraType } from "expo-camera";
import { BarCodeScanner } from "expo-barcode-scanner";
export default function Bookdetail({ route }) {
  const { bookimage } = route.params;
  const [type, setType] = useState(CameraType.back);
  const [starts, setStartCamera] = useState(false);
  const [borrrowed, setborrowed] = useState(false);

  const [permission, requestPermission] = Camera.useCameraPermissions();

  const __startCamera = async () => {
    console.log(requestPermission);
    requestPermission();
    if (permission.granted) {
      console.log(permission.granted, "camer");
      setStartCamera(true);
    }
  };

  const translateY = useRef(new Animated.Value(0)).current;

  const startAnimation = () => {
    Animated.loop(
      Animated.timing(translateY, {
        toValue: 185,
        duration: 1900,
        useNativeDriver: true,
      })
    ).start();
  };
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        {!starts && (
          <ImageBackground
            resizeMode="stretch"
            source={bookimage.image}
            style={styles.image}
          ></ImageBackground>
        )}
        {borrrowed && (
          <View style={styles.alert}>
            <Text style={{ fontSize: 20 }}>You have succesfully borrowed</Text>
            <Text style={{ fontSize: 20, color: "orange" }}>
              Thank You For using our Service
            </Text>
            <TouchableNativeFeedback onPress={() => setborrowed(false)}>
              <View style={styles.button}>
                <Text style={{ color: "white", fontSize: 17 }}>exit</Text>
              </View>
            </TouchableNativeFeedback>
          </View>
        )}
        {starts && (
          <Camera
            barCodeScannerSettings={{
              barCodeTypes: [BarCodeScanner.Constants.BarCodeType.qr],
            }}
            onBarCodeScanned={(data) => {
              console.log(data), setStartCamera(false);
              setborrowed(true);
            }}
            type={type}
            style={{
              flex: 1,
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View style={styles.rectangle}>
              <Animated.View
                style={{
                  transform: [{ translateY }],
                  backgroundColor: "rgb(23, 90, 0)",
                  width: "100%",
                  height: 5,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              ></Animated.View>
              <View style={styles.topLeftBorder} />
              <View style={styles.topRightBorder} />
              <View style={styles.bottomRightBorder} />
              <View style={styles.bottomLeftBorder} />
            </View>
          </Camera>
        )}
        <View style={styles.discriptioncontainer}>
          <View style={styles.inlineebutton}>
            <TouchableNativeFeedback
              onPress={() => {
                __startCamera(), startAnimation();
              }}
            >
              <View style={styles.button}>
                <Text style={{ color: "white", fontSize: 17 }}>Borrow</Text>
              </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback>
              <View style={styles.button}>
                <Text style={{ color: "white", fontSize: 17 }}>Add To Fav</Text>
              </View>
            </TouchableNativeFeedback>
          </View>
          <View style={styles.description}>
            <Text>{bookimage.description}</Text>
            <View style={styles.rating}>
              <AntDesign name="star" size={15} color="orange" />
              <AntDesign name="star" size={15} color="orange" />
              <AntDesign name="star" size={15} color="orange" />
              <AntDesign name="staro" size={15} color="black" />
              <AntDesign name="staro" size={15} color="black" />
            </View>
          </View>
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
  rating: {
    display: "flex",
    flexDirection: "row",
  },
  button: {
    backgroundColor: "rgb(122, 0, 136)",

    width: 100,
    height: 50,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inlineebutton: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 40,
    marginTop: -20,
  },
  body: {
    flex: 1,

    width: "100%",
    display: "flex",
  },
  image: {
    flex: 1,
    backgroundColor: "black",
    borderBottomLeftRadius: 40,
    overflow: "hidden",
    borderBottomRightRadius: 40,
  },
  discriptioncontainer: {
    flex: 1,
  },
  alert: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    backgroundColor: "white",
    height: 400,
    borderRadius: 50,
    zIndex: 1,
    width: "90%",
    top: "20%",
    left: "5%",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 1.4,
    shadowRadius: 1.0,

    elevation: 1,
  },
  rectangle: {
    position: "relative",
    width: 200,
    height: 200,
  },
  topLeftBorder: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 20,
    height: 20,
    borderTopWidth: 5,
    borderLeftWidth: 5,
    borderColor: "white",
    borderTopLeftRadius: 5,
  },
  bottomLeftBorder: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: 20,
    height: 20,
    borderBottomWidth: 5,
    borderLeftWidth: 5,
    borderColor: "white",
    borderTopLeftRadius: 5,
  },

  topRightBorder: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 20,
    height: 20,
    borderTopWidth: 5,
    borderRightWidth: 5,
    borderColor: "white",
    borderBottomRightRadius: 5,
  },
  bottomRightBorder: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 20,
    height: 20,
    borderBottomWidth: 5,
    borderRightWidth: 2,
    borderColor: "white",
    borderBottomRightRadius: 5,
  },
  description: {
    width: "100%",

    height: 300,
    marginTop: 10,
    padding: 30,
  },
});
