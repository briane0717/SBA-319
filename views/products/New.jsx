const React = require("react");

class New extends React.Component {
  render() {
    const categories = [
      "Electronics",
      "Clothing",
      "Home & Garden",
      "Books",
      "Toys",
      "Sports",
      "Health & Beauty",
      "Automotive",
      "Other",
    ];

    return (
      <form action="/products/new" method="POST">
        <label>Name:</label>
        <input type="text" name="name" required /> <br />
        <label>Price:</label>
        <input type="number" name="price" required /> <br />
        <label>Quantity:</label>
        <input type="number" name="quantity" required /> <br />
        <label>Category:</label>
        <select name="category" required>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>{" "}
        <br />
        <label>Available:</label>
        <input type="checkbox" name="isAvailable" /> <br />
        <button type="submit">Create Product</button>
      </form>
    );
  }
}

module.exports = New;
