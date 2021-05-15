import React from "react";
import { useProductStore } from "./ProductContext";
import { nanoid } from 'nanoid';
import { Product } from "./Product";
import "./App.css";

export const AvaibleProducts = () => {
  const productStore = useProductStore();

  const avaibleProducts = [
    new Product(nanoid(), "asd", 12),
    new Product(nanoid(), "qwe", 45)
  ]

  const content = avaibleProducts.map((product) =>
    <div key={product.id} class="card">
      <h3>{product.name}</h3>
      <p>cena : {product.price} zł</p>
      <button onClick={() => productStore.addProduct(product)}>Dodaj do koszyka</button>
    </div>
  );

  return (
    <>
      {content}
    </>
  );
};
