import React from "react";
import { TreeData } from "../model";

import Tree from "./Tree";
// import { finished } from "stream";
type Props = {};
type State = {
  trees: Array<TreeData>;
  id: number;
  commonName: string;
  scientificName: string;
  numLikes: number;
};
class PopularTrees extends React.Component<Props, State> {
  state: State = {
    trees: [
      {
        id: 1,
        commonName: "White birch",
        scientificName: "Betula pendula",
        numLikes: 0
      },
      {
        id: 2,
        commonName: "Weeping willow",
        scientificName: "Salix sepulcralis",
        numLikes: 0
      },
      {
        id: 3,
        commonName: "London planetree",
        scientificName: "Platanus hybryda",
        numLikes: 0
      } //map over the arr
    ],
    id: Math.trunc(Math.random() * 100),
    commonName: "",
    scientificName: "",
    numLikes: 0
  };

  addTree = () => {
    console.log("adding a tree");
    const newTree = {
      id: this.state.id,
      commonName: this.state.commonName,
      scientificName: this.state.scientificName,
      numLikes: 0
    };
    this.setState({
      trees: [...this.state.trees, newTree]
    });
  };

  handleLike = (id: number) => {
    const updatedTrees = this.state.trees.map(tree => {
      if (tree.id === id) {
        return { ...tree, numLikes: tree.numLikes + 1 };
      }
      return tree;
    });
    this.setState({
      trees: updatedTrees //return the updated state after changing it!
    });
  };

  render() {
    const sortedTrees = [...this.state.trees];
    sortedTrees.sort((a, b) => b.numLikes - a.numLikes);
    return (
      <div>
        <div className="Tree">
          {sortedTrees.map(tree => (
            <Tree tree={tree} onLike={this.handleLike} /> //the tree key comes from the tree.tsx
          ))}
        </div>
        <div className="Form">
          <form
            className="Form"
            onSubmit={e => {
              e.preventDefault();
              this.addTree();
            }}
            style={{ display: "flex" }}
          >
            <p style={{ margin: ".25rem" }}>
              <label>
                Common name:{" "}
                <input
                  type="text"
                  value={this.state.commonName}
                  onChange={e => this.setState({ commonName: e.target.value })}
                />
              </label>
            </p>
            <p style={{ margin: ".25rem" }}>
              <label>
                Scientific name:{" "}
                <input
                  type="text"
                  value={this.state.scientificName}
                  onChange={e =>
                    this.setState({ scientificName: e.target.value })
                  }
                />
              </label>
            </p>
            <p style={{ margin: ".25rem" }}>
              <button type="submit">Add!</button>
            </p>
          </form>
        </div>
      </div>
    );
  }
}
export default PopularTrees;
