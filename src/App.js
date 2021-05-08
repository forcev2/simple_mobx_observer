import React from "react";
import "./App.css";
import { AvaibleProducts } from "./AvaibleProducts";
import { useProductStore } from "./ProductContext";
import { useObserver } from "mobx-react";

function App() {
  const productStore = useProductStore();

  console.log(productStore);

  return useObserver(() => (
    <>
      <div class="body-wrapper">
        <div class="avaible-wrapper">
          <h2 class="avaible-products">Dostępne produkty</h2>
          <AvaibleProducts />
        </div>
        <div class="koszyk">
          <h2 class="avaible-products">Koszyk</h2>
            {productStore.products.map((product) => (
              <div onClick={
                  () => productStore.removeProduct(product.id)
                } key={product.id} class="card w-koszyku">
                <h3>{product.name}</h3> cena : {product.price} zł
              </div>
            ))}
        </div>
      </div>
    </>
  ));
}

export default App;
