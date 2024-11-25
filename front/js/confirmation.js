//Display confirmation
const confirmation = () => {
  const orderId = window.location.search.split("?orderId=").join("");
  const orderNumber = document.getElementById("orderId");

  orderNumber.innerHTML = orderId;

  // Cleaning basket

  localStorage.removeItem("basket");
};

confirmation();
