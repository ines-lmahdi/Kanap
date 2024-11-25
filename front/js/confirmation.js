//DISPLAY ORDER ID
const confirmation = () => {
  const orderId = window.location.search.split("?orderId=").join("");
  const orderNumber = document.getElementById("orderId");

  orderNumber.innerHTML = orderId;

  // CLEANING BASKET

  localStorage.removeItem("basket");
};

confirmation();
