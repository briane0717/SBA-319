const React = require("react");

function UsersIndex({ users }) {
  const allUsers = Array.isArray(users) ? users : [];

  return (
    <div>
      <h1>Users</h1>

      <ul>
        {allUsers.map((user) => (
          <li key={user._id}>
            <strong>{user.userName}</strong>
            <br />
            <em>Email: {user.email}</em>
            <br />
            <p>Age: {user.age}</p>
            <p>Status: {user.isActive ? "Active" : "Inactive"}</p>

            {/* Edit Button */}
            <a href={`/users/edit/${user._id}`}>
              <button type="button">Edit User</button>
            </a>

            {/* Delete Button Form */}
            <form
              action={`/users/${user._id}?_method=DELETE`}
              method="POST"
              style={{ display: "inline", marginLeft: "10px" }}
            >
              <button type="submit">Delete User</button>
            </form>
          </li>
        ))}
      </ul>

      <a href="/users/new">
        <button type="button">Add New User</button>
      </a>
    </div>
  );
}

module.exports = UsersIndex;
