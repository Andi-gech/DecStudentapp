import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import ProfileCircle from "../Components/ProfileCircle";
import Button from "../Components/Button";
import DateTimePicker from "@react-native-community/datetimepicker";
import Ionicons from "@expo/vector-icons/Ionicons";
import { FontAwesome } from "@expo/vector-icons";
import pic from "../assets/profile.png";
export default function Signup({ navigation }) {
  const dates = new Date();
  const [date, setDate] = useState(dates);
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    if (event.type === "set") {
      // User clicked "OK"
      setDate(selectedDate);
    }
    setShow(false);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.Header}>create an account</Text>
      <View style={styles.loginbox}>
        <ProfileCircle Images={pic} width={150} height={150} radius={100} />

        <TextInput
          style={styles.input}
          placeholder="Full name"
          cursorColor={"red"}
        />
        <View style={styles.caladerinput}>
          <Text style={styles.Calndertitle}>Birth </Text>
          <FontAwesome
            onPress={() => setShow(true)}
            name="calendar"
            size={24}
            color="orange"
            style={{ marginLeft: 10 }}
          />

          <Text style={styles.Calndertext}>
            {date.toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </Text>
        </View>
        {show && (
          <DateTimePicker
            value={dates}
            mode={"date"}
            display={Platform.OS === "ios" ? "spinner" : "default"}
            is24Hour={true}
            onChange={onChange}
            style={styles.datePicker}
          />
        )}

        <TextInput
          style={styles.input}
          placeholder="Email"
          cursorColor={"red"}
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          cursorColor={"red"}
        />

        <TextInput
          style={styles.input}
          placeholder="Year joined"
          cursorColor={"red"}
        />

        <TextInput
          style={styles.input}
          placeholder="id No"
          cursorColor={"red"}
        />

        <View style={styles.loginbutton}>
          <Button name={"Signup"} onclick={() => navigation.navigate("Home")} />
        </View>
        <Text
          style={styles.sublinks}
          onPress={() => navigation.navigate("Login")}
        >
          Already Have An Account?
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
  caladerinput: {
    display: "flex",
    flexDirection: "row",
    width: "80%",
    marginTop: 10,
    marginBottom: 10,
    alignItems: "center",
  },
  Calndertext: {
    fontSize: 20,
    color: "rgba(156, 149, 149, 0.64)",
  },
  Calndertitle: {
    fontSize: 17,
    color: "black",
  },
});
