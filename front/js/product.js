// Display page Product

const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");

fetch(`http://localhost:3000/api/products/${productId}`)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Échec de la récupération des données");
    }
    return response.json();
  })
  .then((productData) => {
    // Selecting DOM Elements
    const image = document.querySelector("#image");
    const title = document.querySelector("#title");
    const description = document.querySelector("#description");
    const price = document.querySelector("#price");
    const select = document.querySelector("select");

    document.title = productData.name;

    // Creation of elements
    const productImage = document.createElement("img");
    const productTitle = document.createElement("h1");
    const productDescription = document.createElement("p");
    const productPrice = document.createElement("span");

    // Implementation of elements
    productImage.src = productData.imageUrl;
    productImage.alt = productData.altTxt;
    image.appendChild(productImage);

    productTitle.textContent = productData.name;
    title.appendChild(productTitle);

    productDescription.textContent = productData.description;
    description.appendChild(productDescription);

    productPrice.textContent = `${productData.price} `;
    price.appendChild(productPrice);

    // Implementing color options in select
    const tabColor = productData.colors;
    tabColor.forEach((color) => {
      const newColorOption = document.createElement("option");

      newColorOption.value = color;
      newColorOption.textContent = color;
      select.appendChild(newColorOption);
    });

    //Event button "add to cart"

    const addToCartButton = document.querySelector("#addToCart");

    addToCartButton.addEventListener("click", () => {
      const selectedColor = select.value;
      const quantity = parseInt(document.querySelector("#quantity").value, 10);

      if (!selectedColor || quantity <= 0 || quantity > 101) {
        alert("Veuillez sélectionner une couleur et une quantité valide.");
        return;
      }

      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      const existingProduct = cart.find(
        (item) => item.id === productId && item.color === selectedColor
      );

      if (existingProduct) {
        existingProduct.quantity += quantity;
      } else {
        cart.push({ id: productId, color: selectedColor, quantity });
      }

      localStorage.setItem("cart", JSON.stringify(cart));
      window.location.href = "./cart.html";
    });
  })
  .catch((error) => {
    window.alert("Erreur de chargement des données produit :", error);
  });
