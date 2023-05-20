import { productCardTemplate } from "./product-card-template";

const productsWrapper = document.querySelector(".product-list");

export function fetchProducts() {
  productsWrapper.innerHTML += productCardTemplate();
}
