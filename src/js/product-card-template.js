export function productCardTemplate(product) {
  return `
    <div class="product-item w-[300px] p-5 bg-white shadow-md rounded">
      <div
        class="product-item__image w-full h-[250px] rounded overflow-hidden"
      >
        <img
          src="https://picsum.photos/200/300"
          alt="product image"
          class="w-full h-full object-cover"
        />
      </div>
      <div class="product-item__content">
        <h2
          class="product-item__title text-xl my-3 font-semibold text-emerald-600"
        >
          My super random product
        </h2>
        <p class="product-item__description text-sm text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptatum, voluptate, quibusdam, quia voluptas quod quos
        </p>
        <div
          class="product-item__actions flex justify-between items-center"
        >
          <div class="product-item__price text-xs text-blue-600 my-3">
            Price: <span class="font-bold text-xl">$100</span>
          </div>
          <div class="">
          <button
            class="btn bg-red-800 opacity-90 hover:opacity-100 text-white py-2 px-5 rounded"
          >
            <i class="fas fa-trash"></i>
          </button>
          <button
            class="btn bg-emerald-800 opacity-90 hover:opacity-100 text-white py-2 px-5 rounded"
          >
            <i class="fas fa-cart-shopping"></i>
          </button>
          </div>
        </div>
      </div>
    </div>
  `;
}
