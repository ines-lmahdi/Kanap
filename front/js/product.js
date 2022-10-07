
const produit = window.location.search.split("?id=").join("");
console.log(produit);

let produitData = [];
console.log(produitData);

const fetchProduit = async() => {
    await fetch(`http://localhost:3000/api/products/${produit}`)
    .then((Response) => Response.json())
    .then ((promise) => {
        produitData = promise ;
        console.log((produitData.name));

         // IMPLEMENTATION TITRE PAGE

        const productPageTitle = document.title;
        document.title = produitData.name;


        // IMPLEMENTATION IMAGE

        const productImage = document.createElement('img');
            productImage.src = produitData.imageUrl;
            productImage.alt = produitData.altTxt
            image.append(productImage);

        // IMPLEMENTATION H1

        const productTitle = document.createElement('h1');
            productTitle.textContent = produitData.name;
            title.append(productTitle);

         // IMPLEMENTATION DESCRIPTION

        const productDescription = document.createElement('p');
            productDescription.textContent = produitData.description;
            description.append(productDescription);

         // IMPLEMENTATION PRIX

        const productPrice = document.createElement('span');
            productPrice.textContent = produitData.price;
            price.append(productPrice);

         // IMPLEMENTATION OPTION COLOR

        const productColor1 = document.createElement('option');
            productColor1.text = produitData.colors[0];
            colors.append(productColor1);

        // NOMBRE DE PRODUIT SELECTIONNÉ


        // MESSAGE D'ALERTE

        const addToCart = document.getElementById('addToCart');
            addToCart.addEventListener('click', event => {
                let quantityKanap = document.getElementById('itemQuantity');
                window.alert('Félicitation ! Votre article '+ produitData.name + '  ' + colors.value + ' ont été ajouté '+ quantity.value +' fois au panier !');
        });

    });

}
fetchProduit() ;



// LOCAL STORAGE

/*
localStorage.setItem("clé", "valeur")
localStorage.getItem("clé")
localStorage.clear();
*/

const local = JSON.parse(localStorage.getItem("kanap"));

addToCart.onclick = () =>{
    const kanap = {

        nom: produitData.name,
        option: colors.value,
        prix: produitData.price,
        quantité: quantity.value
    }
    localStorage.setItem("kanap", JSON.stringify(kanap));
    //document.location.reload();
    //localStorage.setItem(produitData.name + colors.value, quantity.value)
}






//https://www.youtube.com/watch?v=vsiajnM7Xuw&t=518s