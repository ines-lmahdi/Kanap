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
      // CREATE ELEMENT
      const productLink = document.createElement("a");
      const productArticle = document.createElement("article");
      const productImage = document.createElement("img");
      const productTitle = document.createElement("h3");
      const productDescription = document.createElement("p");

      // PRODUCT ID

      productLink.href = "./product.html?id=" + product._id;
      items.append(productLink);
      productLink.append(productArticle);

      // IMAGE + TEXTE ALT

      productImage.src = product.imageUrl;
      productImage.alt = product.altTxt;
      productArticle.append(productImage);

      // PRODUCT NAME

      productTitle.textContent = product.name;
      productArticle.append(productTitle);

      // DESCRIPTION

      productDescription.textContent = product.description;
      productArticle.append(productDescription);
    }
  })
  .catch((error) => {
    console.log("toto", error.message);
  });
