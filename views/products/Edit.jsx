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
        Price:{" "}
        <input
          type="number"
          name="price"
          defaultValue={this.props.products.price}
        />{" "}
        <br />
        Quantity:{" "}
        <input
          type="number"
          name="quantity"
          defaultValue={this.props.products.quantity}
        />{" "}
        <br />
        Category:{" "}
        <input
          type="text"
          name="category"
          defaultValue={this.props.products.category}
        />{" "}
        <br />
        Is Available:
        {this.props.products.isAvailable ? (
          <input type="checkbox" name="isAvailable" defaultChecked />
        ) : (
          <input type="checkbox" name="isAvailable" />
        )}
        <br />
        <input type="submit" value="Edit Products" />
      </form>
    );
  }
}

module.exports = Edit;
