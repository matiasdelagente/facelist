import React from "react";
import renderer from "react-test-renderer";
import { FlatList } from "react-native";

import Card from "../components/Card";
import List from "../components/List";

const facelist = [
  {
    id: "1",
    avatar: "https://i.pravatar.cc/150?img=1",
    name: "Morgan James",
  },
  {
    id: "2",
    avatar: "https://i.pravatar.cc/150?img=2",
    name: "Esme Coleman",
  },
];

describe("List", () => {
  it("has 1 child", () => {
    const tree = renderer.create(<List facelist={facelist} />).toJSON();
    expect(tree.children.length).toBe(1);
  });
  it("renders a flatlist with facelist data", () => {
    const tree = renderer.create(<List facelist={facelist} />);
    const treeInstance = tree.root;

    expect(treeInstance.findByType(FlatList).props.data).toBe(facelist);
  });
  it("renders a flatlist key extractor fn", () => {
    const tree = renderer.create(<List facelist={facelist} />);
    const treeInstance = tree.root;

    expect(treeInstance.findByType(FlatList).props.keyExtractor(facelist[0])).toBe("1");
  });
  it("renders a flatlist that renders 2 Card componentes", () => {
    const tree = renderer.create(<List facelist={facelist} />);
    const treeInstance = tree.root;

    expect(treeInstance.findAllByType(Card).length).toBe(2);
  });
});
