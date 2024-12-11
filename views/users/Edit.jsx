const React = require("react");

class Edit extends React.Component {
  render() {
    const user = this.props.user;
    return (
      <form action={`/users/${user._id}?_method=PUT`} method="POST">
        User Name:{" "}
        <input type="text" name="userName" defaultValue={user.userName} />
        <br />
        Email: <input type="email" name="email" defaultValue={user.email} />
        <br />
        Age: <input type="number" name="age" defaultValue={user.age} />
        <br />
        Active:{" "}
        <input type="checkbox" name="isActive" defaultChecked={user.isActive} />
        <br />
        <button type="submit">Edit User</button>
      </form>
    );
  }
}

module.exports = Edit;
