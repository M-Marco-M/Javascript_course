'use strict';
//Lezione 129: Parametri di default
const bookings = [];
//In JS 6 si può assegnare direttamente nella firma
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 / numPassengers
) {
  //Per assegnare un valore standard in JS5
  //numPassengers = numPassengers || 1;

  //Creo l'oggetto
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('B229', 10, 78);
createBooking('A127');
//Se passiamo un solo valore il resto è undefined

//Adesso per far si che un prametro assuma il valore di default, assegnando però il successivo,
//bisognerebbe passare undefined
createBooking('A228', undefined, 37);

//Lezione 130: Passaggio argomenti per valore o per riferimento
const flight = 'LH234';
const marco = {
  nome: 'marco',
  passport: 238976,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LT734';
  passenger.nome = 'Mr.' + passenger.nome;
  if (passenger.passport === 238976) {
    alert('Check-in avvenuto con successo');
  } else {
    alert('Passporto non corrispondente!');
  }
};
checkIn(flight, marco);

//La funzione modifica il nome nell'oggetto, poichè degli oggetti viene passato il
//riferimento, mentre dei tipi primitivi il valore
console.log(flight, marco);

//Perchè è come fare
//Assegno valore
const flightNum = flight;
//Assegno riferimento: passenger contiene solo il riferimento a marco,
//in pratica punta allo stesso oggetto in memoria a cui punta marco
const passeggero = marco;

//è importante ricordare questa caratteristica nei codici molto estesi
//per esempio:
const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000);
};

//Sto modificando l'oggetto marco
newPassport(marco);

console.log(marco);
//Adesso la funzione checkIn dirà che il passaporto è sbagliato
checkIn(flight, marco);
console.log(marco);

//Lezione 131: First-class e funzioni di ordine superiore
//Le funzioni in JS sono first-class function, sono cioè dei particolari oggetti
//non dissimili da array, oggetti o mappe.
//Questo consente di passare le funzioni come un valore anche all'interno di altre funzioni
//Come avviene ad esempio nell'eventListener

//Le funzioni che hanno funzioni come parametro o restituiscono funzioni
//si chiamano funzioni di ordine superiore (higher-order function)

//Le first-class function sono una caratteristica del linguaggio,come quella di essere a oggetti o tipizzato
