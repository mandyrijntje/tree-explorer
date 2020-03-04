import React from "react"; //css imports itself from app
import { TreeData } from "../model";

type Props = {
  tree: TreeData; //replace all props with this key value pair
  onLike: (id: number) => void;
};
class Tree extends React.Component<Props> {
  render() {
    return (
      //all the props change to put .tree
      <div className="tree">
        <p>id: {this.props.tree.id}</p>
        <p>commonName: {this.props.tree.commonName}</p>
        <p>scientificName: {this.props.tree.scientificName}</p>
        <p>numLikes: {this.props.tree.numLikes}</p>
        <button onClick={() => this.props.onLike(this.props.tree.id)}>
          Like
        </button>
      </div>
    );
  }
}
export default Tree;
