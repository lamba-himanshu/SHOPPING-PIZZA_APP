//interface between view and Model 

import productOperations from "../services/product-operations.js";

//data exchange between view and modal
async function loadPizzas(){
    const pizzas = await productOperations.loadProducts();
    console.log('pizzas are ',pizzas);
    for(let pizza of pizzas){
        preparePizzaCard();
    }
}
loadPizzas();

function preparePizzaCard(){
    const outputDiv = document.querySelector("#output");
    const colDiv =document.createElement('div');
    colDiv.className= "col-4";
    const cardDiv =document.createElement('div');
    cardDiv.className= "card";
    cardDiv.style= "width:18rem";
    colDiv.appendChild(cardDiv);
    const img =document/createElement('img');
    img.src='';
    img.className="card-img-top";
    cardDiv.appendChild(img);
    const cardBody=document.createElement('div');
    cardBody.className='card-body';
    cardDiv.appendChild(cardBody);
    const h5 =document.createElement("h5");
    h5.className='card-title';
    h5.innerText='card-title';
    const pTag =document.createElement("p");
    pTag.className='card-text';
    pTag.innerText='some text.....';
    const button = document.createElement('button');
    button.innerText="Add to Cart";
    button.className='btn btn-primary';
    cardBody.appendChild(h5);
    cardBody.appendChild(pTag);
    cardBody.appendChild(button);
    outputDiv.appendChild(colDiv);
}