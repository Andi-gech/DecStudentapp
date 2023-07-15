import { StyleSheet, View, StatusBar as MobileStatusbar } from "react-native";
import React from "react";
import { Svg, Path, SvgUri } from "react-native-svg";

export default function Background() {
  return (
    <View style={styles.container}>
      <View style={styles.balls2}>
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width="384"
          height="239"
          viewBox="0 0 384 239"
          fill="none"
        >
          <Path
            d="M668 86.5C668 170.723 518.463 239 334 239C149.537 239 0 170.723 0 86.5C0 2.27657 149.537 -66 334 -66C518.463 -66 668 2.27657 668 86.5Z"
            fill="#00D1FF"
            fillOpacity="0.24"
          />
        </Svg>
      </View>
      <View style={styles.balls1}>
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width="280"
          height="333"
          viewBox="0 0 280 333"
          fill="none"
        >
          <Path
            d="M280 133.5C280 243.681 144.79 333 -22 333C-188.79 333 -324 243.681 -324 133.5C-324 23.3192 -188.79 -66 -22 -66C144.79 -66 280 23.3192 280 133.5Z"
            fill="#00D1FF"
            fillOpacity="0.24"
          />
        </Svg>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
    top: 0,
  },

  balls1: {
    position: "absolute",
    top: -MobileStatusbar.currentHeight,
    right: -30,
  },
  balls2: {
    position: "absolute",
    left: -140,
    top: -MobileStatusbar.currentHeight,
  },
});
