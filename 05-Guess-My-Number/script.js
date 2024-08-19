'use strict';

//Lezione 70: Inizio del progetto "Guess my number!"

//Stampa in console l'elemento html identificato dall'id message
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
