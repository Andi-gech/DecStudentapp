import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import ProfileCircle from "../Components/ProfileCircle";
import Button from "../Components/Button";
import pic from "../assets/profile.png";

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.Header}>Login Here</Text>
      <View style={styles.loginbox}>
        <ProfileCircle width={150} height={150} radius={100} Images={pic} />
        <TextInput
          style={styles.input}
          placeholder="Username"
          secureTextEntry={true}
          cursorColor={"red"}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          cursorColor={"red"}
        />
        <View style={styles.loginbutton}>
          <Button name={"Signup"} onclick={() => navigation.navigate("Home")} />
        </View>
        <Text
          style={styles.sublinks}
          onPress={() => navigation.navigate("Signup")}
        >
          Dont Have An Account?
        </Text>
        <Text
          style={styles.sublinks}
          onPress={() => navigation.navigate("Signup")}
        >
          Do You Forget Your Password
        </Text>
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
  Header: {
    fontSize: 20,
    marginTop: 30,
    marginBottom: 10,
  },
  loginbox: {
    display: "flex",
    flexDirection: "column",
    width: "100%",

    alignItems: "center",
  },
  input: {
    width: "80%",
    height: 50,
    backgroundColor: "#f2f2f2",
    borderRadius: 20,
    marginBottom: 10,
  },
  loginbutton: {
    width: "40%",
    height: 40,
  },
  sublinks: {
    alignSelf: "flex-start",
    marginLeft: 50,
    color: "#0080ff",
    marginTop: 10,
  },
});
