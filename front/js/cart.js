// VALIDATION DE L'ADRESSE MAIL

// Email
/*
let email = document.getElementById("mail");

email.addEventListener("keyup", function (event){
    if(email.validity.typeMismatch){
        email.setCustomValidity("Veuillez renseigner un email valide");
    } else{
        email.setCustomValidity("");
    }
});*/

// CREATION DU PANIER
/* id = cart__items
 <article class="cart__item" data-id="{product-ID}" data-color="{product-color}">
<div class="cart__item__img">
  <img src="../images/product01.jpg" alt="Photographie d'un canapé">
</div>
<div class="cart__item__content">
  <div class="cart__item__content__description">
    <h2>Nom du produit</h2>
    <p>Vert</p>
    <p>42,00 €</p>
  </div>
  <div class="cart__item__content__settings">
    <div class="cart__item__content__settings__quantity">
      <p>Qté : </p>
      <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="42">
    </div>
    <div class="cart__item__content__settings__delete">
      <p class="deleteItem">Supprimer</p>
    </div>
  </div>
</div>
</article> */


/* Pour chaque element different du local Storage,
creer un article avec l'id et le l'Option
                (img) une image avec
                (h2) le nom
                (p) l'option
                (p) le prix unitaire
                (p) la quantité
*/

/*
cardArticle.dataset = localStorage.getItem('basket','id');
cart__items.append(cartArticle);*/


//let cart = localStorage.getItem('basket');

/*
for(let element in localStorage){
    console.log(localStorage.getItem('basket','id'));

    //Créer un article

    const article = document.createElement('article');
    article.append(localStorage.getItem('basket','id'))

    // Inserer l'image

    const image = document.createElement('img');
    image.src = element.image;
    // Afficher le prix

    const quantityElement = document.createElement("p");
    price.textinner = element.price;

;

};*/


// Creer un article

const cartArticle = document.createElement('article');
const storage = JSON.parse(localStorage.getItem('basket'));
cartArticle.innerHTML = storage.id;
let cart = document.getElementById('cart__items');

// Quantité
let totalQuantity = 0;
for(const element of storage){
  totalQuantity += parseInt(element.quantity);
}

const totalQuantityHtml = document.getElementById('totalQuantity');
totalQuantityHtml.innerHTML = totalQuantity;

//Calcule du prix
 let totalPrice = 0;

//Panier
//Creer une fonction
for( const element of storage){
  fetch('http://localhost:3000/api/products/'+ element.id)
  .then (response => response.json())
  .then (response =>{
    totalPrice += parseInt(element.quantity)* response.price;
    document.getElementById('totalPrice').innerHTML = totalPrice;
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
          <p class="deleteItem">Supprimer</p>
        </div>
      </div>
    </div>
    </article>`
    console.log(element);
  })}

/*
// Creer une div + balise img

const div = document.createElement('div');
div.className('cart__item__img');
cart.appendChild(div);

// Nom du produit (h2)
const titleProduct = document.createElement('h2');
titleProduct.innerText = storage.title;

// Couleur du produit (p)

const colorProduct = document.createElement('p');
colorProduct.innerText = storage.color;




// Supprimer le panier

let pDiv = document.createElement('p');
let deleteItem = document.getElementById('deleteItem');


function removeFromBasket(product){
  let basket = getBasket();
  basket = basket.filter(p => p.id != product.id);
  saveBasket(basket);
}
deleteItem.addEventListener("click", removeFromBasket);

//Quantité total

let totalQuantity = document.getElementById('totalQuantity');
totalQuantity.textContent = '27';


// Prix Total
let totalPrice = document.getElementById('totalPrice');
totalPrice.textContent ='84';

*/
