import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import FaceListScreen from "./screens/FaceListScreen";
import facesReducer from "./store/reducers/faces";

const store = createStore(facesReducer, applyMiddleware(thunk));

export default function App() {
  return (
    <SafeAreaView style={styles.screen}>
      <Provider store={store}>
        <FaceListScreen />
      </Provider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#f8f4f4",
  },
});
