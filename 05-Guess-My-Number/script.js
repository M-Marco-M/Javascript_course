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

//Si può impostare il valore (in questo caso il "textContent") di un elemento HTML
document.querySelector('.message').textContent = 'Correct number!🎉';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

//Nessun valore
console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23;
//Ora stamperà 23
console.log(document.querySelector('.guess').value);

//Lezione 73: catturare gli eventi(click)
//Per far si che all'accadere di un evento (click, passaggio del mouse, pressione di un tasto sulla tastiera, caricamento della pagina)
//accada qualcos'altro si deve associare l'evento su un determinato oggetto a una funzione
document.querySelector('.guess').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value); //Il tipo dei valori inseriti nei campi di testo è sempre stringa, è necessario convertirlo
  console.log(guess, typeof guess);
  console.log(Boolean(guess));

  //Quando guess è vuoto è un valore falsy, quindi è falso. Se metti la negazione diventa vero, quindi entra nell'if: Entra nell'if quando è vuoto.
  if (!guess) document.querySelector('.message').textContent = 'No number!🛑';
});
//addEventListener vuole in ingresso due parametri, il tipo di evento (ad esempio il click)
//e la funzione da eseguire.
//--- è IMPORTANTE notare che la funzione viene solamente dichiarata e non richiamata
//ciò è necessario poichè una funzione richiamata viene immediatamente eseguita, mentre
//ciò che noi vogliamo è che il metodo addEventListener sappia quale funzione eseguire, perciò la passiamo come un parametro

//Per dirla in altre parole, la funzione addEventListener ha due parametri in ingresso, uno è l'evento che deve aspettare,
//l'altro è la funzione da eseguire. A tempo debito sarà lo stesso eventListener a RICHIAMARE la funzione
