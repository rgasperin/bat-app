import React from "react";
import { TextInput } from "react-native";

import { styles } from "./Styles";

interface AppTextInputProps {
  pass: string;
}

export function AppTextInput(props: AppTextInputProps) {
  return <TextInput style={styles.input} placeholder="pass" value={props.pass} />;
}
