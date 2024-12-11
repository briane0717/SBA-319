const React = require("react");

class Edit extends React.Component {
  render() {
    const review = this.props.review; // Access the review data passed from the route
    return (
      <form action={`/reviews/${review._id}?_method=PUT`} method="POST">
        Title:{" "}
        <input
          type="text"
          name="title"
          defaultValue={review.title} // Use 'review.title' here
        />
        <br />
        Product:{" "}
        <input
          type="text"
          name="product"
          defaultValue={review.product} // Use 'review.product' here
        />
        <br />
        User:{" "}
        <input
          type="text"
          name="user"
          defaultValue={review.user} // Use 'review.user' here
        />
        <br />
        Body:{" "}
        <input
          type="text"
          name="body"
          defaultValue={review.body} // Use 'review.body' here
        />
        <br />
        Rating:{" "}
        <input
          type="number"
          name="rating"
          defaultValue={review.rating} // Use 'review.rating' here
        />
        <br />
        Verified:{" "}
        <input
          type="checkbox"
          name="verified"
          defaultChecked={review.verified} // Use 'review.verified' here
        />
        <br />
        <button type="submit">Edit Review</button>
      </form>
    );
  }
}

module.exports = Edit;
