const React = require("react");

class New extends React.Component {
  render() {
    return (
      <form action="/users/new" method="POST">
        <label>User Name:</label>
        <input type="text" name="userName" required /> <br />{" "}
        <label>Email:</label>
        <input type="email" name="email" required /> <br /> <label>Age:</label>
        <input type="number" name="age" required /> <br />{" "}
        <label>Active:</label>
        <input type="checkbox" name="isActive" /> <br />
        <button type="submit">Add User</button>
      </form>
    );
  }
}

module.exports = New;
