import React from "react";
import renderer from "react-test-renderer";
import { Text, Image } from "react-native";

import Card from "../components/Card";

const face = {
  id: "1",
  avatar: "https://i.pravatar.cc/150?img=1",
  name: "Morgan James",
};

describe("Card", () => {
  it("has 1 child", () => {
    const tree = renderer.create(<Card face={face} />).toJSON();
    expect(tree.children.length).toBe(2);
  });
  it("renders name", () => {
    const tree = renderer.create(<Card face={face} />);
    const treeInstance = tree.root;

    expect(treeInstance.findByType(Text).props.children).toBe("Morgan James");
  });
  it("renders Image", () => {
    const tree = renderer.create(<Card face={face} />);
    const treeInstance = tree.root;

    expect(treeInstance.findByType(Image).props.source.uri).toBe(face.avatar);
  });
  it("renders view with", () => {
    const tree = renderer.create(<Card face={face} />);
    const treeInstance = tree.root;

    expect(treeInstance.findByType(Image).props.source.uri).toBe(face.avatar);
  });
});
