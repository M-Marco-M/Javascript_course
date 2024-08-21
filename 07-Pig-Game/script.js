'use strict';
//Lezione 82: Progetto 3

//Selezione elementi del DOM
//Con El nel nome rendiamo più facile ricordarci che è un elemnto del DOM
const score0El = document.querySelector('#score--0'); //# indica un ID
const score1El = document.getElementById('score--1'); //per l'id può essere usato anche getElementById, non c'è bisogno di scrivere #. la ricerca dell'elemnto è più veloce (probabilmente perchè sa già di dover contollare solo gli id)
const diceEl = document.querySelector('.dice');
//Aggiungo la classe "hidden" al file css

//Condizione di partenza
diceEl.classList.add('hidden');
score0El.textContent = 0;
score1El.textContent = 0;
