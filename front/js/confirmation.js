//Display confirmation

const urlParams = new URLSearchParams(window.location.search);
const orderId = urlParams.get("orderId");
console.log(urlParams);
if (orderId) {
  const orderNumber = document.getElementById("orderId");
  console.log(orderId);
  orderNumber.innerHTML = orderId;
  localStorage.removeItem("cart");
} else {
  window.alert("Numéro de commande introuvable.");
}
