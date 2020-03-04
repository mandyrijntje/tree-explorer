import React from "react";
type Props = {
  commonName: string;
  scientificName: string;
  numLikes: number;
};
class Tree extends React.Component<Props> {
  render() {
    return (
      <div>
        <p>commonName: {this.props.commonName}</p>
        <p>scientificName: {this.props.scientificName}</p>
        <p>numLikes: {this.props.numLikes}</p>
      </div>
    );
  }
}
export default Tree;
