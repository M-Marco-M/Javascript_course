'use strict';
//Per questo progetto userò un'impostazione diversa: non ci saranno tante sezioni quante lezioni
//con il codice vecchio commentato e ricopiato, ma il progetto si svilupperà per intero
//per tutto lo script. Ogni lezione sarà recuperabile tramite la storia di git
//Lezione 82: Progetto 3
//Lezione 83: sviluppo della logica - il tiro del dado
//Lezione 84: il cambio del giocatore
//-Selezione elementi del DOM
//Con El nel nome rendiamo più facile ricordarci che è un elemnto del DOM
const score0El = document.querySelector('#score--0'); //# indica un ID
const score1El = document.getElementById('score--1'); //per l'id può essere usato anche getElementById, non c'è bisogno di scrivere #. la ricerca dell'elemnto è più veloce (probabilmente perchè sa già di dover contollare solo gli id)
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
//Aggiungo la classe "hidden" al file css

//-Condizione di partenza
diceEl.classList.add('hidden');
score0El.textContent = 0;
score1El.textContent = 0;

//-Dichiarazione variabili globali
let currentScore = 0;
let scores = [0, 1];
let activePlayer = 0;

//-Funzioni
//--Funzione lancio dado
const rollDice = function () {
  //1-Generazione numero casuale
  const dice = Math.trunc(Math.random() * 6) + 1;
  //2-Stampa a schermo del numero
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  //3-Assegnazione punteggio
  if (dice !== 1) {
    //Somma al punteggio attuale
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
    console.log(currentScore);
  } else {
    //Passa all'altro giocatore
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.toggle('player--active');
    activePlayer = activePlayer === 0 ? 1 : 0;
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.toggle('player--active');
    console.log(activePlayer);
  }
};

//Assegnazione funzione ad eventListener
btnRoll.addEventListener('click', rollDice);
