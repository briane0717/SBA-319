const React = require("react");

function ProductIndex({ products }) {
  // Ensure products is an array
  const parsedProducts =
    typeof products === "string" ? JSON.parse(products) : products;

  return (
    <div>
      <h1>Product List</h1>
      <a href="/products/new"></a>
      <ul>
        {parsedProducts.map((product) => (
          <li key={product._id}>
            <a href={`/products/${product._id}`}>{product.name}</a> - $
            {product.price.toFixed(2)} <br />
            <form
              action={`/products/edit/${product._id}`}
              method="GET"
              style={{ display: "inline" }}
            >
              <button type="submit">Edit</button>
            </form>{" "}
            |{" "}
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
      <button type="button">Add New Product</button>
    </div>
  );
}

module.exports = ProductIndex;
