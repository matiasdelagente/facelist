import React, { useEffect } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import List from "../components/List";
import Button from "../components/Button";
import { fetchFaces } from "../store/actions/faces";
import { AppState } from "../store/types/types";

const FaceListScreen: React.FunctionComponent = () => {
  const faces = useSelector((state: AppState) => state.faces);
  const loading = useSelector((state: AppState) => state.loading);
  const dispatch = useDispatch();

  const handleFetch = () => {
    dispatch(fetchFaces());
  };

  return (
    <View style={styles.container}>
      <Button onPress={handleFetch} title="Load faces" />
      {loading && <ActivityIndicator />}
      <List facelist={faces} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 25,
  },
});

export default FaceListScreen;
