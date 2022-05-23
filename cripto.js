const alfabeto = ["a","b","c","d","e","f","g","h"
,"i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

const vinString = "1HGCM82633A004352";

const arrayVin = vinString.split("");
console.log("arrayVIN", arrayVin);


let array = [];

for (let l = 0; l < arrayVin.length; l++) {
       array[l] = parseInt(arrayVin[l].charCodeAt(0)) + 3;
      }

// infelizmente meu mac deu pau e me atrapalhei com o tempo.

console.log(array);
newArray = [];

// for (let m = 0; m < array.length; m++) {
//   if ()
//   newArray[l] = parseInt(arrayVin[l].charCodeAt(0)) + 3;
//  }


// array[0].map(x => String.fromCharCode(x))


// let charCodeArray = firstArray.map(x => x.charCodeAt(0));
// console.log(charCodeArray);

// for (let j = len/2; j < len; j++) {
//   reversed[j] -= 1;
// }

// let encript = reversed.map(x => String.fromCharCode(x))
