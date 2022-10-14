
const productId = window.location.search.split("?id=").join("");//Regarder comment utiliser la classe UrlSearchParam

fetch('http://localhost:3000/api/products/' + productId)
.then((response) => response.json())// tester la reponse avant de retourner la conversion du body
.then ((productData) => { // Non promise n'est pas une promise mais les données récupérées du corps de la réponse
    console.log((productData.name));

        // IMPLEMENTATION TITRE PAGE

    const productPageTitle = document.title;
    document.title = productData.name;


    // IMPLEMENTATION IMAGE

    const productImage = document.createElement('img');
    productImage.src = productData.imageUrl;
    productImage.alt = productData.altTxt;
    image.append(productImage);

    // IMPLEMENTATION H1

    const productTitle = document.createElement('h1');
    productTitle.textContent = productData.name;
    title.append(productTitle);

        // IMPLEMENTATION DESCRIPTION

    const productDescription = document.createElement('p');
    productDescription.textContent = productData.description;
    description.append(productDescription);

        // IMPLEMENTATION PRIX

    const productPrice = document.createElement('span');
    productPrice.textContent = productData.price;
    price.append(productPrice);

        // IMPLEMENTATION OPTION COLOR

    const colors = document.getElementById('colors');
    const option = productData.colors;

    option.forEach((element,key) => {
        colors[key]= new  Option(element,key);

    });

    // NOMBRE DE PRODUIT SELECTIONNÉ


    // MESSAGE D'ALERTE

    const addToCart = document.getElementById('addToCart');
    addToCart.addEventListener('click', event => {
        const cart = getCart();
        let quantityKanap = document.getElementById('itemQuantity');
        //localStorage.setItem(JSON.stringify(cart));
        window.alert('Félicitation ! Votre article '+ productData.name + '  ' + option + ' a été ajouté '+ quantity.value +' fois au panier !');
    });

});

    /*
        //si produit existe
        cart[produitData.id + colors.value].quantity = ajout de la quantite à la quantité initiale
        // si produit n'xiste pas dans le panier
        cart[produitData.id + colors.value] = {
            id: id,
            quantity: quantity,
            color: color
        }*/













/*
addToCart.onclick = () =>{
    const kanap = {
        nom: produitData.name,
        option: colors.value,
        reference: produitData._id,
        prix: produitData.price,
        quantité: quantity.value,
        image: produitData.imageUrl
    }
    localStorage.setItem(produitData.name + colors.value, JSON.stringify(kanap));


    document.location.reload();


    //localStorage.setItem(produitData.name + colors.value, quantity.value)
    */







//https://www.youtube.com/watch?v=vsiajnM7Xuw&t=518s