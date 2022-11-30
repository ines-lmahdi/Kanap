const productId = window.location.search.split("?id=").join("");//Regarder comment utiliser la classe UrlSearchParam
let colorSelector = document.getElementById('colors');

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
/*
    const colors = document.getElementById('colors');
    const option = productData.colors;

    option.forEach((element,key) => {
        colors[key]= new  Option(element,key);

    });*/

    let colorSelector = document.getElementById('colors');
    let newOption = document.createElement('option');
    const tableauColor = productData.colors;
    console.log(tableauColor);

    for(let element of tableauColor){
        let newColor = new Option(element);
        newOption.setAttribute('value',element);
        const select = document.querySelector('select');
        select.add(newColor,undefined);
    };

    const button = document.querySelector('button');
    const select = document.querySelector('select');
    const optionQ = document.querySelector('option');
    const quantity = document.getElementById('quantity');
    const objectSelectionner = select.selectedIndex ;
    const key =  productId + objectSelectionner ;
    const cart = {
        'id' : key,
        'option': optionQ,
        'quantity': quantity.value,
    }
    const jsonCart = JSON.stringify(cart);
// Pour chaque event click, il faudra rajouter une ligne key.
    button.addEventListener('click', ()=>{
        localStorage.setItem( 'product' , jsonCart);
        console.log('product', jsonCart);
    });

});



//  LOCALSTORAGE VALIDÉ !!



//localStorage.clear();

/*function getCart() {
    const jsonCart = localStorage.getItem('Cart');

    if (jsonCart !== null) {
        cart[productId + objectSelectionner] = {
            id: productData.id,
            quantity: quantity,
            color: color.Value,
        }
        return JSON.parse(jsonCart);
    }
}*/



        /*//si produit existe
        cart[produitData.id + colors.value].quantity = ajout de la quantite à la quantité initiale
        // si produit n'existe pas dans le panier
        cart[produitData.id + colors.value] = {
            id: id,
            quantity: quantity,
            color: color
        }*/
