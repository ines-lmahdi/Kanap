fetch("http://localhost:3000/api/products")
  .then((response) => {
    if (response.ok) {
      return response.json();
    }

    throw new Error("Impossible de charger les produits");
  })
  .then((data) => {
    for (const product of data) {
      // console.log(product.name, product._id);

      // LIEN
      const productLink = document.createElement("a");

      productLink.href = "./product.html?id=" + product._id;
      items.append(productLink);

      //ARTICLE
      const productArticle = document.createElement("article");

      productLink.append(productArticle);

      // IMAGE + TEXTE ALT
      const productImage = document.createElement("img");

      productImage.src = product.imageUrl;
      productImage.alt = product.altTxt;
      productArticle.append(productImage);

      // TITRE
      const productTitle = document.createElement("h3");

      productTitle.textContent = product.name;
      productArticle.append(productTitle);

      // DESCRIPTION
      const productDescription = document.createElement("p");

      productDescription.textContent = product.description;
      productArticle.append(productDescription);
    }
  })
  .catch((error) => {
    console.log("toto", error.message);
  });
