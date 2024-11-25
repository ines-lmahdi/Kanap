// FORM
const saveForm = () => {
  let form = document.querySelector(".cart__order__form");
  const formData = new FormData(form);
  const data = {};
  const products = JSON.parse(localStorage.getItem("basket"));

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (
      !controlFirstName() ||
      !controlLastName() ||
      !controlAddress() ||
      !controlCity() ||
      !controlEmail()
    ) {
      return;
    }

    data.contact = Object.fromEntries(formData);
    data.products = [];
    for (element of products) {
      data.products.push(element.id);
    }

    fetch("http://localhost:3000/api/products/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(form.getAttribute("action"));
        window.location = form.getAttribute("action") + data.orderId;
      })
      .catch((error) => console.log(error));
  });
};
saveForm();

// REGEX

const controlFirstName = () => {
  const firstNameValue = document.querySelector("#firstName").value;

  if (/^[A-Za-zéèëêï]{2,40}$/.test(firstNameValue)) {
    return true;
  } else {
    window.alert("Le prénom n'est pas valide");
    return false;
  }
};

const controlLastName = () => {
  const lastNameValue = document.querySelector("#lastName").value;

  if (/^[A-Za-zéèëêï]{2,40}$/.test(lastNameValue)) {
    return true;
  } else {
    window.alert("Le nom n'est pas valide");
  }
};

const controlAddress = () => {
  const addressValue = document.querySelector("#address").value;

  if (/^[A-Za-zéèëêï.- 0-9]{5,50}$/.test(addressValue)) {
    return true;
  } else {
    window.alert("l'adresse n'est pas valide");
  }
};

const controlCity = () => {
  const cityValue = document.querySelector("#city").value;

  if (/^[A-Za-zéèëêï.-]{2,100}$/.test(cityValue)) {
    return true;
  } else {
    window.alert("La ville n'est pas valide");
  }
};

const controlEmail = () => {
  const emailValue = document.querySelector("#email").value;

  if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(emailValue)) {
    return true;
  } else {
    window.alert("email est invalide");
  }
};
