import {
  StyleSheet,
  Text,
  View,
  StatusBar as MobileStatusbar,
} from "react-native";
import React from "react";
import WellcomeScreen from "./Screens/Wellcomescreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./Screens/Login";
import Signup from "./Screens/Signup";
import Home from "./Screens/Home";
import Studentsys from "./Screens/Studentsys";
import Entrance from "./Screens/Entrance";
import Entances from "./Screens/Entances";
import EntranceDetail from "./Screens/EntranceDetail";
import Libarary from "./Screens/Libarary";
import Menu from "./Screens/Menu";
import Header from "./Components/Header";
import bookdetail from "./Screens/Bookdetail";
import Bookdetail from "./Screens/Bookdetail";

const Stack = createNativeStackNavigator();

export default function App({ navigation }) {
  const leftToRightAnimation = {
    cardStyleInterpolator: ({ current, layouts }) => {
      return {
        cardStyle: {
          transform: [
            {
              translateX: current.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [-layouts.screen.width, 0],
              }),
            },
          ],
        },
      };
    },
  };
  const config = {
    animation: "spring",
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
  };
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={({ navigation }) => ({
            header: () => (
              <Header
                onclick={() => {
                  navigation.navigate("menu");
                }}
              />
            ),
          })}
        >
          <Stack.Screen
            options={{
              headerShown: false,
              transitionSpec: {
                open: config,
                close: config,
              },
            }}
            name="Wellcome"
            component={WellcomeScreen}
          />
          <Stack.Screen
            options={{
              headerShown: false,
              transitionSpec: {
                open: config,
                close: config,
              },
            }}
            name="Login"
            component={Login}
          />
          <Stack.Screen
            options={{
              headerShown: false,
              transitionSpec: {
                open: config,
                close: config,
              },
            }}
            name="Signup"
            component={Signup}
          />
          <Stack.Screen
            options={{
              transitionSpec: {
                open: config,
                close: config,
              },
            }}
            name="StudentSys"
            component={Studentsys}
          />
          <Stack.Screen
            options={{
              transitionSpec: {
                open: config,
                close: config,
              },
            }}
            name="Home"
            component={Home}
          />
          <Stack.Screen
            options={{
              transitionSpec: {
                open: config,
                close: config,
              },
            }}
            name="Entrancesys"
            component={Entances}
          />
          <Stack.Screen
            options={{
              transitionSpec: {
                open: config,
                close: config,
              },
            }}
            name="request"
            component={Entrance}
          />
          <Stack.Screen
            options={{
              transitionSpec: {
                open: config,
                close: config,
              },
            }}
            name="detail"
            component={EntranceDetail}
          />
          <Stack.Screen
            options={{
              transitionSpec: {
                open: config,
                close: config,
              },
            }}
            name="library"
            component={Libarary}
          />
          <Stack.Screen
            options={{
              animation: "slide_from_right",
            }}
            name="menu"
            component={Menu}
          />
          <Stack.Screen
            options={{
              transitionSpec: {
                open: config,
                close: config,
              },
            }}
            name="bookdetail"
            component={Bookdetail}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: MobileStatusbar.currentHeight,
    display: "flex",

    justifyContent: "center",
  },
});
