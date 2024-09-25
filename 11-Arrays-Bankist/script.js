'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

//Lezione 146: ciclo forEach per mappe e set
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

//Funziona in maniera del tutto simile agli array. Il primo valore è il valore
//il secondo è la chiave, il terzo la mappa
currencies.forEach(function (value, key, map) {
  console.log(`${value} at ${key}`);
  console.log(map);
});

//Per i set è simile, ma il secondo parametro restituisce di nuovo il valore
//questo perchè i set non hanno chiave o indice

new Set(['USD', 'EUR', 'GBP', 'EUR', 'GBP']).forEach(function (value, _, set) {
  console.log('value', value);
  console.log(set);
  console.log('_', _);
});
/*
//Lezione 145: ciclo forEach
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//Con for-of
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

//Con forEach
//Tra parentesi il primo parametro è l'elemento, il secondo l'indice e il terzo l'intero array
movements.forEach(function (movement, index, array) {
  if (movement > 0) {
    console.log(`${index + 1}: You deposited ${movement}`);
  } else {
    console.log(`${index + 1}: You withdrew ${Math.abs(movement)}`);
  }
});
//Continue e break NON FUNZIONANO nel forEach
*/

/////////////////////////////////////////////////

/*
//Lezione 143: metodi degli array
let arr = ['a', 'b', 'c', 'd', 'e'];

//Slice: funziona in maniera identica al metodo delle stringhe
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
//Mostra l'ultima posizione
console.log(arr.slice(-1));
console.log(arr.slice(2, -2));
console.log(arr.slice()); //Semplicemente restituisce l'array
//Come
console.log([...arr]);

//Utile per assegnare un array copia di un altro perchè bisogna ricordare che
const arr2 = arr;
//arr2 punta ad arr
arr2[0] = 'z';
console.log(arr[0]); //è uguale a z

const arr3 = arr.slice();
arr3[1] = 'z';
console.log('Arr3' + ' ' + arr3);
console.log('Arr' + ' ' + arr);

//Splice
//è diverso dalle stringhe
//Modifica l'array originale

console.log(arr.splice(2));
console.log(arr);

//Array contiene la parte troncata (le prime 2)
let vettore = ['a', 'b', 'c', 'd', 'e', 'f'];
//Rimuove l'ultimo elemento dell'array
vettore.splice(-1);
console.log(vettore);

//Reverse
//Modifica l'array originale
vettore.reverse();
console.log(vettore);

//Concat
console.log(arr.concat(vettore));
//Uguale a
console.log([...arr, ...vettore]);

//Join
console.log(vettore.join(' - '));

//Lezione 144: Metodo "at"

console.log(vettore[0]);
console.log(vettore.at(0));

//Restituire l'ultima cella
console.log(vettore.splice(-1)[0]); //Bisogna prendere il primo valore perchè restituisce un array
console.log(vettore[vettore.length - 1]);

//Con il metodo at
console.log(vettore.at(-1));

//Si può usare anche sulle stringhe
console.log('Albero'.at(-1));
*/
