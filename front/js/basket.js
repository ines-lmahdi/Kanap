// LOCALSTORAGE

//Ajouter au panier

function saveBasket(basket){
    console.log("saveBasket");
    localStorage.setItem("basket", JSON.stringify(basket));
}

// Recuperer ce qu'il y a au panier

function getBasket(){
    let basket = localStorage.getItem("basket");
    if (basket == null){
        return [];
    } else {
    return JSON.parse(basket);
    }
}

// Modifier les quantités

function addBasket(product){
    let basket = getBasket();
    const quantitySelect = document.getElementById('quantity').value;
    const colorSelect = document.getElementById('colors').value;
    let foundProduct = basket.find(p => p.id == productId && colorSelect === p.color);
    if(colorSelect && quantitySelect != 0){
        if (foundProduct != undefined){
            foundProduct.quantity = parseInt(foundProduct.quantity) + parseInt(quantitySelect);
        } else {
            basket.push({
                id: productId,
                quantity: quantitySelect,
                color: colorSelect,
            });
        }
        console.log(basket);
        saveBasket(basket);
    } else{
        alert("Veuillez sélectionner une couleur ainsi qu'une option")
    }
}

//Modifier les quantités depuis le panier

function changeQuantity(product, quantity){
    let basket = getBasket();
    let foundProduct = basket.find(p => p.id == product.id);
    if (foundProduct != undefined) {
        foundProduct.quantity += quantity;
        if(foundProduct.quantity <= 0){
            removeFromBasket(foundProduct);
        } else{
            saveBasket(basket);
        }
    }
    //saveBasket(basket);
}

//Calculer le prix

function getNumberProduct(){
    let basket = getBasket();
    let number = 0;
    for(let product of basket){
        number += product.quantity;
    }
    return number;
}

function getTotalPrice(){
    let basket = getBasket();
    let total = 0;
    for(let product of basket){
        total += product.quantity * product.price;
    }
    return total;
}
//localStorage.clear();


// BOUTON addToCart

let addToCart = document.getElementById('addToCart');

addToCart.addEventListener("click", addBasket);
