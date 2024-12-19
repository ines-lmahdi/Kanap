// Display form
let form = document.querySelector(".cart__order__form");
const formData = new FormData(form);
const data = {};
const products = JSON.parse(localStorage.getItem("cart"));
console.log(products);

// dans le tableau, parcourir chez id pour recuperer son id et ne mettre dans l'order uniquement son id
// revoir les cours sur comment parcourir un array et un tableau

let productId = [];
for (const element of products) {
  let productId = element.id;
}
console.log(productId);

const order = {
  contact: {
    firstName: firstName.value,
    lastName: lastName.value,
    address: address.value,
    city: city.value,
    email: email.value,
  },
  products: products,
};
console.log(order);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  event.stopPropagation();
  console.log(products);

  if (
    !controlFirstName() ||
    !controlLastName() ||
    !controlAddress() ||
    !controlCity() ||
    !controlEmail()
  ) {
    return;
  }

  fetch("http://localhost:3000/api/products/order", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(),
  })
    .then((res) => res.json())
    .then((data) => {
      //window.location = form.getAttribute("action") + data.orderId;
      document.location.href = `confirmation.html?orderId=${data.orderId}`;
    })
    .catch((error) => window.alert(error));
});

// REGEX

const validateField = (selector, regex, errorMessage) => {
  const fieldValue = document.querySelector(selector).value;

  if (regex.test(fieldValue)) {
    return true;
  } else {
    window.alert(errorMessage);
    return false;
  }
};

const controlFirstName = () => {
  return validateField(
    "#firstName",
    /^[A-Za-zéèëêï]{2,40}$/,
    "Le prénom n'est pas valide"
  );
};

const controlLastName = () => {
  return validateField(
    "#lastName",
    /^[A-Za-zéèëêï]{2,40}$/,
    "Le nom n'est pas valide"
  );
};

const controlAddress = () => {
  return validateField(
    "#address",
    /^[A-Za-zéèëêï. 0-9-]{5,50}$/,
    "L'adresse n'est pas valide"
  );
};

const controlCity = () => {
  return validateField(
    "#city",
    /^[A-Za-zéèëêï.-]{2,100}$/,
    "La ville n'est pas valide"
  );
};

const controlEmail = () => {
  return validateField(
    "#email",
    /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
    "L'email est invalide"
  );
};

// const sendForm = form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   event.stopPropagation();

//   if (
//     !controlFirstName() ||
//     !controlLastName() ||
//     !controlAddress() ||
//     !controlCity() ||
//     !controlEmail()
//   ) {
//     return;
//   }

//   data.contact = Object.fromEntries(formData);
//   data.products = [];

//   for (element of products) {
//     data.products.push(element.id);
//   }
//   console.log(data);

//   fetch("http://localhost:3000/api/products/order", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   })
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//       window.location = form.getAttribute("action") + data.orderId;
//     })
//     .catch((error) => window.alert(error));
// });