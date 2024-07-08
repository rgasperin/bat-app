import React from "react";
import { Text, Image, View } from "react-native";

import { styles } from "./Styles";
import logo from "../../../assets/bat-logo.png";

export function Logo() {
  return (
    <View>
      <Text style={styles.title}>BAT PASS GENERATOR</Text>
      <Image style={styles.img} source={logo} />
    </View>
  );
}
