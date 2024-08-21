'use strict';

//Lezione 79: Inizio secondo progetto della sezione
//All'inizio di ogni script posso conservare ogni elemento HTML utile
//in una variabile, in modo da non dover ripetere ogni volta l'intero codice per selezionarlo

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
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
// for (let i = 0; i < btnShowModal.length; i++)
//   console.log(btnShowModal[i].textContent);

//Lezione 80: classlist

const closeModal = function () {
  console.log('Click avvenuto');
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openModal = function () {
  console.log('Button clicked');
  //Classlist accede all lista delle classi posseduti dall'elemento, tra parentesi vanno indicate le classi da ggiungere. Non va messo il punto poichè è un selettore, indica a javascript che stiamo selezionando una classe, ma in questo caso ci troviamo già in una lista di classi
  //Adesso stiamo rimuovendo la classe "hidden" dall'elemento modal e dall'elemento overlay
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
  //Con style accediamo a uno stile alla volta -> poteva andar bene per mdoificare un solo stile come in questo caso
  //ma aggiungendo o rimuovendo una classe possiamo cambiare infiniti stili con una sola operazione
  // modal.style.display = 'block';
};

for (let i = 0; i < btnShowModal.length; i++) {
  btnShowModal[i].addEventListener('click', openModal);
}

//Descrizione di come funziona addEventListener -> aggiungi a quell'elemento un "sensore" che chiama la funzione indicata all'accadere dell'evento indicato.
//Per questo motivo nn vanno inserite le parentesi, perchè la funzione viene solo dichiarata (indicata)
//è l'eventListener ad richiamarla
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

//Lezione 81: keybordEvent e operatore && (and)
//Questo crea un evento globale(vale per l'intero documento)
//Questa funzione prende in ingresso un parametro, javascript passa automaticamente
//l'oggetto dell'evento, cioè il primo oggetto che trova all'accadere dell'evento
document.addEventListener('keydown', function (e) {
  //Ogni volta che un evento accade javascript crea un oggetto che conserva tutte le informazioni che lo riguardano
  // console.log(e); //dentro e c'è il parametro "key", cioè i tasto premuto
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
});
