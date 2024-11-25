/******************************** PAGE PRODUIT ********************************/
const productId = window.location.search.split("?id=").join("");

const params = fetch("http://localhost:3000/api/products/" + productId)
  .then((response) => response.json())
  .then((productData) => {
    // Create element

    const productImage = document.createElement("img");
    const productTitle = document.createElement("h1");
    const productDescription = document.createElement("p");
    const productPrice = document.createElement("span");
    let newOption = document.createElement("option");
    const tableauColor = productData.colors;

    // Implementation name

    document.title = productData.name;

    // Implementation image

    productImage.src = productData.imageUrl;
    productImage.alt = productData.altTxt;
    image.append(productImage);

    // Implementation H1

    productTitle.textContent = productData.name;
    title.append(productTitle);

    // Implementation description

    productDescription.textContent = productData.description;
    description.append(productDescription);

    // Implementation price

    productPrice.textContent = productData.price;
    price.append(productPrice);

    // Implementation option color

    for (let element of tableauColor) {
      let newColor = new Option(element);
      newOption.setAttribute("value", element);
      const select = document.querySelector("select");
      select.add(newColor, undefined);
    }

    // Add to card button

    const addToCartButton = document.querySelector("#addToCart"); // Assurez-vous que ce bouton existe dans votre HTML
    addToCartButton.addEventListener("click", () => {
      const selectedColor = document.querySelector("#colors").value;
      const quantity = parseInt(document.querySelector("#quantity").value, 10);

      if (!selectedColor || quantity <= 0) {
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
  });
