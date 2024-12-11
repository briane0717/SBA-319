const React = require("react");

function ReviewsIndex({ reviews }) {
  const allReviews = Array.isArray(reviews) ? reviews : [];

  return (
    <div>
      <h1>Reviews</h1>

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

            {/* Edit Button */}
            <a href={`/reviews/edit/${review._id}`}>
              <button type="button">Edit Review</button>
            </a>

            {/* Delete Button Form */}
            <form
              action={`/reviews/${review._id}?_method=DELETE`}
              method="POST"
              style={{ display: "inline", marginLeft: "10px" }}
            >
              <button type="submit">Delete Review</button>
            </form>
          </li>
        ))}
      </ul>

      <a href="/reviews/new">
        <button type="button">Add New Review</button>
      </a>
    </div>
  );
}

module.exports = ReviewsIndex;
