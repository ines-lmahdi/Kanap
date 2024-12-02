// const saveBasket = (basket) => {
//   localStorage.setItem("basket", JSON.stringify(basket));
// };

// const getBasket = () => {
//   let basket = localStorage.getItem("basket");

//   if (basket == null) {
//     return [];
//   } else {
//     return JSON.parse(basket);
//   }
// };

// const addBasket = (product) => {
//   const quantitySelect = document.getElementById("quantity").value;
//   const colorSelect = document.getElementById("colors").value;

//   let basket = getBasket();
//   let foundProduct = basket.find(
//     (p) => p.id == productId && colorSelect === p.color
//   );

//   if (colorSelect && quantitySelect != 0) {
//     if (foundProduct != undefined) {
//       foundProduct.quantity =
//         parseInt(foundProduct.quantity) + parseInt(quantitySelect);
//     } else {
//       basket.push({
//         id: productId,
//         quantity: quantitySelect,
//         color: colorSelect,
//       });
//     }

//     saveBasket(basket);
//   } else {
//     alert("Veuillez sélectionner une couleur ainsi qu'une option");
//   }
// };

// const changeQuantity = (product, quantity) => {
//   let basket = getBasket();
//   let foundProduct = basket.find((p) => p.id == product.id);

//   if (foundProduct != undefined) {
//     foundProduct.quantity += quantity;

//     if (foundProduct.quantity <= 0) {
//       removeFromBasket(foundProduct);
//     } else {
//       saveBasket(basket);
//     }
//   }
// };

// const getNumberProduct = () => {
//   let basket = getBasket();
//   let number = 0;

//   for (let product of basket) {
//     number += product.quantity;
//   }
//   return number;
// };

// const getTotalPrice = () => {
//   let basket = getBasket();
//   let total = 0;

//   for (let product of basket) {
//     total += product.quantity * product.price;
//   }
//   return total;
// };

// let addToCart = document.getElementById("addToCart");

// addToCart.addEventListener("click", addBasket);
