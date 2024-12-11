const React = require("react");

class Edit extends React.Component {
  render() {
    return (
      <form action={`/products/${this.props.id}?_method=PUT`} method="POST">
        Name:{" "}
        <input
          type="text"
          name="name"
          defaultValue={this.props.products.name}
        />{" "}
        <br />
        Color:{" "}
        <input
          type="text"
          name="color"
          defaultValue={this.props.products.color}
        />{" "}
        <br />
        Color:{" "}
        <input
          type="text"
          name="color"
          defaultValue={this.props.products.color}
        />{" "}
        <br />
        Color:{" "}
        <input
          type="text"
          name="color"
          defaultValue={this.props.products.color}
        />{" "}
        <br />
        Is Available:
        {this.props.products.isAvailable ? (
          <input type="checkbox" name="isAvailable" defaultChecked />
        ) : (
          <input type="checkbox" name="isAvailable" />
        )}
        <br />
        <input type="submit" name="" value="Edit Products" />
      </form>
    );
  }
}

module.exports = Edit;
