const cart_key = "cart";

const saveCart = (cart) => {
  localStorage.setItem(cart_key, JSON.stringify(cart));
};

const getCart = () => {
  return JSON.parse(localStorage.getItem(cart_key)) || [];
};

const addToCart = (productId, selectedColor, quantity) => {
  if (!selectedColor || quantity < 1 || quantity >= 100) {
    window.alert("Veuillez sélectionner une couleur et une quantité valide.");
    return;
  }

  let cart = getCart();
  const existingProduct = cart.find(
    (item) => item.id === productId && item.color === selectedColor
  );

  if (existingProduct) {
    existingProduct.quantity += quantity;
  } else {
    cart.push({ id: productId, color: selectedColor, quantity });
  }

  saveCart(cart);
  updateCartSummary();
};

const updateCartQuantity = (id, color, newQuantity) => {
  let cart = getCart();
  const product = cart.find((item) => item.id === id && item.color === color);

  if (product) {
    if (newQuantity < 1 || newQuantity >= 100) {
      window.alert("Vous ne pouvez commander qu'entre 1 et 100 canapé");
    } else {
      product.quantity = parseInt(newQuantity, 10);
    }

    saveCart(cart);
    displayCart();
    updateCartSummary();
  }
};

const removeFromCart = (id, color) => {
  let cart = getCart();
  cart = cart.filter((item) => !(item.id === id && item.color === color));
  saveCart(cart);
  displayCart();
  updateCartSummary();
};

const updateCartSummary = async () => {
  const totalQuantityHtml = document.getElementById("totalQuantity");
  const totalPriceHtml = document.getElementById("totalPrice");
  const items = getCart();

  let totalQuantity = 0;
  let totalPrice = 0;

  const productPromises = items.map((item) =>
    fetch(`http://localhost:3000/api/products/${item.id}`)
      .then((res) => res.json())
      .catch(() => null)
  );

  const products = await Promise.all(productPromises);

  products.forEach((product, index) => {
    if (product) {
      totalQuantity += items[index].quantity;
      totalPrice += product.price * items[index].quantity;
    }
  });

  totalQuantityHtml.innerHTML = totalQuantity;
  totalPriceHtml.innerHTML = totalPrice.toFixed(0);
};

// Cart display

const displayCart = async () => {
  const cart = document.getElementById("cart__items");

  const items = getCart();
  cart.innerHTML = "";

  const productPromises = items.map((item) =>
    fetch(`http://localhost:3000/api/products/${item.id}`)
      .then((res) => res.json())
      .catch(() => null)
  );

  const products = await Promise.all(productPromises);

  products.forEach((product, index) => {
    if (product) {
      const { id, color, quantity } = items[index];

      cart.innerHTML += `
        <article class="cart__item" data-id="${id}" data-color="${color}">
          <div class="cart__item__img">
            <img src="${product.imageUrl}" alt="${product.altTxt}">
          </div>
          <div class="cart__item__content">
            <div class="cart__item__content__description">
              <h2>${product.name}</h2>
              <p>${color}</p>
              <p>${product.price} €</p>
            </div>
            <div class="cart__item__content__settings">
              <div class="cart__item__content__settings__quantity">
                <p>Qté : </p>
                <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100"
                  value="${quantity}"
                  onchange="updateCartQuantity('${id}', '${color}', this.value)">
              </div>
              <div class="cart__item__content__settings__delete">
                <p class="deleteItem" onclick="removeFromCart('${id}', '${color}')">Supprimer</p>
              </div>
            </div>
          </div>
        </article>`;
    }
  });

  updateCartSummary();
};

// Button event "add to cart"

// const initProductPage = (productId) => {
//   const addToCartButton = document.querySelector("#addToCart");

//   addToCartButton.addEventListener("click", () => {
//     const selectedColor = document.querySelector("#colors").value;
//     const quantity = parseInt(document.querySelector("#quantity").value, 10);
//     if (quantity >= 1 && quantity <= 100) {
//       addToCart(productId, selectedColor, quantity);
//       window.alert("je suis sur quel page là ?");
//     } else {
//       window.alert("merci de renseigner une quantité comprise entre 1 et 100");
//     }
//   });
// };

// Initialization of the cart page

document.addEventListener("DOMContentLoaded", () => {
  const cartItems = document.getElementById("cart__items");
  if (cartItems) {
    displayCart();
  }
});
