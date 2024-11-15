let productsJSON = `{
"allProducts": [
{
"name":"Black Time",
"price":30,
"id": "black_time"
},
{
"name":"Blue Time",
"price":32,
"id": "blue_time"
},
{
"name":"Green Time",
"price":34,
"id": "green_time"
},
{
"name":"Orange Time",
"price":36,
"id": "orange_time"
},
{
"name":"Purple Time",
"price":38,
"id": "purple_time"
},
{
"name":"Red Time",
"price":40,
"id": "red_time"
}
]
}`;
let products = JSON.parse(productsJSON)["allProducts"];
updateCartCount();

for (let product of products) {
  let productDiv = document.createElement("div");
  productDiv.className = "productDiv";
  /* productDiv.textContent = product.name; */
  container.append(productDiv);

  let img = document.createElement("img");
  img.src = `Часы/${product.id}.png`;
  img.alt = product.name;

  let timeName = document.createElement("h3");
  timeName.textContent = `${product.name}`;

  let priceTime = document.createElement("p");
  priceTime.textContent = `${product.price}$`;

  let buttonTime = document.createElement("div");
  buttonTime.className = "buttonTime";
  buttonTime.textContent = "Корзина";
  container.append(productDiv);

  productDiv.append(img, timeName, priceTime, buttonTime);

  buttonTime.onclick = () => addToCart(product);
}

function addToCart(product) {
  /* alert(product.id) */
  let cart = JSON.parse(localStorage.getItem("cart")) || {};
  if (cart[product.id]) {
    cart[product.id].amount += 1;
  } else {
    cart[product.id] = { ...product, amount: 1 };
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();

}

function updateCartCount() {
  
  const cart = JSON.parse(localStorage.getItem("cart")) || {};

  let itemCount = 0;
  for (const key in cart) {
    itemCount += cart[key].amount;
}
let cartItem = document.querySelector ("#conter");
cartItem.textContent = itemCount;
}

