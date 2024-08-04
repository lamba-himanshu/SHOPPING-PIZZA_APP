//perform CRUD operations on the products
import Product from "../models/product.js";
import makeNetworkCall from "./api-client.js";

 const productOperations= {
    products:[],  //key:value
    search(pizzaId){
        const product = this.products.find(currentProduct => currentProduct.id ==pizzaId);
        console.log('prduct found',product);
        product.isAddedInCart = true;
        console.log(this.products);
        
    },
    getProductInCart(){
        const productInBasket = this.products.filter(product => product.isAddedInCart==true);
        return productInBasket;
    },
    async loadProducts(){
        const pizzas = await makeNetworkCall();
        const pizzaArray= pizzas['Vegetarian'];
        const ProductsArray = pizzaArray.map(pizza =>{
            const currentPizza =new Product(pizza.id ,pizza.name, pizza.menu_description, pizza.price, pizza.assets.product_details_page[0].url);
            return currentPizza;
        });
        console.log('Product Array ', ProductsArray);
        this.products = ProductsArray;
        return ProductsArray;
    },
    sortProducts(){

    },
    searchProducts(){

    }
 }

export default productOperations;