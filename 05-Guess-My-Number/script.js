'use strict';

//Lezione 70: Inizio del progetto "Guess my number!"

//Stampa in console l'elemento html identificato dalla classe message
console.log(document.querySelector('.message'));
//Questo ne stampa il contenuto
console.log(document.querySelector('.message').textContent);

//Lezione 71: il DOM
//il DOM (Document Object Model) è una rappresentazione a oggetti del documento HTML, in cui
//ogni singolo elemento viene rappresentato come un oggetto. Si può tracciare una similitudine con
//gli oggetti Java, che hanno oggetti "figli" e "padri".
//Questi oggetti possono essere rappresentati come nodi su un diagramma ad albero:
//Gli elementi più in basso eridatano da quelli in alto, come se fosse un albero genealogico

//Il DOM è ciò che permette a JavaScript di entrare in relazione con il coumento HTML
//Il DOM non è parte di JS, ma sono delle librerie scritte in JS messe a disposizione dai browser

//Infatti in JS accediamo al DOM come se fosse un oggetto con delle proprietà -> guarda la notazione
//document(oggetto).querySelector(metodo)('.message'(parametro));

//Lezione 72: manipolazione del DOM

// //Si può impostare il valore (in questo caso il "textContent") di un elemento HTML
// document.querySelector('.message').textContent = 'Correct number!🎉';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// //Nessun valore
// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value = 23;
// //Ora stamperà 23
// console.log(document.querySelector('.guess').value);

//Lezione 73: catturare gli eventi(click)
//Per far si che all'accadere di un evento (click, passaggio del mouse, pressione di un tasto sulla tastiera, caricamento della pagina)
//accada qualcos'altro si deve associare l'evento su un determinato oggetto a una funzione
// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value); //Il tipo dei valori inseriti nei campi di testo è sempre stringa, è necessario convertirlo
//   console.log(guess, typeof guess);
//   console.log(Boolean(guess));

//   //Quando guess è vuoto è un valore falsy, quindi è falso. Se metti la negazione diventa vero, quindi entra nell'if: Entra nell'if quando è vuoto.
//   if (!guess) document.querySelector('.message').textContent = 'No number!🛑';
// });
//addEventListener vuole in ingresso due parametri, il tipo di evento (ad esempio il click)
//e la funzione da eseguire.
//--- è IMPORTANTE notare che la funzione viene solamente dichiarata e non richiamata
//ciò è necessario poichè una funzione richiamata viene immediatamente eseguita, mentre
//ciò che noi vogliamo è che il metodo addEventListener sappia quale funzione eseguire, perciò la passiamo come un parametro

//Per dirla in altre parole, la funzione addEventListener ha due parametri in ingresso, uno è l'evento che deve aspettare,
//l'altro è la funzione da eseguire. A tempo debito sarà lo stesso eventListener a RICHIAMARE la funzione

//Lezione 74: la logica dietro al gioco

//Definiamo una costante contenente un numero casuale
// const secretNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = secretNumber;

// //è sempre bene avere i valori su javascript quando si opera con essi, ed evitare di "conservarli" o manipolarli direttamente sul DOM
// let score = 20;
// document.querySelector('.score').textContent = score;

// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value);
//   console.log(guess, typeof guess);

//   //Prendo il punteggio ogni volta che viene eseguita la funzione
//   if (!guess) {
//     document.querySelector('.message').textContent = 'No number!🛑';
//   } else if (guess === secretNumber) {
//     document.querySelector('.message').textContent =
//       'Congratulation, you won!🎉';
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'Too low, try again!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else document.querySelector('.message').textContent = 'You lost! 💥';
//   } else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'Too low, try again!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else document.querySelector('.message').textContent = 'You lost! 💥';
//   }
// });

//Lezione 75: manipolazione del CSS tramite il DOM

// const secretNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = secretNumber;

// let score = 20;
// document.querySelector('.score').textContent = score;

// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value);
//   console.log(guess, typeof guess);

//   //---No number
//   if (!guess) {
//     document.querySelector('.message').textContent = 'No number!🛑';
//     //---Right number
//   } else if (guess === secretNumber) {
//     document.querySelector('.message').textContent =
//       'Congratulation, you won!🎉';
//     //Il valore dato a prorpietà CSS deve essere sempre una stringa:
//     //Alla vittoria imposta lo sfondo verde...
//     document.querySelector('body').style.backgroundColor = 'green';
//     //...e allarga la casella di number
//     document.querySelector('.number').style.width = '30rem';
//     //---Number is too low
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'Too low, try again!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else document.querySelector('.message').textContent = 'You lost! 💥';
//     //---Number is too high
//   } else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'Too low, try again!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else document.querySelector('.message').textContent = 'You lost! 💥';
//   }
// });

//Lezione 76: challenge
// let secretNumber = Math.trunc(Math.random() * 20) + 1;

// let score = 20;
// document.querySelector('.score').textContent = score;

// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value);
//   console.log(guess, typeof guess);

//   //---No number
//   if (!guess) {
//     document.querySelector('.message').textContent = 'No number!🛑';
//     //---Right number
//   } else if (guess === secretNumber) {
//     document.querySelector('.message').textContent =
//       'Congratulation, you won!🎉';
//     document.querySelector('.number').textContent = secretNumber;
//     //Il valore dato a prorpietà CSS deve essere sempre una stringa:
//     //Alla vittoria imposta lo sfondo verde...
//     document.querySelector('body').style.backgroundColor = 'green';
//     //...e allarga la casella di number
//     document.querySelector('.number').style.width = '30rem';
//     //---Number is too low
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'Too low, try again!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else document.querySelector('.message').textContent = 'You lost! 💥';
//     //---Number is too high
//   } else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'Too high, try again!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else document.querySelector('.message').textContent = 'You lost! 💥';
//   }
// });

// //Far si che il pulsante again resetti la pagina
// document.querySelector('.again').addEventListener('click', function () {
//   //body
//   document.querySelector('body').style.backgroundColor = '#222';
//   //secretNumber
//   secretNumber = Math.trunc(Math.random() * 20) + 1;
//   document.querySelector('.number').style.width = '15rem';
//   document.querySelector('.number').textContent = '?';
//   //score
//   score = 20;
//   document.querySelector('.score').textContent = score;
//   //message
//   document.querySelector('.message').textContent = 'Starting guess...';
//   //guess
//   document.querySelector('.guess').value = '';
// });

//Lezione 77: funzione highscore
// let secretNumber = Math.trunc(Math.random() * 20) + 1;

// let highscore = 0;

// let score = 20;
// document.querySelector('.score').textContent = score;

// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value);
//   console.log(guess, typeof guess);

//   //---No number
//   if (!guess) {
//     document.querySelector('.message').textContent = 'No number!🛑';
//     //---Right number
//   } else if (guess === secretNumber) {
//     document.querySelector('.message').textContent =
//       'Congratulation, you won!🎉';
//     document.querySelector('.number').textContent = secretNumber;
//     //Il valore dato a prorpietà CSS deve essere sempre una stringa:
//     //Alla vittoria imposta lo sfondo verde...
//     document.querySelector('body').style.backgroundColor = 'green';
//     //...e allarga la casella di number
//     document.querySelector('.number').style.width = '30rem';
//     //Quando vince, se il punteggio è migliore dell'highscore, allora quel punteggio è il nuovo highscore
//     if (score > highscore) highscore = score;
//     document.querySelector('.highscore').textContent = highscore;
//     //---Number is too low
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'Too low, try again!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else document.querySelector('.message').textContent = 'You lost! 💥';
//     //---Number is too high
//   } else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'Too high, try again!';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else document.querySelector('.message').textContent = 'You lost! 💥';
//   }
// });

// //Far si che il pulsante again resetti la pagina
// document.querySelector('.again').addEventListener('click', function () {
//   //body
//   document.querySelector('body').style.backgroundColor = '#222';
//   //secretNumber
//   secretNumber = Math.trunc(Math.random() * 20) + 1;
//   document.querySelector('.number').style.width = '15rem';
//   document.querySelector('.number').textContent = '?';
//   //score
//   score = 20;
//   document.querySelector('.score').textContent = score;
//   //message
//   document.querySelector('.message').textContent = 'Starting guess...';
//   //guess
//   document.querySelector('.guess').value = '';
// });

//Lezione 78: DRY, ottimizzazione e refactoring del codice

//Il caso too low e too high condividevano la maggior parte del codice:
//è più efficiente inserire tutto in un unico blocco
//(sono accomunati dal fatto di essere diversi dal numero da indovinare).
//L'unica differenza può esere espressa con un operatore ternario

//(Visual Studio Code, quando selezioni un testo, evidenzia nel resto della pagina
//quel testo lì. Questa funzionalità può aiutare a trovare codice che si ripete)

//Anche il messaggio viene stampato più volte utilizzando sempre lo stesso codice
//e modificando solo la stringa. -> Si può creare una funzione che setti il testo di (.message)
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let highscore = 0;

let score = 20;
document.querySelector('.score').textContent = score;

//Anche il messaggio viene stampato più volte utilizzando sempre lo stesso codice
//e modificando solo la stringa. -> Si può creare una funzione che setti il testo di (.message)
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //---No number
  if (!guess) {
    displayMessage('No number!🛑');

    //---Right number
  } else if (guess === secretNumber) {
    displayMessage('Congratulation, you won!🎉');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) highscore = score;
    document.querySelector('.highscore').textContent = highscore;

    //Number is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber ? 'Too high, try again!' : 'Too low, try again!'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else displayMessage('You lost! 💥');
  }
});

//Far si che il pulsante again resetti la pagina
document.querySelector('.again').addEventListener('click', function () {
  //body
  document.querySelector('body').style.backgroundColor = '#222';
  //secretNumber
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  //score
  score = 20;
  document.querySelector('.score').textContent = score;
  //message
  displayMessage('Starting guess...');
  //guess
  document.querySelector('.guess').value = '';
});
