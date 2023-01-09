

// REGEX

function controlFirstName(){
    const firstNameValue = document.querySelector('#firstName').value;
    if(/^[A-Za-z]{2,20}$/.test(firstNameValue)){
        return true;
    } else{
        window.alert("Le nom n'est pas valide");
        return false;
    }
}

function controlLastName(){
    const lastNameValue = document.querySelector('#lastName').value;
    if(/^[A-Za-z]{2,20}$/.test(lastNameValue)){
        return true;
    } else{
        window.alert("Le nom n'est pas valide");
    }
}

function controlAddress(){
    const addressValue = document.querySelector('#address').value;
    if(/^[A-Za-z 0-9]{5,50}$/.test(addressValue)){
        return true;
    } else{
        window.alert("l'adresse n'est pas valide");
    }
}

function controlCity(){
    const cityValue = document.querySelector('#city').value;
    if(/^[A-Za-z]{2,100}$/.test(cityValue)){
        return true;
    } else{
        window.alert("La ville n'est pas valide");
    }
}

function controlEmail(){
    const emailValue = document.querySelector('#email').value;
    if(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(emailValue)){
        return true;
    } else{
        window.alert("email est invalide");
    }
}
function saveFormulaire(){
    let form = document.querySelector('.cart__order__form');
    form.addEventListener('submit',event => {
        event.preventDefault();

        if (!controlFirstName()|| !controlLastName() || !controlAddress() || !controlCity() || !controlEmail()
        ){
            return
        };

        const formData = new FormData(form);
        const data = {};
        data.contact = Object.fromEntries(formData);
        data.products = [];
        const products = JSON.parse(localStorage.getItem('basket'));
        for(element of products){
            data.products.push(element.id)
        }
        console.log(data);

        fetch('http://localhost:3000/api/products/order',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(res => res.json())
      .then(data =>{
        console.log(data.orderId)
        window.location = 'http://127.0.0.1:5501/front/html/confirmation.html?orderId='+data.orderId;
        document.getElementById
    })
      .catch(error => console.log(error));
})}
saveFormulaire();



