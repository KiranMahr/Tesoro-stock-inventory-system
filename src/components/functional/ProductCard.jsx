import CardWrapper from "./CardWrapper";

function ProductCard({ product, onDelete }) {
  //task 4: show stock status
  const status =
    product.stock <= 0
      ? "Out of Stock"
      : product.stock <= 6
      ? "Low Stock"
      : "In Stock";
  const statusClass = status.toLowerCase().replaceAll(" ", "-");

  return (
    <CardWrapper>
      <h3>{product.name}</h3>
      <p>Type: {product.category}</p>
      <p>Material: {product.material}</p>
      <p>Price: Rs. {product.price}</p>
      <p>Quantity: {product.stock}</p>
      <p>
        Status: <span className={`stock-status ${statusClass}`}>{status}</span>
      </p>

      <button type="button" onClick={() => onDelete(product.id)}>Delete</button>
    </CardWrapper>
  );
}

export default ProductCard;
