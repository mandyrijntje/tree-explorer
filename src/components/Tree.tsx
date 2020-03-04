import React from "react";
type Props = {
  name: string;
  scientificName: string;
};
class Tree extends React.Component<Props> {
  render() {
    return (
      <div>
        <p>Name: {this.props.name}</p>
        <p>scientificName: {this.props.scientificName}</p>
      </div>
    );
  }
}
export default Tree;
