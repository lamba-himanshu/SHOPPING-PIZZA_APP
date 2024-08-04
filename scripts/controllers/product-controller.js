//interface between view and Model 

import productOperations from "../services/product-operations.js";

//data exchange between view and modal
async function loadPizzas(){
    const pizzas = await productOperations.loadProducts();
    console.log('pizzas are ',pizzas);
    for(let pizza of pizzas){
        preparePizzaCard(pizza);
    }
}
loadPizzas();

//function add to cart
function addToCart(){
    //this: current calling object reference 
    console.log("Add to Cart called",this);
    const currentButton=this;
    const pizzaId = currentButton.getAttribute('product-id');
    console.log('pizza id is ', pizzaId);
    productOperations.search(pizzaId);
    printBasket();
}

function printBasket(){
    const cartProducts = productOperations.getProductInCart();
    const basket = document.querySelector('#basket');
    basket.innerHTML='';
    for(let product of cartProducts){
        const li = document.createElement('li');
        li.innerText = `Pizza Name: ${product.name}, Price: ${product.price}`;
        basket.appendChild(li);
    }
}

function preparePizzaCard(pizza){
    const outputDiv= document.querySelector('#output');

    const colDiv= document.createElement('div');
    colDiv.className= 'col-4';

    const cardDiv= document.createElement('div');
    cardDiv.className= 'card';
    cardDiv.style= "width: 15rem;";
    colDiv.appendChild(cardDiv);

    const img= document.createElement('img');
    img.src= pizza.url;
    img.className= 'card-img-top';
    cardDiv.appendChild(img);

    const cardBody= document.createElement('div');
    cardBody.className= 'card-body';
    cardDiv.appendChild(cardBody);

    const h5=document.createElement('h5');
    h5.className='card-title';
    h5.innerText=pizza.name;

    const pTag=document.createElement('p');
    pTag.className='card-text';
    pTag.innerText=pizza.desc;

    const button =document.createElement('button');
    button.setAttribute('product-id',pizza.id);
    button.addEventListener('click',addToCart);
    button.innerText='Add to Cart';
    button.className='btn btn-primary';

    cardBody.appendChild(h5);
    cardBody.appendChild(pTag);
    cardBody.appendChild(button);
    outputDiv.appendChild(colDiv);
}