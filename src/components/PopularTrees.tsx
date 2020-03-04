import React from "react";
import Tree from "./Tree";
type Props = {};
type State = {
  trees: Array<{
    commonName: string;
    scientificName: string;
  }>;
  commonName: string;
  scientificName: string;
};
class PopularTrees extends React.Component<Props, State> {
  state: State = {
    trees: [
      {
        commonName: "White birch",
        scientificName: "Betula pendula"
      },
      {
        commonName: "Weeping willow",
        scientificName: "Salix sepulcralis"
      },
      {
        commonName: "London planetree",
        scientificName: "Platanus hybryda"
      } //map over the arr
    ],
    commonName: "",
    scientificName: ""
  };

  addTree = () => {
    console.log("adding a tree");
    const newTree = {
      commonName: this.state.commonName,
      scientificName: this.state.scientificName
    };
    this.setState({
      trees: [...this.state.trees, newTree]
    });
  };

  render() {
    const eachTree = this.state.trees.map(tree => (
      <Tree commonName={tree.commonName} scientificName={tree.scientificName} /> //create  eachtree const and return it, show in app
    ));
    return (
      <div>
        {eachTree}
        <form
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
    );
  }
}
export default PopularTrees;
