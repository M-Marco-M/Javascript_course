'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

//Lezione 101: destructuring arrays
//destructiring spacchetta l'array in variabili

//Assegnazione "a mano"
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log(a, b, c);

//Destructiring. In pratica dichiaro un array di variabili e per ognuna assegno un elemento dell'array
const [x, y, z] = arr;
console.log(x, y, z);

//Un elemento in meno. Assegna gli elementi in ordine.
const [p, q] = arr;
console.log(p, q);

//Salta un elemento. Inserendo degli spazi vuoti compresi tra le virgole, posso saltare
//tanti elementi quanti sono gli spazi vuoti
const [s, , t] = arr;
console.log(s, t);

//Ho più variabili che elementi nell'array.
// const [i, j, k, l] = arr;
// console.log(i, j, k, l); //Gli elementi che non trovano un corrispondente nell'array
//assumono valore undefined. Dopotutto è il vaalore che si ottiene cercndo nell'array per un indice che non c'è
console.log(arr[5]); //undefined
//Per prevenire questa situazione si può assegnare un valore di default
const [i = 0, j = 0, k = 0, l = 0] = arr;
console.log(i, j, k, l);

//Il destructiring può rendere più comodo lo switch di due variabili
//Le categorie del ristorante
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

//Metodo tradizionale
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

//Con destructuring: faccio il destructuring (a sinistra) di un array con le due stesse varibili in ordine inverso
[main, secondary] = [secondary, main];
console.log(main, secondary);

//Il destructuring può anche esere usato per restituire valori multipli da una funzione
//in forma di array, e poi inserirli subito in delle variabili
console.log(restaurant.order(2, 2));

const [starterCourse, mainCourse] = restaurant.order(2, 2);
console.log(`${starterCourse}, ${mainCourse}`);
