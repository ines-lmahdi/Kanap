// Save basket

const saveBasket = (basket) => {
  localStorage.setItem("basket", JSON.stringify(basket));
};

let storage = JSON.parse(localStorage.getItem("basket")) || [];

const cart = document.getElementById("cart__items");
const totalQuantityHtml = document.getElementById("totalQuantity");
const totalPriceHtml = document.getElementById("totalPrice");

// Calculate total quantity

const getTotalQuantity = () => {
  let totalQuantity = storage.reduce(
    (sum, item) => sum + parseInt(item.quantity),
    0
  );
  totalQuantityHtml.innerHTML = totalQuantity;
};

// Calculate total price

const getTotalPrice = () => {
  let totalPrice = 0;
  Promise.all(
    storage.map((item) =>
      fetch(`http://localhost:3000/api/products/${item.id}`)
        .then((response) => response.json())
        .then((product) => {
          totalPrice += product.price * item.quantity;
        })
    )
  ).then(() => {
    totalPriceHtml.innerHTML = totalPrice.toFixed(0);
  });
};

// Display items to cart

const getItemsCart = () => {
  cart.innerHTML = "";
  storage.forEach((element) => {
    fetch(`http://localhost:3000/api/products/${element.id}`)
      .then((response) => response.json())
      .then((product) => {
        cart.innerHTML += `
          <article class="cart__item" data-id="${product._id}" data-color="${element.color}">
            <div class="cart__item__img">
              <img src="${product.imageUrl}" alt="${product.altTxt}">
            </div>
            <div class="cart__item__content">
              <div class="cart__item__content__description">
                <h2>${product.name}</h2>
                <p>${element.color}</p>
                <p>${product.price} €</p>
              </div>
              <div class="cart__item__content__settings">
                <div class="cart__item__content__settings__quantity">
                  <p>Qté : </p>
                  <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${element.quantity}"
                    onchange="updateQuantity('${element.color}', '${product._id}', this.value)">
                </div>
                <div class="cart__item__content__settings__delete">
                  <p class="deleteItem" onclick="deleteItem('${element.color}', '${product._id}', this)">Supprimer</p>
                </div>
              </div>
            </div>
          </article>`;
      });
  });
};

// Remove item

const deleteItem = (color, id, ctx) => {
  const index = storage.findIndex(
    (item) => item.id === id && item.color === color
  );
  if (index !== -1) {
    storage.splice(index, 1);
    saveBasket(storage);
    ctx.closest(".cart__item").remove();
    getTotalQuantity();
    getTotalPrice();
  }
};

// Update quantity

const updateQuantity = (color, id, newQuantity) => {
  const product = storage.find(
    (item) => item.id === id && item.color === color
  );
  if (product) {
    product.quantity = parseInt(newQuantity);
    saveBasket(storage);
    getTotalQuantity();
    getTotalPrice();
  }
};

getItemsCart();
getTotalQuantity();
getTotalPrice();
