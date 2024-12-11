// ReviewsIndex.jsx
const React = require("react");

function ReviewsIndex({ reviews }) {
  const allReviews = Array.isArray(reviews) ? reviews : [];

  return (
    <div>
      <h1>Reviews</h1>
      <form action="/reviews/new" method="POST">
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" required />

        <label htmlFor="product">Product</label>
        <input type="text" id="product" name="product" required />

        <label htmlFor="user">User</label>
        <input type="text" id="user" name="user" required />

        <label htmlFor="body">Body</label>
        <textarea id="body" name="body" required></textarea>

        <label htmlFor="rating">Rating</label>
        <input type="number" id="rating" name="rating" min="1" max="5" />

        <label htmlFor="verified">Verified</label>
        <input type="checkbox" id="verified" name="verified" />

        <button type="submit">Submit Review</button>
      </form>

      <h2>Existing Reviews</h2>
      <ul>
        {allReviews.map((review) => (
          <li key={review._id}>
            <strong>{review.title}</strong>
            <br />
            <em>Product: {review.product}</em>
            <br />
            <p>{review.body}</p>
            <p>Rating: {review.rating}</p>
            <p>{review.verified ? "Verified" : "Not Verified"}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

module.exports = ReviewsIndex; // Correct export
