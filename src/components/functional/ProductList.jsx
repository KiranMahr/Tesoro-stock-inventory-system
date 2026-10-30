import ProductCard from "./ProductCard";

function ProductList({ products, onDelete }) {
  return (
    <section>
      <h2>Jewelry Collection</h2>
      {/*task 4: show empty state or product cards*/}
      {products.length === 0 ? (
        <p>No jewelry items available.</p>
      ) : (
        <div className="product-list">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onDelete={onDelete}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default ProductList;
