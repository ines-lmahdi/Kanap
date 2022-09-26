let url = new URL('http://localhost:3000/api/products');
let params = new URLSearchParams(url.search);


fetch('http://localhost:3000/api/products')
    .then(response => {
        if (response.ok) {
            return response.json();
        }

        throw new Error('Impossible de charger le produit');
    })
    .then(data => {
        for(const product of data) {
            console.log( params);


            // IMAGE

            /*const productImage = document.createElement('img');
            productImage.src = product.imageUrl;
            productImage.alt = product.altTxt;
            item_img.append(productImage);*/

            // TITRE

            const productTitle = document.createElement('h1');
            productTitle.textContent = product.name;
            title.append(productTitle);

            // DESCRIPTION

            const productDescription = document.createElement('p');
            productDescription.textContent = product.description;
            description.append(productDescription);

             // PRIX

             const productPrice = document.createElement('span');
             productPrice.textContent = product.price;
             price.append(productPrice);
        }

    })
    .catch(error => {
        console.log('toto', error.message);
    })