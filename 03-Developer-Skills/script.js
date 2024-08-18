// Remember, we're gonna use strict mode in all scripts now!
'use strict';

//Lezione 55: configurazione prettier
const x = 23;

const y = 'prova stringa';

const z = 'string';

const calcAge = (birthYear) => 2037 - birthYear;

console.log('prova');

console.log('Pazzesco');

//Lezione 56: installazione di node (tramite nvm) e di live-server

//Lezione 57: consigli su come studiare e come rimanere motivati

//Lezione 58: risoluzione dei problemi

//-1 Visualizzare il problema e comprendere al 100% la richiesta, chiedendo informazini aggiuntive se necessario

//-2 Dividi e conquista: scomponi un problema in problemi più piccoli, in più fasi (ricorda anche il metodo DRY: piccoli moduli riutilizzabili)

//-3 Non avere paura di cercare: fa parte del lavoro

//-4 Produrre un documento, che sia scritto o disegnato, su carta o su supporto digitale, che rappresenti il problema e la soluzione (pseudocodice)

//Lezione 59: l'utilizzo di Google, StackOverflow e MDN e un esempio pratico di problem solving

//--- Problema 1 ---
//Lavoriamo su un termometro per la domotica, il nostro compito è:
//"Dato un array di temperature della giornata calcolare la
//"temperature amplitude" (non traducibile in ampiezza della temperatura).
//Ricorda che il sensore potrebbe restituire degli errori

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const temperatures2 = [-3, 2, 6, 1, 'error', -9, -13, -17, -15, -14, -9, -5];

//1- Capire bene il problema
//- Cosa si intende per "temperature amplitude"?
//La differenza tra la minima e la massima
//- Come si calcolano la minima e la massima?
//- Cosa è un errore del sensore e come gestirlo?
//Può essere ignorato

//2- Scomporre il problema
//- Ignorare l'errore
//- Trovare il valore più alto nell'array
//- Trovare il valore più basso nell'array
//- Calcolare la differenz tra il min e il max

//è sempre una buona idea partire da una funzione

// const findMax = function (temps) {
//   let max = temps[0];
//   for (let i = 0; i < temperatures.length; i++) {
//     if (temperatures[i] > max) max = temperatures[i];
//   }
//   return max;
// };

// const findMin = function (temps) {
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     if (temps[i] < min) min = temps[i];
//   }
//   return min;
// };

// const calcTempAmplitude = function (temps) {
//   return findMin(temps) - findMax(temps);
// };

//Oppure scorrere una sola volta l'array per trovare sia il minimo che il massimo

// const calcTempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;
//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log('Max: ' + max);
//   console.log('Min: ' + min);
//   return max - min;
// };

// console.log(calcTempAmplitude(temperatures));

//Quando si ricerca una soluzione trovata online è importante comprendere cosa fa e come funziona
//Il problema è stato composto in tre problemi più piccoli, risolti da tre funzioni

//--- Problema 2 ---
//La funzione adesso deve ricevere due array
//La soluzione è  unire i due array

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log('Max: ' + max);
  console.log('Min: ' + min);
  return max - min;
};

console.log(calcTempAmplitudeNew(temperatures, temperatures2));

//Lezione 60: i bug
//ddd
