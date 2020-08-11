import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import Card from "./Card";
import { ListProps } from "../store/types/types";

const List = ({ facelist }: ListProps) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={facelist}
        keyExtractor={(face) => face.id}
        renderItem={({ item }) => <Card face={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default List;
