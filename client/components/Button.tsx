import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

import { ButtonProps } from "../store/types/types";

const Button = ({ onPress, title }: ButtonProps) => {
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor: "tomato" }]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "tomato",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "90%",
    marginVertical: 10,
  },
  text: {
    color: "white",
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default Button;
