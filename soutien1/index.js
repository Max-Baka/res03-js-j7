/*
let superheroes = [
    "Superman",
    "Batman",
    "Iron Man",
    "Wonder Woman",
    "Black Widow",
    "Mighty Thor"
];
for(superheroe of superheroes)
{
    console.log(superheroe);
}
*/
/*
let numbers = [23, 54, 145, 325, 42, 987, -21];
for(number of numbers){
    
    if(number >= 100){
        console.log(number);
    }
}
*/

let data = [
    ["George", "Barack", "Donald"],
    [43, 44, 45],
    ["Superman", "Batman", "Iron Man"],
    ["Clark", "Bruce", "Tony"]
];
/*
for(let i = 0; i < data.length; i++){
console.log(data[i]);
}
*/
for(elements of data){
    for( element of data){
    console.log(elements);
}
}