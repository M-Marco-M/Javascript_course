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
