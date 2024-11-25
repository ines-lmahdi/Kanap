/******************************** PAGE PRODUIT ********************************/

const productId = window.location.search.split("?id=").join("");

const params = fetch("http://localhost:3000/api/products/" + productId)
  .then((response) => response.json())
  .then((productData) => {
    //CONST = CREATE ELEMENT

    const productImage = document.createElement("img");
    const productTitle = document.createElement("h1");
    const productDescription = document.createElement("p");
    const productPrice = document.createElement("span");
    //let colorSelector = document.getElementById("colors");
    let newOption = document.createElement("option");
    const tableauColor = productData.colors;
    // const productPageTitle = document.title;
    // IMPLEMENTATION NOM

    document.title = productData.name;

    // IMPLEMENTATION IMAGE

    productImage.src = productData.imageUrl;
    productImage.alt = productData.altTxt;
    image.append(productImage);

    // IMPLEMENTATION H1

    productTitle.textContent = productData.name;
    title.append(productTitle);

    // IMPLEMENTATION DESCRIPTION

    productDescription.textContent = productData.description;
    description.append(productDescription);

    // IMPLEMENTATION PRIX

    productPrice.textContent = productData.price;
    price.append(productPrice);

    // IMPLEMENTATION OPTION COLOR

    for (let element of tableauColor) {
      let newColor = new Option(element);
      newOption.setAttribute("value", element);
      const select = document.querySelector("select");
      select.add(newColor, undefined);
    }
  });
