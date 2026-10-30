function InventorySummary({ products, lowStockProducts, totalStock }) {
  const totalItems = products.length;
  const inStockItems = products.filter((product) => product.stock > 0).length;
  const outOfStockItems = products.filter((product) => product.stock <= 0).length;

  return (
    <section className="inventory-summary" aria-label="Inventory overview">
      <h2 className="inventory-summary__title">Inventory Overview</h2>

      <div className="inventory-summary__grid">
        <article className="inventory-stat inventory-stat--total">
          <span className="inventory-stat__label">Total Items</span>
          <strong className="inventory-stat__value">{totalItems}</strong>
        </article>

        <article className="inventory-stat inventory-stat--in-stock">
          <span className="inventory-stat__label">In Stock</span>
          <strong className="inventory-stat__value">{inStockItems}</strong>
        </article>

        <article className="inventory-stat inventory-stat--low-stock">
          <span className="inventory-stat__label">Low Stock</span>
          <strong className="inventory-stat__value">{lowStockProducts.length}</strong>
        </article>

        <article className="inventory-stat inventory-stat--out-of-stock">
          <span className="inventory-stat__label">Out of Stock</span>
          <strong className="inventory-stat__value">{outOfStockItems}</strong>
        </article>
      </div>
      <p className="total-stock">Total Items: {totalStock}</p>
    </section>
  );
}
export default InventorySummary;
