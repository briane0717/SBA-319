const React = require("react");

function ProductIndex({ products }) {
  return (
    <div>
      <h1>Product List</h1>
      <a href="/products/new">Add New Product</a>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            <a href={`/products/${product._id}`}>{product.name}</a> - $
            {product.price} <br />
            <a href={`/products/${product._id}/edit`}>Edit</a> |{" "}
            <form
              action={`/products/${product._id}?_method=DELETE`}
              method="POST"
              style={{ display: "inline" }}
            >
              <button type="submit">Delete</button>
            </form>
          </li>
        ))}
      </ul>
    </div>
  );
}

module.exports = ProductIndex;
