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

/*

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
  [`${weekdays[3 + 2]}`]: {
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

//Lezione 114: optional chaining (?)
//L'optional chaining è uno strumento che permette di prevenire errori nel caso in cui
//venissero richiamate proprietà o metodi non esistente degli oggetti

console.log(restaurant.openingHours.ven.open);
//Darebbe errore: Cannot read properties of undefined (reading 'open')
//poichè non esiste una proprietà chiamata "mer"
// console.log(restaurant.openingHours.mer.open);

//Per prevenire l'errore si potrebbe usare un if
if (restaurant.openingHours.dom) console.log(restaurant.openingHours.dom.open);
//Ma supponendo di voler controllare se esistono anche le proprietà genitrici
//bisognerebbe usare degli if annidati

//Si può usare l'optional chaining
console.log(restaurant.openingHours.dom?.open);
//In questo caso viene restituito undefined
//Il punto interrogativo, cioè l'operatore dell'optional chaining, andrebbe messo a seguito dell'elemento che si suppone possa mancare
console.log(restaurant.openingHour?.dom?.opens);

//Mostrare gli orari di apertura di tutti i giorni presenti nell'oggetto
//(il nostro oggetto non ha tutti i giorni)
//Infatti non tutti i giorni sono una proprità di openingHours:
//questo da errore
// for (const day of weekdays) {
//   console.log(day);
//   //Con le parentesi quadre si può chiamare un proprietà usando un'espressione
//   console.log(restaurant.openingHours[day].open);
// }
//In questo modo non viene più restituito l'errore ma solo undefined, quindi

// for (const day of weekdays) {
//   console.log(
//     `Il ${day} ${
//       restaurant.openingHours[day]?.open === undefined
//         ? 'è chiuso'
//         : `apre alle ${restaurant.openingHours[day]?.open}`
//     }`
//   );
// }

//Con le parentesi quadre si può chiamare un proprietà usando un'espressione

//Con metodi
//L'optional chaining operator restituisce (eventualmente) undefined
//Il nullish coalescing operator contralla i valori nullish (tra cui undefined)
console.log(restaurant.order?.(0, 1) ?? 'Il metodo non esiste');
//In questo caso, siccome il metodo non esiste viene restituito undefined, e quindi viene restituito il valore che segue l'operatore nullish
console.log(restaurant.orderPasta?.(0, 1) ?? 'Il metodo non esiste');

//Array
const users = [1, 3, 6];

console.log(users[5] ?? "Non c'è un elemento con questo indice");

//Lezione 115: Ciclare su oggetti
//è possibile utilizzare il costrutto for-of sugli oggetti, in particolare sull'intero oggetto
//(con entries), sulle proprietà(con keys) e sui valori(con values)

//Object.keys(oggetto) produce un array che contiene le proprietà dell'oggetto
const proprieta = Object.keys(openingHours);
// console.log(proprieta);

console.log('Siamo aperti: ');
for (const day of proprieta) console.log(`day}`);

//Object.values(oggetto) produce un array che contiene tutti i valori dell'oggetto
//In questo caso specifico l'oggetto è un array che contiene degli oggetti con la proprietà
//open e la proprietà close
const valori = Object.values(openingHours);
// console.log(valori);
for (const time of valori) {
  console.log(
    `Apertura: ${time.open}
  Chiusura: ${time.close}`
  );
}

///////////////////////////////////////////////////////////////////////////////////////
//Descrizione ciclo: per ogni ogiorno di proprieta conserva l'indice di quel giorno
//nella stringa cerca le proprietà open e close dentro gli oggetti nell'array valori
//all'indice a cui si trova attualmente proprietà
for (const day of proprieta) {
  const index = proprieta.indexOf(day);
  console.log(
    `Giorno ${day} apertura: ${valori[index].open} - chiusura: ${valori[index].close}`
  );
}

//Object.entries(oggetto) produce un array che contiene a sua volta degli array che contengo la coppia
//chiave - valore per ciscun parametro
const entries = Object.entries(openingHours);
// console.log(entries);

//Per ripetere il ciclo di sopra con entries:
for (const day of entries) {
  console.log(`${day[0]}: apertura ${day[1].open} - chiusura ${day[1].close}`);
}

//è lo stesso ciclo ma usa il destructuring
for (const [key, { open, close }] of entries) {
  console.log(`${key}: apertura ${open} - chiusura ${close}`);
}

//Lezione 117: Set
//I set sono delle strutture di dati non ordinati e non ripetibili
//Gli elementi di un set non hanno indice
//Il set è un iterable

const orderSet = new Set(['Pizza', 'Pasta', 'Piadina', 'Pizza']);

//Size indica il numero di elementi nel set, in questo caso 3(pizza si ripete, viene inserito una sola volta)
console.log(orderSet.size);

orderSet.add('Bruschetta');
orderSet.add('Pasta'); //Non viene aggiunto

//Il set è adesso di 4 elementi
console.log(orderSet.size);

//Rimuove l'elemento indicato dal set
orderSet.delete('Piadina');

//Restituisce un booleano che indica la presenza di un determinato elemento nel set
console.log('Piadina = ' + orderSet.has('Piadina'));
console.log('Pizza= ' + orderSet.has('Pizza'));

console.log(orderSet);
//Esiste il metodo clear che rimuove tutti gli elementi da un set

//Ciclare un set
for (const order of orderSet) console.log(order);

//I set sono utili nella manipolazione degli array, se si volesse sapere quanti sono gli elementi
//unici o riottenere un array senza elementi ripetuti, o utilizzare il metodo has per sapere se un elemento è presente

const staff = [
  'Cameriere',
  'Chef',
  'Manager',
  'Cameriere',
  'Cameriere',
  'Chef',
];

//Se volessimo sapere solo da quali figure è composto lo staff di un locale e non quante siano
//possiamo inserire l'array in un set
const staffUnique = new Set(staff);

console.log(staff);
console.log(staffUnique);

//Per creare un array a partire da un set basta creare un nuovo array con dentro il set decostruito
const staffUniqueArray = [...staffUnique];
console.log(staffUniqueArray);
console.log('Ruoli dello staff: ' + staffUniqueArray.length);

//Per calcolare al volo quanti sono i ruoli presenti nell'array si può fare così
console.log('Anche questo indica i ruoli dello staff: ' + new Set(staff).size);

//Anche le stringhe possono essere trasformate in set
const mioNomeCognome = new Set('MarcoMagnano');
console.log(mioNomeCognome);
//Indica al volo quante lettere dell'alfabeto sono presenti nel nome e cognome
console.log(mioNomeCognome.size);

*/

//Lezione 118: Fondamentali sulle mappe
//Le mappe sono strutture organizzate di dati, bsati sulla coppia chiave - valore
//a differenza degli oggetti le mappe possono avere chiavi di qualsiasi tipo

const rest = new Map();

//Per aggiungere un elemento alla mappa si usa il metodo set, indicando la coppia chiave valore
rest.set('nome', 'Da Totò');
rest.set(1, 'Firenze');
rest.set(2, 'Genova');

rest
  .set('categorie', ['italiana', 'vegetariana', 'mediterranea', 'pizzeria'])
  .set('open', 11)
  .set('close', 23)
  //è possibile impostare anche un booleano come chiave
  .set(true, 'Siamo aperti')
  .set(false, 'Siamo chiusi');

//Per recuperre un elemento della mappa si usa il metodo get, indicando la chiave

console.log(rest.get('open'));
console.log(rest.get('nome'));
console.log(rest.get(2));
console.log(rest.get(true));

//Avere un booelan come chiave può avere dei risvolti interessanti

const orario = 27;
console.log(rest.get(orario > rest.get('open') && orario < rest.get('close')));

//Has permette di verificare se la mappa ha tra le sue chiavi un determinato elemento
console.log(rest.has('nome'));

//Delete rimuove l'elemento su base chiave
rest.delete(2);

//Posso impostare un array come chiave
rest.set([1, 2], 'array come chiave');

//Ma a causa del fatto che ogni oggetto viene salvato nella memoria dell'heap in un indirizzo diverso
//non posso cercare indicando l'array
console.log(rest.get([1, 2]));

//Ho bisogno di conservare l'array in una variabile
const array = [1, 2, 3];
rest.set(array, 'array come chiave funzionante');
console.log(rest.get(array));
console.log(rest);

//Lezione 119: cicli su mappe
//Si possono valorizzare le mappe anche utilizzando una sintassi basata sugli array

const openingHours = {
  lun: {
    open: 12,
    close: 22,
  },
  ven: {
    open: 11,
    close: 23,
  },
  sab: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const question = new Map([
  ['domanda', 'Qual è il miglior linguaggio di programmazione al mondo?'],
  [1, 'C++'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['risposta', 3],
  [true, 'risposta corretta'],
  [false, 'risposta sbagliata'],
]);

console.log(question);
//Da notare come le mappe abbiano una struttura del tutto simile a un oggetto passato al metodo entries
console.log(Object.entries(openingHours));

//Infatti la conversione da oggetto a mappa è molto semplice
const openingHoursMap = new Map(Object.entries(openingHours));
console.log(openingHoursMap);

//è possibile ciclare una mappa con for-of
//N.B. Ricorda che puoi destrutturare un array al volo, già alla dichiarazione
//In questo caso destruttura l'array composto da chiave-valore della mappa

//Stampo l'oggetto, elemento per elemento
console.log(`Domanda: ${question.get('domanda')}`);
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
/*
const answer = Number(prompt('La tua risposta:'));

console.log(
  question.get(
    answer === question.keys('risposta') || answer === question.get('risposta')
  )
);
*/

//Stampa la mappa
console.log(question);
//Trasforma la mappa in array
console.log([...question]);
//Si può ottenere un array di tutte le chiavi
console.log(question.keys());
//Array:
console.log([...question.keys()]);
//O di tutti i valori
console.log(question.values());
//si può spacchettare
console.log([...question.values()]);

//Lezione 120: ripasso delle strutture dati
//- Array e Set si possono usare quando i dati che dobbiamo manipolare sono semplici e non
//devono essere associati a una chiave.
//- I casi d'uso di un set non sono frequenti, ma se non ci servono dati ripetuti è più
//conveniente usarli al posto degli array, poichè le operazioni di ricerca, aggiunta e rimozione
//sono molto pù veloci su un set che su un array. Possono essere utilizzati per ripulire un array da valori ripetuti
//-Mappe e Oggetti si possono usare quando è utile avere la coppia [chiave - valore]
//Le mappe sono più performanti e hanno il vantaggio di poter avere qualsiasi tipo di valore come chiave
//e non solo stringhe.
//Il contro è che sulle mappe non si possono usare metodi che abbiano l'accesso diretto al resto dei
//dati contenuti nella mappa

//Lezione 121: Manipolazione avanzata delle stringhe

const airline = 'TAP Air Portugal';
const plane = 'A320';

//Le stringhe possono essere trattate in maniera simile agli array
//riferendosi a un carattere in una determinata possizione
console.log(plane[0]);
console.log(plane[2]);

//Le stringhe possiedono la proprietà lenght (come gli array)
console.log('Lunghezza airline: ' + airline.length);
console.log('Lenghezza plane: ' + plane.length);

//Anche sulle stringhe si può usare il metodo indexOf, che indica la posizione di un dato carattere(la prima volta che appare)
console.log('Indice P in airline: ' + airline.indexOf('P')); //Stampa 2

//Con lastIndexOf ci si riferisce all'indice dell'ultima posizione in cui appare il carattere dato
console.log('Ultimo indice di P in airline: ' + airline.lastIndexOf('P')); //Non stampa 2

console.log(airline.lastIndexOf('portugal')); //Se non trova il carattere o lastringa restituisce -1

//Il metodo slice restituisce una nuova stringa, non modifica l'esistente.
//Il primo parametro è la posizione da cui inizia la nuova stringa, il secondo, se c'è
//quella in cui termina
console.log(airline.slice(4)); //Stampa dalla "A" di "Air" in poi
console.log(airline.slice(4, 7)); //Stampa solo Air

console.log(airline.slice(0, airline.indexOf(' '))); //Stampa "Air": dal primo carattere al primo spazio vuoto

//Passando valori negativi inizia a contare le posizioni dalla fine
console.log(airline.slice(-8)); //Stampa Portugal

console.log(airline.slice(-5, -1)); //Stampa tuga

console.log(airline.slice(0, -3)); //Tronca gli ultimi tre caratteri

//Scrivere una funzione che verifichi se è il posto in mezzo (B o E)

//Esempio posto: 11B
//Se il carattere in ultima posizione è uguale a B o E allora è un sedile di mezzo
const checkMiddle = function (seat) {
  if (seat.slice(-1) === 'B' || seat.slice(-1) === 'E') {
    return 'Middle seat';
  } else {
    return 'NO middle seat';
  }
};

console.log(checkMiddle('11B'));
console.log(checkMiddle('32E'));
console.log(checkMiddle('27A'));

//JavaScript, quando operiamo dei metodi su una stringa converte al volo la variabile di tipo primitivo
//in un oggetto wrapper

const stringa = 'stringa di prova';
const oggettoStringa = new String(stringa);

console.log(stringa);
console.log(typeof stringa);
console.log(oggettoStringa);
console.log(typeof oggettoStringa);

//Lezione 122: manipolazione avanzata stringhe parte 2
//Modificare maisucole o minuscole
console.log(airline.toLocaleLowerCase());
console.log(airline.toLocaleUpperCase());

//N.B. Si possono operare i metodi anche su stringhe nn conservate in variabili
console.log('Prova'.toUpperCase());

//Esempio, errore battitura in un nome
const nome = 'jOnAs';
//Portare tutto in minuscolo
//Portare il primo carattere in maiuscolo
const nomeLower = nome.toLowerCase();
const nomeCorretto = nomeLower[0].toUpperCase() + nomeLower.slice(1);
console.log(nomeCorretto);

//Confrontare delle email
//Trim rimuove gli spazi vuoti all'inizio e alla fine
//Si possono concatenare le funzioni visto che restituiscono delle stringhe
const compareEmail = function (correctEmail, promptEmail) {
  return correctEmail === promptEmail.toLowerCase().trim();
};

const correctEmail = 'jonas.smith@gmail.com';
const promptEmail = ' Jonas.smith@gmail.com  \n';

console.log(compareEmail(correctEmail, promptEmail));

//Convertire la scrittura di un prezzo da quella UE a quella USA
//(euro - dollaro), (virgola - punto)

const ueToUsaPrice = function (uePrice) {
  return uePrice.replace('€', '$').replace(',', '.');
};

console.log(ueToUsaPrice('37,83€'));

//Replace sostituisce solo il primo carattere che incontra
//Sostituire door con gate
const announcement =
  'All passengers come to boarding door 23. Boarding door 23';
console.log(announcement.replace('door', 'gate'));

//Per sostituire tutte le occorrenze di uno o più caratteri si può usare
//replaceAll
console.log(announcement.replaceAll('door', 'gate'));

//Prima dell'introduzione di replaceAll si poteva usare una regexp
//In questa regexp gli slash indicano l'inizio e la fine della stringa da ricercare,
//la g sta per "global", quindi in tutta la stringa
console.log(announcement.replace(/door/g, 'gate'));

//Metodi che restitiscono booleani: includes, startsWith, endsWith

//Creare una funzione che controlli se un aereo appartiene alla nuova serie di Airbus
//Se è un Airbus e dopo il codice viene apposta la parola "neo", appartiene alla nuova flotta Airbus
const checkNewAirbus = function (airplane) {
  return airplane.startsWith('Airbus') && airplane.endsWith('neo');
};

console.log(checkNewAirbus('Airbus A700neo'));
console.log(checkNewAirbus('Airbus A700'));

//Includes verifica che il carattere (o la stringa) sia presente, indipendentemente dalla posizione
console.log('Airbus A700'.includes('bus'));

//Esercizio: controllare i bagagli
//I bagagli che contengono pistole o coltelli non possono pasare

const luggageIsOk = function (luggage) {
  const lowerLuggage = luggage.toLowerCase();
  return !(lowerLuggage.includes('knife') || lowerLuggage.includes('gun'));
};

console.log(luggageIsOk('I carry water and a KniFe for emergencies'));
console.log(luggageIsOk("I CaRRy a saNdwich and a 'GUn' to kill everyone"));

//Lezione 123: manipolazione avanzata stringhe parte 2
//Split restituisce un array, in cui ogni elemento è separato dagli altri dal carattere indicato
console.log('a+very+beautiful+day'.split('+'));
console.log('Marco Magnano'.split(' ')); //Crea un array con nome e cognome

//Si può sfruttare lo split per conservare in due varibili separate nome e cognome
//utilizzando lo spread operator
const [mioNome, mioCognome] = 'Marco Magnano'.split(' ');
console.log(mioNome, mioCognome);

//Il metodo join fa l'opposto, a partire da un array crea una stringa in cui i caratteri sono concatenati da un carattere indicato
const nomeEsteso = ['Signor', mioNome.toLowerCase(), mioCognome].join(' ');
console.log(nomeEsteso);

//Portare in maiuscolo nomi e cognomi
const passenger = 'jessica ann smith davis';

const capitalizePassenger = function (passenger) {
  const passengerArray = passenger.split(' ');
  const passengerArrayCapitalized = [];
  for (const element of passengerArray) {
    passengerArrayCapitalized.push(element[0].toUpperCase() + element.slice(1));
  }
  return passengerArrayCapitalized.join(' ');
};

console.log(capitalizePassenger(passenger));

//Un'altra versione potrebbe essere:
const capitalizePassengerNew = function (passenger) {
  const passengerArray = passenger.split(' ');
  const passengerArrayCapitalized = [];
  for (const element of passengerArray) {
    passengerArrayCapitalized.push(
      element.replace(element[0], element[0].toUpperCase())
    );
  }
  return passengerArrayCapitalized.join(' ');
};

console.log(capitalizePassengerNew(passenger));

//Padding strings
//padStart e padEnd aggiungono tanti caratteri (come quello indicato) alla stringa
//quanti ne servono per arrivare al numero indicato, quindi i caratteri della stringa vengono già sottratti
console.log(passenger.padStart(40, '*')); //Questa stringa è di 40 caratteri
console.log(passenger.padStart(40, '*').padEnd(50, '+')); //Questa è di 50, aggiunge esattamente 10 "+"

//Funzione che mascheri i numeri della carta di credito
//Mostra solo le ultime 4 cifre
const maskCreditCard = function (cardNumber) {
  const stringCardNumber = String(cardNumber);
  return stringCardNumber.slice(-4).padStart(stringCardNumber.length, '*');
};

console.log(maskCreditCard(43211234));

//Repeat ripete una stringa per il numero di volte indicato
console.log(passenger.repeat(3));

const planesInLine = function (numPlanes) {
  return `There are ${numPlanes} in line ${'✈'.repeat(numPlanes)}`;
};

console.log(planesInLine(5));

//Lezione 123: pratica con le stringhe

//A partire da qeusta stringa data ottenere quella sotto
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const flightsArray = flights
  .replaceAll('_', ' ')
  .replaceAll('+', ')\n.')
  .replaceAll(':', 'h')
  .replaceAll('fao93766109', 'FAO')
  .replaceAll('txl2133758440', 'TXL')
  .replaceAll('bru0943384722', 'BRU')
  .replaceAll('hel7439299980', 'HEL')
  .replaceAll('lis2323639855', 'LIS')
  .replaceAll(';', ';,')
  .replaceAll('Delayed', ' ❌ Delayed')
  .split(';');

let k = 0;

const newFlightsArray = [];
for (const string of flightsArray) {
  if (k % 2 === 0 && k % 3 !== 0) {
    newFlightsArray.push(string.replace(',', ' to '));
  } else if (k % 3 === 0) {
    newFlightsArray.push(string.replace(',', ' ('));
  } else {
    newFlightsArray.push(string.replace(',', ' from '));
  }
  k++;
}

const finalFlightsArray = newFlightsArray.join('').split('.');
console.log(finalFlightsArray);

const finalFlights = [];
for (const element of finalFlightsArray) {
  finalFlights.push(element.padStart(' ', 1000));
}

console.log(finalFlights.join(''));
