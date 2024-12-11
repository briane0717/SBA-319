const React = require("react");

function ProductIndex({ products }) {
  // Ensure products is an array
  const parsedProducts =
    typeof products === "string" ? JSON.parse(products) : products;

  return (
    <div>
      <h1>Product List</h1>
      {/* <a href="/products/">Add New Product</a> */}
      <ul>
        {parsedProducts.map((product) => (
          <li key={product._id}>
            <a href={`/products/${product._id}`}>{product.name}</a> - $
            {product.price.toFixed(2)} <br />
            <a href={`/products/edit/${product._id}`}>Edit</a> |{" "}
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
