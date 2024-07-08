import React, { useState } from "react";
import { Pressable, Text } from "react-native";

import { styles } from "./Styles";
import { AppTextInput } from "../AppTextInput/Index";

import * as Clipboard from "expo-clipboard";
import generatePass from "../../services/passwordService";

export function GenerateButton() {
  const [pass, setPass] = useState("");

  function handleGenerateButton() {
    const generateToken = generatePass();
    setPass(generateToken);
  }

  function handleCopyButton() {
    Clipboard.setStringAsync(pass);
  }

  return (
    <>
      <AppTextInput pass={pass} />
      <Pressable style={styles.button} onPress={handleGenerateButton}>
        <Text style={styles.text}>GENERATE</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={handleCopyButton}>
        <Text style={styles.text}>COPY 🚀</Text>
      </Pressable>
    </>
  );
}

{
  /* 
  Outra maneira de criar um button
  <Button
      onPress={() => {
        console.log("Cliquei");
      }}
      title="CLICK AQUI"
      accessibilityLabel="Click em mim"
      color="#841584"
    /> 
      */
}
