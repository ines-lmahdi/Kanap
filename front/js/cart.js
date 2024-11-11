function saveBasket(basket) {
  console.log("saveBasket");
  localStorage.setItem("basket", JSON.stringify(basket));
}
// Creer un article

const cartArticle = document.createElement("article");
let storage = JSON.parse(localStorage.getItem("basket"));
cartArticle.innerHTML = storage.id;
let cart = document.getElementById("cart__items");

// Quantité

let totalQuantity = 0;
for (const element of storage) {
  totalQuantity += parseInt(element.quantity);
}

const totalQuantityHtml = document.getElementById("totalQuantity");
totalQuantityHtml.innerHTML = totalQuantity;

//Calcule du prix
let totalPrice = 0;

function createNewArticle() {
  for (const element of storage) {
    fetch("http://localhost:3000/api/products/" + element.id)
      .then((response) => response.json())
      .then((response) => {
        totalPrice += parseInt(element.quantity) * response.price;
        document.getElementById("totalPrice").innerHTML = totalPrice;
        cart.innerHTML += `<article class="cart__item" data-id="${response._id}" data-color="${element.color}">
      <div class="cart__item__img">
        <img src="${response.imageUrl}" alt="${response.altTxt}">
      </div>
      <div class="cart__item__content">
        <div class="cart__item__content__description">
          <h2>${response.name} </h2>
          <p>${element.color}</p>
          <p> ${response.price} €</p>
        </div>
        <div class="cart__item__content__settings">
          <div class="cart__item__content__settings__quantity">
            <p>Qté : </p>
            <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${element.quantity}">
          </div>
          <div class="cart__item__content__settings__delete">
            <p class="deleteItem" onclick="deleteItem('${element.color}','${response._id}', this)">Supprimer</p>
          </div>
        </div>
      </div>
      </article>`;
      });
  }
}
createNewArticle();

// Supprimer un element du panier

function deleteItem(color, id, ctx) {
  let foundProduct = storage.findIndex((p) => p.id == id && color === p.color);
  if (foundProduct == -1) {
    return;
  }
  storage.splice(foundProduct, 1);
  localStorage.setItem("basket", JSON.stringify(storage));
  console.log(ctx);
  ctx.parentElement.parentElement.parentElement.parentElement.remove();
}

//Modifier les quantités du panier

function modifyQuantity() {
  let quantity = document.getElementsByClassName("itemQuantity").value;
}

modifyQuantity();
