import {useState,useEffect,useRef,useMemo,useCallback,useContext} from "react";
import "./App.css";
import Header from "./components/Header";
import ProductForm from "./components/functional/ProductForm";
import ProductList from "./components/functional/ProductList";
import ThemeToggle from "./components/functional/ThemeToggle";
import AuditLogger from "./components/class/AuditLogger";
import InventorySummary from "./components/InventorySummary";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  //task 5: get shared theme
  const { theme, toggleTheme } = useContext(ThemeContext);

  //task 5: load and save inventory
  const [products, setProducts] = useState(() => {
    const savedProducts = localStorage.getItem("jewelryProducts");

    return savedProducts
      ? JSON.parse(savedProducts)
      : [
          { id: 1, name: "Moonlight Pendant", category: "Pendant", material: "Silver", price: 4500, stock: 12 },
          { id: 2, name: "Golden Bloom Ring", category: "Ring", material: "Gold", price: 12500, stock: 26 },
          { id: 3, name: "Pearl Drop Earrings", category: "Earrings", material: "Pearl", price: 3200, stock: 16 },
          { id: 4, name: "Rose Charm Bracelet", category: "Bracelet", material: "Rose Gold", price: 7800, stock: 19 },
        ];
  });
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");

  //task 3: connect audit logger
  const logOperation = useRef(null);

  function registerLogger(logger) {
    logOperation.current = logger;
  }

  //task 2 and 5: add productsand log changes
  const handleAddProduct = useCallback((newProduct) => {
    setProducts((previousProducts) => [
      ...previousProducts,
      newProduct,
    ]);
    logOperation.current?.(`New Item: ${newProduct.name}`);
  }, []);

  //task 2 and 5: delete productsand  log changes
  const handleDeleteProduct = useCallback((productId) => {
    const productToDelete = products.find((item) => item.id === productId);

    setProducts((previousProducts) =>
      previousProducts.filter((item) => item.id !== productId)
    );

    if (productToDelete) {
      logOperation.current?.(`item deleted: ${productToDelete.name}`);
    }
  }, [products]);

  //task 5: save inventory and update page title
  useEffect(() => {
    localStorage.setItem("jewelryProducts", JSON.stringify(products));
    document.title = `Tesoro Jewels (${products.length} items)`;
  }, [products]);

  //task 5: calculate inventory values and filter products
  const lowStockProducts = useMemo(
    () => products.filter((product) => product.stock > 0 && product.stock <= 5),
    [products]
  );

  const totalStock = useMemo(
    () => products.reduce((total, product) => total + product.stock, 0),
    [products]
  );

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        selectedCategory === "All" || product.category === selectedCategory;
      const matchesStatus =
        selectedStatus === "All" ||
        (selectedStatus === "In Stock" && product.stock > 5) ||
        (selectedStatus === "Low Stock" &&
          product.stock > 0 &&
          product.stock <= 6) ||
        (selectedStatus === "Out of Stock" && product.stock <= 0);

      return matchesCategory && matchesStatus;
    });
  }, [products, selectedCategory, selectedStatus]);

  return (
    <div className={`app ${theme}`}>
      <Header />
      <main>
        {/*task 5: switch shared theme*/}
        <ThemeToggle theme={theme} onToggle={toggleTheme} />

        {/*task 4 and 5: show inventory values*/}
        <InventorySummary
          products={products}
          lowStockProducts={lowStockProducts}
          totalStock={totalStock}
        />

        {/*task 2: pass add callback to form*/}
        <ProductForm onAddProduct={handleAddProduct} />

        {/*task 4 and 5: filter and  render products*/}
        <div className="inventory-filters">
          <div>
            <label htmlFor="category-filter">Category</label>
            <select id="category-filter" value={selectedCategory} onChange={(event) => setSelectedCategory(event.target.value)}>
              <option value="All">All Categories</option>
              <option value="Ring">Ring</option>
              <option value="Pendant">Pendant</option>
              <option value="Necklace">Necklace</option>
              <option value="Earrings">Earrings</option>
              <option value="Bracelet">Bracelet</option>
              <option value="Bangle">Bangle</option>
              <option value="Anklet">Anklet</option>
            </select>
          </div>
          <div>
            <label htmlFor="status-filter">Stock status</label>
            <select id="status-filter" value={selectedStatus} onChange={(event) => setSelectedStatus(event.target.value)}>
              <option value="All">All Statuses</option>
              <option value="In Stock">In Stock</option>
              <option value="Low Stock">Low Stock</option>
              <option value="Out of Stock">Out of Stock</option>
            </select>
          </div>
        </div>

        {filteredProducts.length === 0 ? (
          <p>
            {products.length === 0
              ? "No jewelry items available"
              : "No products match these filters"}
          </p>
        ) : (
          <ProductList
            products={filteredProducts}
            onDelete={handleDeleteProduct}
          />
        )}

        {/*task 3: display saved audit logs*/}
        <AuditLogger registerLogger={registerLogger} />
      </main>
    </div>
  );
}
export default App;
