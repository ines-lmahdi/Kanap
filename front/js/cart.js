/*

PROPRIETES LOCALSTORAGE

localStorage.setItem('');-------> Ajoute une entrée
localStorage.getItem(); --------> Obtenir les données de l'élément depuis le stokage
localStorage.length ; ----------> Retourne un entier representatn le nombre d'items stokés dans l'objet
localStorage.removeItem(''); ---> Suppression d'un element
localStorage.clear(); ----------> Suppression de tous les élémnents du localStorage.

PROPRIETES STORAGE

Storage.key(); ----------------> prend un nombre n en argument et retourne la n-ième clé contenue dans storage.
Storage.getItem(); ------------> Lorqu'on lui passe le nom d'une clé, cette méthode renvoie la valeur de la clé correspondante.
Storage.setItem(); ------------> Lorqu'on lui passe un nom de clé et une valeur, cette méthode ajoute cette clé et cette valeur dans le stockage.
                                 Si la clé existe déjà, elle met à jour la valeur.
Storage.removeItem(); ---------> Lorqu'on lui passe le nom d'une clé, cette méthode supprime cette clé du stockage.
Storage.clear(); --------------> Lorsqu'elle est appelée, cette méthode supprime toutes les clés du stockage.
Storage.length; ---------------> Renvoie un entier représentant le nombre d'éléments contenus dans l'objet Storage.


Il faut faire un panier avec JSON

Faire une boucle pour creer le panier

*/


/*const productImage = document.createElement('img');
productImage.src = produitData.imageUrl;
productImage.alt = produitData.altTxt
image.append(productImage);*/

//for (localStorage)

const fetchProduit = async() => {
    await fetch(`http://localhost:3000/api/products/${produit}`)
    .then((Response) => Response.json())
    .then ((promise) => {
        produitData = promise ;
        console.log((produitData.name));


    const article = document.createElement('article');
        //article.id = `${localStorage.getItem("référence")}`;
        //article.color = `${localStorage.getItem("option")}`;
        cart__items.append(article);


    const divImage= document.createElement('div');
        divImage.className = ("cart__items__img");
        cart__items.append(divImage);

    const image = document.createElement('img');
        image.src = produitData.imageUrl;
        image.alt = produitData.altTxt;
        image.append(image);

    const divContent= document.createElement('div');
        divImage.className = ("cart__items__content");
        cart__items.append(divContent);

    const divDescription= document.createElement('div');
        divDescription.className = ("cart__items__content__description");
        cart__items.append(divDescription);

    const titre = document.createElement('h2');
        h2.text= `${localStorage.getItem("name")}`;
        divDescription.append(titre);

    const option= document.createElement('p');
        p.text= `${localStorage.getItem("option")}`;
        divDescription.append(option);

    const prix = document.createElement('p');
        p.text = `${localStorage.getItem("prix")}`;
        divDescription.append(prix);
    }
    break
};




fetchProduit() ;


const local = JSON.parse(localStorage.getItem("kanap"));
if(local != null)
h1.textContent = `Bonjour ${localStorage.getItem("nom")}`;

localStorage.setItem("prix", JSON.stringify(kanap));
document.location.reload();
