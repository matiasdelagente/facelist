import React from "react";
import renderer from "react-test-renderer";
import { TouchableOpacity, Text } from "react-native";

import Button from "../components/Button";

describe("Button", () => {
  it("has 1 child", () => {
    const tree = renderer.create(<Button />).toJSON();
    expect(tree.children.length).toBe(1);
  });
  it("renders a Touchable Opacity Component", () => {
    const tree = renderer.create(<Button />);
    const treeInstance = tree.root;

    expect(treeInstance.findAllByType(TouchableOpacity).length).toBe(1);
  });
  it("renders a Text Component", () => {
    const tree = renderer.create(<Button />);
    const treeInstance = tree.root;

    expect(treeInstance.findAllByType(Text).length).toBe(1);
  });
  it("renders the title passed", () => {
    const tree = renderer.create(<Button title="title" />);
    const treeInstance = tree.root;

    expect(treeInstance.findByType(Text).props.children).toBe("title");
  });
  it("renders the title passed", () => {
    const fn = () => {};
    const tree = renderer.create(<Button onPress={fn} />);
    const treeInstance = tree.root;

    expect(treeInstance.findByType(TouchableOpacity).props.onPress).toBe(fn);
  });
});
