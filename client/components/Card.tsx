import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { CardProps } from "../store/types/types";

const Card = ({ face }: CardProps) => {
  return (
    <View style={styles.card}>
      <View style={styles.textContainer}>
        <Text style={styles.name}>{face.name}</Text>
      </View>
      <Image source={{ uri: face.avatar }} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 25,
    backgroundColor: "#fff",
    width: "90%",
    marginVertical: 10,
    padding: 5,
  },
  textContainer: {
    flex: 1,
    alignItems: "center",
  },
  name: {
    fontSize: 16,
    color: "#6e6969",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});

export default Card;
