import { useState } from "react";
import CardWrapper from "./CardWrapper";

function ProductForm({ onAddProduct }) {

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [material, setMaterial] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if ( name.trim() === ""|| category=== "" || material=== "" || price === "" || stock === "") {
      return;
    }

    const newProduct = {
      id: Date.now(),
      name: name.trim(),
      category,
      material,
      price: Number(price),
      stock: Number(stock),
    };

    onAddProduct(newProduct);

    setName("");
    setCategory("");
    setMaterial("");
    setPrice("");
    setStock("");
  }

  return (
    <CardWrapper>
      <h2>Add Jewelry Item</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="item-name">Item Name</label>
          <input id="item-name" type="text" value={name} onChange={(event) => setName(event.target.value)} placeholder="Product Name" required />
        </div>

        <div className="form-row">
          <label htmlFor="jewelry-type">Jewelry Type</label>
          <select id="jewelry-type" value={category} onChange={(event) => setCategory(event.target.value)} required>
            <option value="">Select type</option>
            <option value="Necklace">Necklace</option>
            <option value="Ring">Ring</option>
            <option value="Earrings">Earrings</option>
            <option value="Bracelet">Bracelet</option>
            <option value="Bangle">Bangle</option>
            <option value="Anklet">Anklet</option>
          </select>
        </div>

        <div className="form-row">
          <label htmlFor="material">Material</label>
          <select id="material" value={material} onChange={(event) => setMaterial(event.target.value)} required >
            <option value="">Select material</option>
            <option value="Gold">Gold</option>
            <option value="Silver">Silver</option>
            <option value="Pearl">Pearl</option>
            <option value="Gemstone">Gemstone</option>
          </select>
        </div>

        <div className="form-row">
          <label htmlFor="price">Price (Rs.)</label>
          <input id="price" type="number" min="0" value={price} onChange={(event) => setPrice(event.target.value)} required />
        </div>

        <div className="form-row">
          <label htmlFor="quantity">Quantity</label>
          <input id="quantity" type="number" min="0" value={stock} onChange={(event) => setStock(event.target.value)} required />
        </div>

        <button type="submit">Add Jewelry</button>
      </form>
    </CardWrapper>
  );
}
export default ProductForm;
