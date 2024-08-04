//perform CRUD operations on the products
 import Product from "../models/product.js";
import makeNetworkCall from "./api-client.js";

 const productOperations= {
    async loadProducts(){
        const pizzas = await makeNetworkCall();
        const pizzaArray= pizzas['Vegetarian'];
        const ProductsArray = pizzaArray.map(pizza =>{
            const currentPizza =new Product(pizza.id ,pizza.name, pizza.menu_description, pizza.price, pizza.assets.product_details_page[0].url);
            return currentPizza
        });
        console.log('Product Array ', ProductsArray);
        return ProductsArray;
    },
    sordProducts(){

    },
    searchZProducts(){

    }
 }

 export default productOperations;