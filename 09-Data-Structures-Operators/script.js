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

  //Senza spacchettare l'oggetto in ingresso
  // orderDelivery: function (oggetto) {
  //   console.log(`Ordine:
  //     ${this.starterMenu[oggetto.starterIndex]}, ${
  //     this.mainMenu[oggetto.mainIndex]
  //   },
  //     orario: ${oggetto.orario},
  //     indirizzo: ${oggetto.indirizzo}
  //     `);
  // },
  // Spacchettando l'oggetto in ingresso posso evitare di riferirmi all'oggetto + la proprietà
  // e indicare solamente la proprietà.
  // Posso assegnare un valore di default
  orderDelivery: function ({ orario, indirizzo, starterIndex = 0, mainIndex }) {
    console.log(`Ordine:
      ${this.starterMenu[starterIndex]}, ${this.mainMenu[mainIndex]},
      orario: ${orario},
      indirizzo: ${indirizzo}
      `);
  },
};

//Lezione 104: destructuring arrays
//destructiring spacchetta l'array in variabili
/*
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

//Destructuring di array dentro array
const arr1 = [0, 3, 4, [5, 7]];
// const [uno, due, tre, [cinque, sei]] = arr1; //Spacchetta l'array all'interno
const [uno, due, tre, quattro] = arr1; //L'array all'interno rimane un array
console.log(uno, due, tre, cinque, sei);

//Il destructuring può anche esere usato per restituire valori multipli da una funzione
//in forma di array, e poi inserirli subito in delle variabili
console.log(restaurant.order(2, 2));

const [starterCourse, mainCourse] = restaurant.order(2, 2);
console.log(`${starterCourse}, ${mainCourse}`);
*/

//Lezione 105: destructuring object

//Per spacchettare un oggetto bisogna usare le graffe al posto delle quadre
//e chiamare le variabili come le proprietà dell'oggetto
// const { name, categories, openingHours } = restaurant;
// console.log(name, categories, openingHours);

//In questo modo si assegna un nome diverso da quello della proprietà corrispondente a una determinata variabile
// const { name: restaurantName, categories, openingHours: hours } = restaurant;
// console.log(restaurantName, categories, hours);

//Cercando un parametro non presente avremmo undefined
//Per questo possiamo assegnare valori di default
const {
  name: restaurantName = 'Pippo',
  categories,
  openingHours: hours,
  menu = [],
} = restaurant;
console.log(menu, restaurantName, categories, hours);
//-------------------------------------------------------------------------------//
//Spacchettare un oggetto può essere estremament utile quando si lavora con le API,
//quindi quando non siamo sicuri di come potrebbe essere fatto l'oggetto che ci arriverà
//-------------------------------------------------------------------------------//

//Cambiare il valore di più variabil tramite lo spacchettamento di oggetti
let a = 111;
let b = 222;
console.log(a, b);
const obj = { a: 3, b: 4, c: 5 };

// {a, b} = obj;
//Quando legge le parentesi graffe JS si aspetta un blocco di codice (es: if, for)
//Come lo stesso JS suggerice nell'errore, per usare il destructuring bisogna mettere tutto fra tonde
({ a, b } = obj);
console.log(a, b);

//Spacchettare oggetti dentro oggetti
//fri è a sua volta un oggetto
const {
  fri: { open: apertura, close: chiusura },
} = hours;
console.log(apertura, chiusura);

const oggetto = {
  orario: '20:00',
  indirizzo: 'Via Dante Alighieri, 4',
  mainIndex: 2,
  starterIndex: 3,
};

//Posso passare un oggetto come argomento di una funzione
restaurant.orderDelivery(oggetto);

//Posso spacchettare l'oggetto in ingresso di una funzione(guarda il metodo)
//Viene passato un oggetto che viene spacchettato direttamente all'ingresso nella funzione

//Nell'oggetto passato manca lo starterIndex, posso assegnare un valore di default in ingresso(vedi metodo)
restaurant.orderDelivery({
  orario: '21:30',
  indirizzo: 'Via Nicola Tesla, 4',
  mainIndex: 2,
});
