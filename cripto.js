const alfabeto = ["a","b","c","d","e","f","g","h"
,"i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

const vinString = "1HGCM82633A004352";

const arrayVin = vinString.split("");
console.log("arrayVIN", arrayVin);

let array = [];

for (let l = 0; l < arrayVin.length; l++) {
  array[l] = parseInt(arrayVin[l].charCodeAt(0)) + 3;
};

console.log(array);
newArray = [];

// infelizmente meu mac deu pau e me atrapalhei com o tempo.