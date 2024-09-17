'use strict';

/*
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
  orderPizza: function (mainIng, ...othersIng) {
    console.log(`A pizza with ${mainIng}`, othersIng);
  },
};
*/
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

/*
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

//Lezione 106: lo spread operator
//Lo spread operator funziona in maniera simile al destructuring,
//ma funziona indipendentemente dalla lunghezza dell'array e non crea nuove variabili
//è particolarmente utile nelle funzioni
const arr = [7, 8, 9];
//Inserisce gli elementi uno a uno
const newArr = [1, 2, ...arr];
//Inserisce 1 e 2, il terzo elemento è l'intero array
const arrProva = [1, 2, arr];
console.log(newArr);
console.log(arrProva);

//Può essere usato per creare un nuovo array partire da un altro, che sia una copia esatta o apporti delle modifiche
const newMenu = [...arr, 'Gnocchi'];
console.log(newMenu);

//Unire insieme i due menù degli starter e principale
const globalMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(globalMenu);

//Lo spread operator può essere usata sugli iterables: array, stringhe, mappe.
//NON OGGETTI
const stringaProva = 'Questa stringa è una prova';
const arrayStringaProva = [...stringaProva];
console.log(arrayStringaProva);

//Non si può fare
// console.log(...restaurant);

//Questo si può fare
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Giuseppe' };
console.log(newRestaurant);

//Lo spread operator può essere usato dove ci si aspetterebbe degli elementi separati da virgole

//Rende possibile creare una copia di un elemento in un'altra cella di memoria e modificarlo senza cambiare anche l'originale
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';

console.log(restaurant, restaurantCopy);

//Lezione 107: rest operator
//Il rest operator ha la stessa sintassi dello spread operator, ma va usato
//a sinistra delle operazioni di assegnazione
//Serve a raggruppare gli elementi (il "resto degli elementi") sotto un'unica variabile.

const [x, y, ...restArray] = newArr;
console.log(x, y);
console.log(arr);

//il rest operator va usato sempre sull'ultimo elemento di un array
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays, sat);

//il rest operator si usa dove ci si aspettano nomi di variabili separati dalla virgola
//lo spread operator si usa dove ci sono valori separati dalla virgola

//Utilizzado il rest operator posso passare un numero di parametri indefinito
//se voglio passare un array basta utilizzare lo spread operator
//Questo rende la funzione molto flessibile da usare
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  return sum;
};

console.log(add(2, 3, 7));

const numeri = [2, 10, 3];

console.log(add(...numeri));

//Posso passare a una funzione dei parametri principali e dei parametri secondari
restaurant.orderPizza('funghi', 'prosciutto', 'salsiccia');
restaurant.orderPizza('porcini');
restaurant.orderPizza();

//Lezione 108: short-circuiting con AND e OR

//Gli operatori logici AND e OR possono valutare anche valori non booleani

//L'operatore OR si ferma quando incontra il primo valore "Thruty", che sarà il risultato dell'espressione
console.log('---OR---');
console.log('Jonas' || 23);
console.log(23 || 'Jonas');
console.log(0 || 'Marco');

//Stampa "stampa", il primo valore "Thruty"
console.log(0 || null || false || undefined || '' || 'Stampa');
//Se non ci sono valori thruty stampa l'ultimo valore
console.log(0 || false);

//L'operatore AND si ferma quando incontra il primo valore "Falsy", che sarà il risultato dell'espressione
//Ciò dipende dal funzionamento logico dell'operatore AND, l'espressione è vera se tutti i valori sono veri, il primo valore falso è il risultato perchè è quello che falsifica la condizione
console.log('---AND---');
//Se non incontra valori falsy stampa l'ultimo valore
console.log('Jonas' && 23);
console.log(23 && 'Jonas');
console.log(0 && 'Marco');
console.log('Marco' && '');

console.log('Pieno' && 2 && true);

//Si può assegnare un valore di default tramite gli operatori booleani

//Se restaurant.guests esiste allora il valore della variabile è uguale a restaurant.guest altrimenti a 10

restaurant.numGuests = 0;
//ma se restaurant.guests dovesse esistere ed essere uguale 0, che è un valore falsy il valore della variabile sarà sempre 10, ma ciò sarebbe scorretto
const ospitiRistorante1 = restaurant.numGuests ? restaurant.numGuests : 10;

restaurant.numGuests = 3;
const ospitiRistorante2 = restaurant.numGuests || 10;

console.log(ospitiRistorante1);
console.log(ospitiRistorante2);

//Esempio pratico: controllare se una funzione esiste prima di richiamarla
if (restaurant.orderPizza) restaurant.orderPizza('Salsiccia', 'Friarielli');

//La funzione esiste, quindi è un valore Thruty, quindi va avanti al valore successivo(che è il valore restituito dalla funzione)
restaurant.orderPizza && restaurant.orderPizza('Salsiccia', 'Porcini');

//Lezione 109: nullish coalescing operator
restaurant.numGuests = 0;

//Il nullish coalescing operator valuta se un valore è nullish e non falsy, quindi solo
// NULL e UNDEFINED (NON include "", 0, false)
const ospitiRistoranteCorretto = restaurant.numGuests ?? 10;
console.log(ospitiRistoranteCorretto);

//Lezione 110: logical assignment operator
const restaurant1 = {
  nome: 'Mammamia',
  numOspiti: 20,
};

const restaurant2 = {
  nome: 'Il gufo',
  proprietario: 'Alfredo',
};

//Assegnazione valore di default
// restaurant1.numOspiti = restaurant1.numOspiti ?? 10;
// restaurant2.numOspiti = restaurant2.numOspiti ?? 10;

//Assegnazione con nullish operator (si può fare anche con AND e OR)
//Se il ristorante ha la variabile numOspiti mantiene il valore, altrimenti, se è un valore nullish o è assente assegna 10 di default
restaurant1.numOspiti ??= 10;
restaurant2.numOspiti ??= 10;

console.log(restaurant1, restaurant2);

//Ipotizzando di voler assegnare un valore di default a tutti gli oggetti che possiedono un parametri

restaurant1.proprietario &&= '<Dati riservati>';
restaurant2.proprietario &&= '<Dati riservati>';

console.log(restaurant1.proprietario, restaurant2.proprietario);

//In questo esempio, se da un API dovesse arrivare il nome del proprietario solo su alcuni oggetti, noi mostreremmo invece "<Dati riservati>"

//Lezione 112: Ciclare gli array con for-of
//for-of = per ogni elemento di?

//per ogni elemento di menu crea una variabile item e la stampa, ripete il ciclo per la grandezza dell'array
for (const item of globalMenu) console.log(item);

//se volessi recuperare l'indice dell'elemento nell'array
//produce un array composto a sua volta da array che contengono ciascun elemento con il suo indice
console.log(...globalMenu.entries());

for (const item of globalMenu.entries()) {
  console.log(`${item[0] + 1}: ${item[1]}`);
}
*/

//Lezione 113: Enhanced Object Literals

//Da JS 6 è possibile calcolare anche i nomi delle variabili
const weekdays = ['lun', 'mar', 'mer', 'gio', 'ven', 'sab', 'dom'];

const openingHours = {
  [weekdays[1]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [`day-${weekdays[3 + 2]}`]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  //Da JavaScript 6 non c'è bisogno di fare un'assegnazione di questo tipo:
  // openingHours: openingHours,
  //Questa proprietà avrà per valore quello della variabile con lo stesso nome che si trova nella stessa scopechain
  openingHours,

  //Da JavaScript 6 esiste una sintassi semplificata per i metodi:
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery({ orario, indirizzo, starterIndex = 0, mainIndex }) {
    console.log(`Ordine:
      ${this.starterMenu[starterIndex]}, ${this.mainMenu[mainIndex]},
      orario: ${orario},
      indirizzo: ${indirizzo}
      `);
  },
  orderPizza(mainIng, ...othersIng) {
    console.log(`A pizza with ${mainIng}`, othersIng);
  },
};

console.log(restaurant.openingHours);
