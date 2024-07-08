import React from "react";
import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import styles from "./Style";
import { Logo } from "../../components/Logo/Index";

export default function Home() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.logoContainer}>
        <Logo />
      </View>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
