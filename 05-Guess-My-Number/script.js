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
