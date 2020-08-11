import React from "react";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import FaceListScreen from "../screens/FaceListScreen";
import Button from "../components/Button";
import List from "../components/List";

describe("FaceListScreen", () => {
  const initialState = { faces: [] };
  const mockStore = configureStore();
  let store;

  it("render 2 childs", () => {
    store = mockStore(initialState);
    const tree = renderer
      .create(
        <Provider store={store}>
          <FaceListScreen />
        </Provider>
      )
      .toJSON();
    expect(tree.children.length).toBe(2);
  });
  it("renders a Button Component", () => {
    store = mockStore(initialState);
    const tree = renderer.create(
      <Provider store={store}>
        <FaceListScreen />
      </Provider>
    );
    const treeInstance = tree.root;

    expect(treeInstance.findAllByType(Button).length).toBe(1);
  });
  it("renders a List component", () => {
    store = mockStore(initialState);
    const tree = renderer.create(
      <Provider store={store}>
        <FaceListScreen />
      </Provider>
    );
    const treeInstance = tree.root;

    expect(treeInstance.findAllByType(List).length).toBe(1);
  });
  it("should be able to dispatch an action", () => {
    store = mockStore(initialState);
    const tree = renderer.create(
      <Provider store={store}>
        <FaceListScreen />
      </Provider>
    );
    const treeInstance = tree.root;

    expect(treeInstance.findAllByType(List).length).toBe(1);
  });
});
