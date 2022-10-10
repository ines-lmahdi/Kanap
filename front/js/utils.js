function getCart() {
    const jsonCart = localStorage.getItem('cart');

    if (jsonCart !== null) {
        return JSON.parse(jsonCart);
    }

    return {};
}
