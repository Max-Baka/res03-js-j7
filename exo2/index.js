import { Mage } from './mage.js';
window.addEventListener("DOMContentLoaded", function(){
    
    let character = new Mage("50", "50");

    console.log(character);
});

import { Warrior } from './warrior.js';
window.addEventListener("DOMContentLoaded", function(){
    
    let character = new Warrior("60", "10");

    console.log(character);
});