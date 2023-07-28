import {
  StyleSheet,
  Text,
  TextInput,
  TouchableNativeFeedback,
  View,
} from "react-native";
import React, { useState } from "react";
import Header from "../Components/Header";
import { Entypo, FontAwesome } from "@expo/vector-icons";
import Button from "../Components/Button";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function Entrance({ navigation }) {
  const dates = new Date();
  const [date, setDate] = useState(dates);
  const [message, setmessage] = useState("");
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
      <Text style={{ marginTop: 20 }}>REQUEST PERMISSTIONS</Text>
      <Text style={{ alignSelf: "flex-start", marginTop: 20, marginLeft: 20 }}>
        Reason
      </Text>
      <TextInput
        c
        multiline={true}
        style={styles.input}
        onChangeText={(e) => {
          setmessage(e);
        }}
      />
      <Text style={{ alignSelf: "flex-start", marginTop: 20, marginLeft: 20 }}>
        Date
      </Text>
      <TouchableNativeFeedback onPress={() => setShow(true)}>
        <View style={styles.dateinput}>
          <Text>
            {" "}
            {date.toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </Text>
          <FontAwesome
            name="calendar"
            size={24}
            color="orange"
            style={{ marginLeft: 10 }}
          />
        </View>
      </TouchableNativeFeedback>
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

      <View style={styles.Button}>
        <Button
          name={"Request"}
          onclick={() => {
            navigation.navigate("detail", {
              message: "f=detail meessaes new",
              Data: true,
            });
          }}
        />
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
  Button: {
    height: 50,
    width: 200,
    marginVertical: 20,
  },
  input: {
    width: "93%",
    height: 200,
    backgroundColor: "#f2f2f2",
    borderRadius: 20,
    marginVertical: 10,
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    textAlignVertical: "top",
  },
  box: {
    width: "80%",
    backgroundColor: "rgb(191, 0, 255)",
    height: 100,
    marginTop: 13,
    borderRadius: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  dateinput: {
    width: "93%",
    height: 50,

    backgroundColor: "#f2f2f2",
    marginVertical: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
});
