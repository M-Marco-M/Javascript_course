'use strict';
//Per questo progetto userò un'impostazione diversa: non ci saranno tante sezioni quante lezioni
//con il codice vecchio commentato e ricopiato, ma il progetto si svilupperà per intero
//per tutto lo script. Ogni lezione sarà recuperabile tramite la storia di git
//Lezione 82: Progetto 3
//Lezione 83: sviluppo della logica - il tiro del dado
//Lezione 84: il cambio del giocatore
//Lezione 85: conservare i punteggi
//Lezione 86: tasto "new game" --> ESERCITAZIONE

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

//Dichiarazione variabili globali
let currentScore, scores, playing, activePlayer;

//-Funzioni
//Funzione di inizializzazione
const initialize = function () {
  //Reset variabili globali
  currentScore = 0;
  scores = [0, 0];
  playing = true;
  activePlayer = 0;
  //Reset contenuti DOM
  diceEl.classList.add('hidden');
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0.textContent = 0;
  current1.textContent = 0;
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
};
initialize();

const changePlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.toggle('player--active');
  //Questo è il core: io avrei fatto uno switch, ma questa soluzione è molto più brillante
  //assegna il giocatore attivo con una variabile (di fatto booleana), che infatti è manipolata da
  //un operatore ternario. La cosa bella è che l'activePlayer che poi viene sostituito
  //nelle stringhe dei vaari selettori potrebbe essere anche un numero da 1 a 10 ed
  //essere in tal caso selezionato da un contatore, che una volta arrivato a 10 si resetta
  activePlayer = activePlayer === 0 ? 1 : 0;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.toggle('player--active');
};

//--Funzione lancio dado
const rollDice = function () {
  if (playing) {
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
    } else {
      //Passa all'altro giocatore
      scores[activePlayer] = 0;
      document.getElementById(`score--${activePlayer}`).textContent =
        scores[activePlayer];
      changePlayer();
    }
  }
};

//Funzione conservazione punteggio
const holdScore = function () {
  if (playing) {
    //1- Aggiunge il currentScore al totalScore del player
    scores[activePlayer] += currentScore;
    //2- Contralla se il punteggio è maggiore di 100
    if (scores[activePlayer] < 65) {
      score0El.textContent = scores[0];
      score1El.textContent = scores[1];
      changePlayer();
    } else {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.toggle('player--winner');
      diceEl.classList.add('hidden');
    }
  }
};
//-Assegnazione funzione ad eventListener
btnRoll.addEventListener('click', rollDice);
btnHold.addEventListener('click', holdScore);
btnNew.addEventListener('click', initialize);
