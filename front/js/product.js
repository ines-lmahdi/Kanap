const productId = window.location.search.split("?id=").join("");//Regarder comment utiliser la classe UrlSearchParam
let colorSelector = document.getElementById('colors');


fetch('http://localhost:3000/api/products/' + productId)
.then((response) => response.json())// tester la reponse avant de retourner la conversion du body
.then ((productData) => { // Non promise n'est pas une promise mais les données récupérées du corps de la réponse
    console.log((productData.name));

        // IMPLEMENTATION TITRE PAGE

    const productPageTitle = document.title;
    document.title = productData.name;


    // IMPLEMENTATION IMAGE

    const productImage = document.createElement('img');
    productImage.src = productData.imageUrl;
    productImage.alt = productData.altTxt;
    image.append(productImage);

    // IMPLEMENTATION H1

    const productTitle = document.createElement('h1');
    productTitle.textContent = productData.name;
    title.append(productTitle);

    // IMPLEMENTATION DESCRIPTION

    const productDescription = document.createElement('p');
    productDescription.textContent = productData.description;
    description.append(productDescription);

    // IMPLEMENTATION PRIX

    const productPrice = document.createElement('span');
    productPrice.textContent = productData.price;
    price.append(productPrice);

    // IMPLEMENTATION OPTION COLOR

    let colorSelector = document.getElementById('colors');
    let newOption = document.createElement('option');
    const tableauColor = productData.colors;
    console.log(tableauColor);

    for(let element of tableauColor){
        let newColor = new Option(element);
        newOption.setAttribute('value',element);
        const select = document.querySelector('select');
        select.add(newColor,undefined);
    };
});
