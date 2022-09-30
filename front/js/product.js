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

        const productImage = document.createElement('img');
            productImage.src = produitData.imageUrl;
            productImage.alt = produitData.altTxt
            image.append(productImage);


        const productTitle = document.createElement('h1');
            productTitle.textContent = produitData.name;
            title.append(productTitle);

        const productDescription = document.createElement('p');
            productDescription.textContent = produitData.description;
            description.append(productDescription);

        const productPrice = document.createElement('span');
            productPrice.textContent = produitData.price;
            price.append(productPrice);

        const productColor1 = document.createElement('option');
            productColor1.text = produitData.colors[0];
            colors.append(productColor1);

        const productColor2 = document.createElement('option');
            productColor2.text = produitData.colors[1];
            colors.append(productColor2);

        const productColor3 = document.createElement('option');
            productColor3.text = produitData.colors[2];
            colors.append(productColor3);



        });
};

fetchProduit() ;
/*
const produitDisplay = async () => {
    await fetchProduit();

    document.getElementById("item").innerHTML = `
    <article id="card${produitData._id}>
        <div class="item__img" id="image">
                <img src=" ${produitData.imageURL} " alt=" ${produitData.altTxt}">
                </div>
                <div class="item__content">
                <div class="item__content__titlePrice">
                    <h1 id="title"> ${produitData.name.toUpperCase()} </h1>
                    <p>Prix : <span id="price"> ${produitData.price .toString() .replace(/0+$/, "")} </span>€</p>
                </div>

                <div class="item__content__description">
                    <p class="item__content__description__title">Description :</p>
                    <p id="description"> ${produitData.description} </p>
                </div>

                <div class="item__content__settings">
                    <div class="item__content__settings__color">
                    <label for="color-select">Choisir une couleur :</label>
                    <select name="color-select" id="colors">
                        <option value="">--SVP, choisissez une couleur --</option>
                          <option value="vert">vert</option>
                        <option value="blanc">blanc</option> -->
                    </select>
                    </div>
    `;
};

produitDisplay();





//https://www.youtube.com/watch?v=vsiajnM7Xuw&t=518s
























/*let params = new
URLSearchParams(window.location.search);
let price = params.get("price");
let title = params.get("name")
console.log(params);


// Recuperation d'une chaine de requete dans l'url

const product =  window.location.search;
console.log(product);

fetch('http://localhost:3000/api/products')
    .then(response => {
        if (response.ok) {
            return response.json();
        }

        throw new Error('Impossible de charger les produits');
    })
    .then(data => {
        for(const product of data) {  // Possible erreur
            console.log(product.name, product._id);

            const productTitle = document.createElement('h1');
            productTitle.textContent = product.name;
            title.append(productTitle);

            const productDescription = document.createElement('p');
            productDescription.textContent = product.description;
            description.append(productDescription);

            const productPrice = document.createElement('span');
            productPrice.textContent = (product.price/100);       // Possible erreur au niveau du texteContent
            price.append(productPrice);

            const productImage = document.createElement('img');
            productImage.src = product.imageUrl;
            productImage.alt = product.altTxt
            image.append(productImage);
        }
    })
    .catch(error => {
        console.log('toto', error.message);
    })
}*/