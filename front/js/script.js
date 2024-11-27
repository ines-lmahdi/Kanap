/*************************** Home page: product display **********************/

fetch("http://localhost:3000/api/products")
  .then((response) => {
    if (response.ok) {
      return response.json();
    }

    throw new Error("Impossible de charger les produits");
  })
  .then((data) => {
    for (const product of data) {
      // Create element
      const productLink = document.createElement("a");
      const productArticle = document.createElement("article");
      const productImage = document.createElement("img");
      const productTitle = document.createElement("h3");
      const productDescription = document.createElement("p");

      // Product id

      productLink.href = "./product.html?id=" + product._id;
      items.append(productLink);
      productLink.append(productArticle);

      // Image + Text alternatif

      productImage.src = product.imageUrl;
      productImage.alt = product.altTxt;
      productArticle.append(productImage);

      // Product name

      productTitle.textContent = product.name;
      productArticle.append(productTitle);

      // Description

      productDescription.textContent = product.description;
      productArticle.append(productDescription);
    }
  })
  .catch((error) => {
    window.alert("erreur", error.message);
  });
