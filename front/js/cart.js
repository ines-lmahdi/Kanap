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
const cartArticle = document.createElement('article');/*
cardArticle.dataset = localStorage.getItem('basket','id');
cart__items.append(cartArticle);*/


//let cart = localStorage.getItem('basket');


for(let element in localStorage){
    console.log(localStorage.getItem('basket','id'));

    //Créer un article

    const article = document.createElement('article');
    article.append(localStorage.getItem('basket','id'))

    // Inserer l'image

    const image = document.createElement('img');
    image.src = element.image;
    // Afficher le prix

    const price = document.createElement("p");
    price.textinner = element.price;

;

};
