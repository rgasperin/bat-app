import React from "react";
import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";

import styles from "./Style";

import { Logo } from "../../components/Logo/Index";
import { AppTextInput } from "../../components/AppTextInput/Index";
import { GenerateButton } from "../../components/GenerateButton/Index";

export default function Home() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.logoContainer}>
        <Logo />
      </View>

      <View style={styles.inputContainer}>
        <GenerateButton />
      </View>

      <StatusBar style="light" />
    </View>
  );
}
