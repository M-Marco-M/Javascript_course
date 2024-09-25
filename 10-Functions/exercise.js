'use strict';
//A closer look to function
//Esercizio 13
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const risposta = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    if (risposta <= this.answers.length && typeof risposta === 'number') {
      this.answers[risposta]++;
    } else {
      alert(
        `Your answer must be a number between ${0} and ${
          this.answers.length
        }!!!`
      );
    }
    this.displayResults();
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'stringa') {
      console.log(`Poll results are ${this.answers.join(' ')}`);
    }
  },
};

//-1) Crea un metodo chiamato registerNewAnswer nell'oggetto poll
//che mostri il seguente prompt:
// What is your favourite programming language?
// 0: JavaScript
// 1: Python
// 2: Rust
// 3: C++
// (Write option number)

//A seconda del risultato incrementa di 1 il valore dentro l'array alla posizione
//corrispondente al numero della risposta

//-2) Chiama il metodo quando l'utente preme il button "Answer poll"
document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

//-3) Scrivi il metodo "displayResults" che mostra i risultati del sondaggio
//che abbia come parametri in ingresso type che può essere "stringa"
//o "array". Se è un array stampa l'array.
//Se è "stringa" stampa "Poll results are 13, 2, 4, 1"

//-4) Esegui il metodo displayResults alla fine del metodo registerNewAnswer

const data1 = [5, 2, 3];
const data2 = [1, 5, 3, 9, 6, 1];
//-5) Usa il metodo displayResults per stampare questi array
//Soluzione
poll.displayResults.call({ answers: data1 });
poll.displayResults.call({ answers: data2 }, 'stringa');

//Esercizio 14

const body = document.querySelector('body');

//IIFE
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  body.addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();

//Aggiungi un eventListener che cambi il colore di h1 a blue
//ogni volta che il body viene cliccato, alla fine della funzione
//Fallo senza selezionare h1 un'altra volta

//Spiega come fa a funzionare

//-1) Quando la funzione viene lanciata assegna a header il query selector di h1
//poi imposta il colore di header a rosso
//-2) Viene richiamata la funzione addEventListener, che crea la funzione che cambia
// il colore di header a blu
//-3) Questa funzione può accedere al variable environment della IIFE per sempre
//-4) Viene terminata la funzione IIFE
//-5) Al click su body viene eseguita la funzione per impostare blu, che può accedere al VE della IIFE (che non èe più in esecuzione)
