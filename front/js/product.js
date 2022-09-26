fetch('http://localhost:3000/api/products')
    .then(response => {
        if (response.ok) {
            return response.json();
        }

        throw new Error('Impossible de charger les produits');
    })
    .then(data => {
        for(const product of data) {
            console.log(product.name, product._id);
        }


        })

    .catch(error => {
        console.log('toto', error.message);
    })
