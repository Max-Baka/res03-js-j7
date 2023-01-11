import { Pizza } from './pizza.js';
window.addEventListener("DOMContentLoaded", function(){
    
    let pizza1 = new Pizza("Yepza", "andouillette", "ananas", "bacon");
    let pizza2 = new Pizza("La Veggie", "tomate", "fromage", "légumes");
    let pizza3 = new Pizza("La Meattie", "tomate", "fromage", "viande");
    let pizza4 = new Pizza("La Fishie", "tomate", "fromage", "poisson");
    console.log(pizza1);
    console.log(pizza2);
    console.log(pizza3);
    console.log(pizza4);
});