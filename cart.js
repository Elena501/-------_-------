let productData = JSON.parse(localStorage.getItem("cart"));

updateCartCount();
let allProductDiv = document.querySelector(".products");
for (let key in productData) {
  let product = productData[key];

  let productDiv = document.createElement("div");
  productDiv.className = "product";
  productDiv.innerHTML = `
          <div class="product-info">
          <i class="fa-solid fa-circle-xmark delete id=deleteClick"></i>
          <img src="Часы/${product.id}.png" alt="Time"/>
          <div class= "product-name">${product.name}</div>
          </div>
          <div class="product-price">${product.price}</div>
          <div class="product-amount">
          <i class="fa-solid fa-caret-left increase id=increase"></i>${
            product.amount}
          <i class="fa-solid fa-caret-right decrease id=decrease"></i></div>
          <div class="product-total">$${product.price * product.amount}</
          div>
`;
allProductDiv.append(productDiv);

allProductDiv.addEventListener ("click", function(event) {
hadleButtons(event, product);
})
}

function hadleButtons (event, product) {
  if (event.target.classList.contains("delete")) {
event.currentTarget.remove();
deleteProductFromCart (product.id);
updateCartCount ();

} else if (event.target.classList.contains("increase")) {
productData[product.id].amount +=1;
updataProduct(event.currentTarget, product.id);
} else if (event.target.classList.contains("decrease")) {
  productData[product.id].amount -=1;
  updataProduct(event.currentTarget, product.id);
}
localStorage.setItem("cart", JSON.stringify(product));
updateCartCount ();
}


function updataProduct(elem, id) {
  localStorage.setItem("cart", JSON.stringify(productData));

  elem.querySelector(".amount").textContent = productData[id].amount;

  elem.querySelector(".product-total").textContent = `$${productData[id].amount * productData[id].price}`

}

function deleteProductFromCart(id) {
  delete productData[id];
  localStorage.setItem("cart", JSON.stringify(productData));
  updateCartCount ();
}


function updateCartCount() {
  localStorage.setItem("cart", JSON.stringify(productData));
  /* const cart = JSON.parse(localStorage.getItem("cart")) || {}; */

  let itemCount = 0;
  for (const key in cart) {
    itemCount += cart[key].amount;
  }
  let cartItem = document.querySelector("#container");
  cartItem.textContent = itemCount;
}

