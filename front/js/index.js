/*
1/ Faire un fetch de http://localhost:3000/api/products

2/ Dans la reponse du fetch, faire une boucle ou pour chaque produit 
trouver, créer un nouvel element et implementer ce produit avec les 
données trouver

3/ Dans le catch, faire un message d'erreur dans le cas où l'api ne repond pas.

*/
const items = document.querySelector("#items");

// fetch("http://localhost:3000/api/products")
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
fetch("http://localhost:3000/api/products")
  .then((response) => response.json())
  .then((data) => {
    for (const product of data) {
      const productArticle = document.createElement("article");

      const productLink = document.createElement("a");
      productLink.href = "./product.html?id=" + product._id;
      items.append(productLink);
      productLink.append(productArticle);

      const productImage = document.createElement("img");
      productImage.src = product.imageUrl;
      productImage.alt = product.altTxt;
      productArticle.append(productImage);

      const productDescription = document.createElement("p");
      productDescription.innerHTML = product.description;
      productArticle.append(productDescription);
    }
  })
  .catch((err) => console.log(err));
