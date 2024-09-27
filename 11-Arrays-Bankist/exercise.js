'use strict';

//Esercizio 15

//Dati i due array di età dei cani dogsKate e dogsJulia crea una funzione checkDogs
//-1) Che rimuova il primo e gli ultimi due valori dell'array dogsJulia
//(che si è scoperto in realtà essere gatti e non cani), conservando il risultato
//in un altro array senza compromettere l'originale(è una pratica sconsigliata
//modificare gli oggetti originali)

//-2) Crei un array con i valori di entrambi gli array

//-3) Per ogni stampi in console se è adulto o cucciolo, indicando l'età se adulto
//("Dog number 1 is an adult, and is 5 years old"), ("Dog number 2 is still a puppy")

const checkDogs = function (dogsJulia, dogsKate) {
  const allDogs = [...[...dogsJulia].slice(1, -2), ...dogsKate];
  allDogs.forEach(function (dogAge, i) {
    console.log(
      `Dog number ${i + 1} is ${
        dogAge >= 3 ? `an adult, and is ${dogAge}` : 'is still a puppy'
      }`
    );
  });
};

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

//Esercizio 16
//Crea una funzione calcAverageHumanAge che prenda in ingresso un array di età di cani
//-1) Converte l'età dei cani in anni degli umani secondo la seguente formula:
//dogAge <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old,
//humanAge = 16 + dogAge * 4
//-2) Esclude tutti i cani che hanno età umana < 18
//-3) Calcola l'età media dei cani adulti
const calcAverageHumanAge = function (dogsAges) {
  const humanAges = dogsAges.map(age => (age <= 2 ? age * 2 : 16 + age * 4));
  console.log(humanAges);
  const adults = humanAges.filter(age => age >= 18);
  return adults.reduce((avg, age) => avg + age, 0) / adults.length;
};

const calcAverageHumanAge2 = function (dogsAges) {
  return dogsAges
    .map(age => (age <= 2 ? age * 2 : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((avg, age, i, arr) => avg + age / arr.length, 0);
};
console.log(calcAverageHumanAge2([3, 5, 2, 12, 7]));
console.log(calcAverageHumanAge2([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge2([16, 6, 10, 5, 6, 1, 4]));
