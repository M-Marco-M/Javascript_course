//Esercizio 1
let massMark, heightMark, massJohn, heightJohn, BMIMark, BMIJohn, markHigherBMI;

massMark = 78;
heightMark = 1.69;

massJohn = 92;
heightJohn = 1.95;

BMIMark = massMark / (heightMark * heightMark);
BMIJohn = massJohn / (heightJohn * heightJohn);

markHigherBMI = BMIMark > BMIJohn;

console.log(
  "BMI Mark:" + BMIMark,
  "BMI John:" + BMIJohn,
  "Mark BMIIsHigher: " + markHigherBMI
);

//Secondo test
massMark = 95;
heightMark = 1.88;

massJohn = 85;
heightJohn = 1.76;

BMIMark = massMark / (heightMark * heightMark);
BMIJohn = massJohn / (heightJohn * heightJohn);

markHigherBMI = BMIMark > BMIJohn;

console.log(
  "BMI Mark:" + BMIMark,
  "BMI John:" + BMIJohn,
  "Mark BMIIsHigher: " + markHigherBMI
);

//Esercizio 2
if (markHigherBMI) {
  console.log(
    `Il BMI di Mark (${BMIMark}) è maggiore di quello di John (${BMIJohn})`
  );
} else {
  console.log(
    `Il BMI di John (${BMIJohn}) è maggiore di quello di Mark (${BMIMark})`
  );
}

//Esercizio 3
const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;

const IsDolphinsMin = scoreDolphins > 100;
const IsKoalasMin = scoreKoalas > 100;

if (IsDolphinsMin && scoreDolphins > scoreKoalas) {
  console.log("Dolphins win the trophy");
} else if (IsKoalasMin && scoreDolphins < scoreKoalas) {
  console.log("Koalas win the trophy");
} else if (IsDolphinsMin && scoreDolphins === scoreKoalas) {
  console.log("Both win the trophy");
} else {
  console.log("None wins the trophy. PERDENTI!");
}

//Esercizio 4
const bill = 301;
const tip = bill < 50 || bill > 300 ? bill * (20 / 100) : bill * (15 / 100);
console.log(
  `The bill is ${bill}, the tip is ${tip} and the total is ${bill + tip}`
);

//Lezione 30: Le verioni di Javascript
//Javascript ha ricevuto un grosso update nel 2015 chiamato ES2015 o ES6
//Le nuove release di javascript non cancellano mai vecchie funzioni, per eitare che e vecchie
//pagine web smettano di funzionare
