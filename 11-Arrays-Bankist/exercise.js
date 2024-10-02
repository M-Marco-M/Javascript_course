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

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([3, 5, 2, 12, 7]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));

//Esercizio 17
const calcAverageHumanAgeArrow = dogsAges =>
  dogsAges
    .map(age => (age <= 2 ? age * 2 : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((avg, age, i, arr) => avg + age / arr.length, 0);

console.log(calcAverageHumanAgeArrow([3, 5, 2, 12, 7]));
console.log(calcAverageHumanAgeArrow([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAgeArrow([16, 6, 10, 5, 6, 1, 4]));

//Esercizio 18
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

//La porzione di cibo current deve essere compresa tra il 90% e il 110% della porzione raccomandata
//current > (recommended * 0.90) && current < (recommended * 1.10)

//-1) Cicla l'array cani e per ogni cane calcola la porzione corretta di cibo
//secondo la seguente formula (recommendedFood = weight ** 0.75 * 28)
//converti in kg
//e aggiungila come proprietà
//non creare un nuovo array, aggiungi una proprietà all'array dogs

dogs.forEach(dog => (dog.rightFood = (dog.weight ** 0.75 * 28) / 1000));

console.log(dogs);

//-2) Trova il cane di Sarah e stampa se mangia troppo poco o troppo
const sarahDog = dogs.find(dog => dog.owners.includes('Sarah'));

if (sarahDog.curFood > sarahDog.rightFood * 1000 * 1.1) {
  console.log('Mangia troppo');
} else if (sarahDog.curFood < sarahDog.rightFood * 1000 * 0.9) {
  console.log('Mangia poco');
} else {
  console.log('Mangia abbastanza');
}

//-3) Crea un array con i proprietari dei cani che mangiano troppo poco e uno con quelli che mangiano troppo

const [dogOwnersMuch, dogOwnersLittle] = Object.values(
  dogs.reduce(
    (arrays, dog) => {
      let ownersString = dog.owners.join(' ');
      if (dog.curFood > dog.rightFood * 1000 * 1.1) {
        arrays['ownersTooMuch'] += ownersString + ' ';
      }
      if (dog.curFood < dog.rightFood * 1000 * 0.9) {
        arrays['ownersTooLittle'] += ownersString + ' ';
      } else arrays = arrays;
      return arrays;
    },
    { ownersTooMuch: '', ownersTooLittle: '' }
  )
).map(ownString => ownString.trim().split(' '));

console.log(dogOwnersLittle);
console.log(dogOwnersMuch);

//Altra possibilità
const dogOwnersLittle2 = [];
const dogOwnersMuch2 = [];

dogs.forEach(dog => {
  if (dog.curFood > dog.rightFood * 1000 * 1.1) {
    dogOwnersLittle2.push(dog.owners);
  }
  if (dog.curFood < dog.rightFood * 1000 * 0.9) {
    dogOwnersMuch2.push(dog.owners);
  }
});

dogOwnersLittle2.flat();
dogOwnersMuch2.flat();

//-4) Stampa una stringa ch elenchi i padroni dei cani che mangiano troppo e dei cani che mangiano troppo poco

const stringLittle = dogOwnersLittle
  .join(' and ')
  .concat("'s dogs eat too little!");
console.log(stringLittle);

const stringMuch = dogOwnersMuch.join(' and ').concat("'s dogs eat too much!");
console.log(stringMuch);

//-5) Stampa in console se c'è almeno un cane che mangia esattamente quanto raccomandato (true o false)
console.log(dogs.some(dog => dog.rightFood * 1000 === dog.curFood));

//-6) Stampa in console se c'è almeno un cane che mangia nel giusto range (true o false)
console.log(
  dogs.some(
    dog =>
      dog.curFood > dog.rightFood * 1000 * 0.9 &&
      dog.curFood < dog.rightFood * 1000 * 1.1
  )
);

//-7) Crea un array che contenga i cani che mangiano ok, usando la condizione del punto 6
const dogsOk = dogs.filter(
  dog =>
    dog.curFood > dog.rightFood * 1000 * 0.9 &&
    dog.curFood < dog.rightFood * 1000 * 1.1
);

console.log(dogsOk);

const sortedDogs = dogs
  .slice()
  .sort((curr, dog) => curr.rightFood - dog.rightFood);

console.log(sortedDogs);
