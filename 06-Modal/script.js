'use strict';

//Lezione 79: Inizio secondo progetto della sezione
//All'inizio di ogni script posso conservare ogni elemento HTML utile
//in una variabile, in modo da non dover ripetere ogni volta l'intero codice per selezionarlo

const modal = document.querySelector('modal');
const overlay = document.querySelector('overlay');
const btnCloseModal = document.querySelector('.close-modal');

//Utilizzando querySelector viene selezionato solo il primo degli elementi ci una determinata classe
/*
const btnShowModal = document.querySelector('.show-modal');
console.log(btnShowModal);
*/
//Se si vogliono selezionare più elementi (tramite una classe, appunto), bisogna utilizzare
//"querySelectorAll", questo inserirà gli elementi in una "nodelist", che si comporta in maniera
//simile a un array. Per esempio per operare sugli elementi si puà ciclare la nodelist con un for

const btnShowModal = document.querySelectorAll('.show-modal');
console.log(btnShowModal);

//Questo for stampa il testo contenuto dai 3 btn
//Anche il for, come l'if, può esere scritto in forma
//abbreviata senza parentesi se esegue una sola riga
for (let i = 0; i < btnShowModal.length; i++)
  console.log(btnShowModal[i].textContent);

//Lezione 80:
