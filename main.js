import "./src/assets/tailwind.css";
import { fetchProducts } from "./src/js/fetch-products";

const api =
  "https://to-do-66a0e-default-rtdb.asia-southeast1.firebasedatabase.app/products/your_name";

function App() {
  for (let i = 0; i < 10; i++) {
    fetchProducts();
  }
}

window.addEventListener("load", App);
