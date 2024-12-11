const React = require("react");

class New extends React.Component {
  render() {
    return (
      <form action="/reviews/new" method="POST">
        <label>Title:</label>
        <input type="text" name="title" required /> <br />{" "}
        <label>Product:</label>
        <input type="text" name="product" required /> <br />{" "}
        <label>User:</label>
        <input type="text" name="user" required /> <br /> <label>Body:</label>
        <input type="text" name="body" required /> <br /> <label>Rating:</label>
        <input type="number" name="rating" required /> <br />
        <label>Verified:</label>
        <input type="checkbox" name="verified" /> <br />
        <button type="submit">Add Review</button>
      </form>
    );
  }
}

module.exports = New;
