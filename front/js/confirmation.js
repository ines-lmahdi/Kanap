const orderId = window.location.search.split("?orderId=").join("");

const orderNumber = document.getElementById('orderId');

orderNumber.innerHTML = orderId;

localStorage.removeItem('basket');