import { StyleSheet, Text, View, Image } from "react-native";

import Background from "../Backgoundovals";
import Button from "../Components/Button";

export default function WellcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Background />
      <View style={styles.images}>
        <Image source={require("../assets/wellcome.png")} />
        <Text>DEFENCE UNIVERSITY OF ENGINNERING</Text>
        <Text>STUDENT APP</Text>
      </View>
      <View style={styles.buttonscontainer}>
        <View style={styles.button}>
          <Button name={"Login"} onclick={() => navigation.navigate("Login")} />
        </View>

        <View style={styles.button}>
          <Button
            name={"Signup"}
            onclick={() => navigation.navigate("Signup")}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",

    alignItems: "center",
    justifyContent: "space-between",
    display: "flex",
  },
  images: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100,

    height: 400,
  },
  button: {
    height: 40,
    width: "80%",
    margin: 5,
  },
  buttonscontainer: {
    width: "100%",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
});
