// Données completes de l'API en tableau

/*
fetch('http://localhost:3000/api/products')
    .then(res => res.json())
    .then(res => console.table(res))
*/

// Afficher dans la console l'image

/*
fetch('http://localhost:3000/api/products')
    .then(res => res.json())
    .then(data => console.log(data[0].imageUrl))
*/

// Afficher dans la console toutes les données d'un kanap
/*
fetch('http://localhost:3000/api/products')
    .then(res => res.json())
    .then(data => {
        href = console.log(data[0]._id);
        h3 = console.log(data[0].name);
        p = console.log(data[0].description);
        img = console.log(data[0].imageUrl);
    })*/

fetch('http://localhost:3000/api/products')
    .then(response => {
        if (response.ok) {
            return response.json();
        }

        throw new Error('Impossible de charger les produits');
    })
    .then(data => {
        for(const product of data) {
            console.log(product.name, product._id);

            // LIEN

            const productLink = document.createElement('a');
            productLink.href = './product.html?id=' + product._id;
            items.append(productLink);

            //ARTICLE

            const productArticle = document.createElement('article');
            productLink.append(productArticle)

            // IMAGE + TEXTE ALT

            const productImage = document.createElement('img');
            productImage.src = product.imageUrl;
            productImage.alt = product.altTxt
            productArticle.append(productImage);

            // TITRE

            const productTitle = document.createElement('h3');
            productTitle.textContent = product.name;
            productArticle.append(productTitle);

            // DESCRIPTION

            const productDescription = document.createElement('p');
            productDescription.textContent = product.description;
            productArticle.append(productDescription);
            }

        }

    )
    .catch(error => {
        console.log('toto', error.message);
    })


