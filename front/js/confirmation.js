//Display confirmation
const confirmation = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const orderId = urlParams.get("orderId");

  if (orderId) {
    const orderNumber = document.getElementById("orderId");
    orderNumber.innerHTML = orderId;

    localStorage.removeItem("basket");
  } else {
    window.alert("Numéro de commande introuvable.");
  }
};

confirmation();
