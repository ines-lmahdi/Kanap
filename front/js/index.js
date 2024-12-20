/*
1/ Faire un fetch de http://localhost:3000/api/products

2/ Dans la reponse du fetch, faire une boucle ou pour chaque produit 
trouver, créer un nouvel element et implementer ce produit avec les 
données trouver

3/ Dans le catch, faire un message d'erreur dans le cas où l'api ne repond pas.

*/

// fetch("http://localhost:3000/api/products")
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

fetch("http://localhost:3000/api/products")
  .then((res) => res.json())
  .then((data) => {
    for (const product of data) {
      const items = document.querySelector("#items");
      const article = document.createElement("article");
      const link = document.createElement("a");
      const image = document.createElement("img");
      const description = document.createElement("p");
      const name = document.createElement("h3");

      link.href = "./product.html?id=" + product._id;
      image.src = product.imageUrl;
      image.alt = product.altTxt;
      name.innerHTML = product.name;
      description.innerHTML = product.description;
      name.innerHTML = product.name;

      items.append(link);
      link.append(article);
      article.append(name);
      article.append(image);
      article.append(description);
    }
  })
  .catch((err) => console.log(err));
