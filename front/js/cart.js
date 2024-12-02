// Gestion du panier
const CART_KEY = "cart";

const saveCart = (cart) => {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
};

const getCart = () => {
  return JSON.parse(localStorage.getItem(CART_KEY)) || [];
};

const addToCart = (productId, selectedColor, quantity) => {
  if (!selectedColor || quantity <= 0) {
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
  window.alert("Produit ajouté au panier !");
  updateCartSummary();
};

const updateCartQuantity = (id, color, newQuantity) => {
  let cart = getCart();
  const product = cart.find((item) => item.id === id && item.color === color);

  if (product) {
    if (newQuantity <= 0) {
      cart = cart.filter((item) => !(item.id === id && item.color === color));
    } else {
      product.quantity = parseInt(newQuantity, 10);
    }

    saveCart(cart);
    displayCart(); // Rafraîchit l'affichage
    updateCartSummary(); // Met à jour les totaux
  }
};

const removeFromCart = (id, color) => {
  let cart = getCart();
  cart = cart.filter((item) => !(item.id === id && item.color === color));
  saveCart(cart);
  displayCart();
  updateCartSummary();
};

// Met à jour dynamiquement le total des articles et le prix
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
  totalPriceHtml.innerHTML = totalPrice.toFixed(2);
};

// Affichage du panier
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

  updateCartSummary(); // Met à jour le total dynamiquement après affichage
};

// Initialisation de la page produit
const initProductPage = (productId) => {
  const addToCartButton = document.querySelector("#addToCart");

  addToCartButton.addEventListener("click", () => {
    const selectedColor = document.querySelector("#colors").value;
    const quantity = parseInt(document.querySelector("#quantity").value, 10);

    addToCart(productId, selectedColor, quantity);
  });
};

// Initialisation de la page panier
if (document.getElementById("cart__items")) {
  displayCart();
}

// // Save basket

// const saveBasket = (basket) => {
//   localStorage.setItem("basket", JSON.stringify(basket));
// };

// let storage = JSON.parse(localStorage.getItem("basket")) || [];

// const cart = document.getElementById("cart__items");
// const totalQuantityHtml = document.getElementById("totalQuantity");
// const totalPriceHtml = document.getElementById("totalPrice");

// // Calculate total quantity

// const getTotalQuantity = () => {
//   let totalQuantity = storage.reduce(
//     (sum, item) => sum + parseInt(item.quantity),
//     0
//   );
//   totalQuantityHtml.innerHTML = totalQuantity;
// };

// // Calculate total price

// const getTotalPrice = () => {
//   let totalPrice = 0;
//   Promise.all(
//     storage.map((item) =>
//       fetch(`http://localhost:3000/api/products/${item.id}`)
//         .then((response) => response.json())
//         .then((product) => {
//           totalPrice += product.price * item.quantity;
//         })
//     )
//   ).then(() => {
//     totalPriceHtml.innerHTML = totalPrice.toFixed(0);
//   });
// };

// // Display items to cart

// const getItemsCart = () => {
//   cart.innerHTML = "";
//   storage.forEach((element) => {
//     fetch(`http://localhost:3000/api/products/${element.id}`)
//       .then((response) => response.json())
//       .then((product) => {
//         cart.innerHTML += `
//           <article class="cart__item" data-id="${product._id}" data-color="${element.color}">
//             <div class="cart__item__img">
//               <img src="${product.imageUrl}" alt="${product.altTxt}">
//             </div>
//             <div class="cart__item__content">
//               <div class="cart__item__content__description">
//                 <h2>${product.name}</h2>
//                 <p>${element.color}</p>
//                 <p>${product.price} €</p>
//               </div>
//               <div class="cart__item__content__settings">
//                 <div class="cart__item__content__settings__quantity">
//                   <p>Qté : </p>
//                   <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${element.quantity}"
//                     onchange="updateQuantity('${element.color}', '${product._id}', this.value)">
//                 </div>
//                 <div class="cart__item__content__settings__delete">
//                   <p class="deleteItem" onclick="deleteItem('${element.color}', '${product._id}', this)">Supprimer</p>
//                 </div>
//               </div>
//             </div>
//           </article>`;
//       });
//   });
// };

// // Remove item

// const deleteItem = (color, id, ctx) => {
//   const index = storage.findIndex(
//     (item) => item.id === id && item.color === color
//   );
//   if (index !== -1) {
//     storage.splice(index, 1);
//     saveBasket(storage);
//     ctx.closest(".cart__item").remove();
//     getTotalQuantity();
//     getTotalPrice();
//   }
// };

// // Update quantity

// const updateQuantity = (color, id, newQuantity) => {
//   const product = storage.find(
//     (item) => item.id === id && item.color === color
//   );
//   if (product) {
//     product.quantity = parseInt(newQuantity);
//     saveBasket(storage);
//     getTotalQuantity();
//     getTotalPrice();
//   }
// };

// getItemsCart();
// getTotalQuantity();
// getTotalPrice();
