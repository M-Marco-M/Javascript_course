let massMark, heightMark, massJohn, heightJohn, BMIMark, BMIJohn, markHigherBMI;

massMark = 78;
heightMark = 1.69;

massJohn = 92;
heightJohn = 1.95;

BMIMark = massMark / (heightMark * heightMark);
BMIJohn = massJohn / (heightJohn * heightJohn);

markHigherBMI = BMIMark > BMIJohn;

console.log("BMI Mark:" + BMIMark,"BMI John:" + BMIJohn, "Mark BMIIsHigher: " + markHigherBMI);

//Secondo test
massMark = 95;
heightMark = 1.88;

massJohn = 85;
heightJohn = 1.76;

BMIMark = massMark / (heightMark * heightMark);
BMIJohn = massJohn / (heightJohn * heightJohn);

markHigherBMI = BMIMark > BMIJohn;

console.log("BMI Mark:" + BMIMark,"BMI John:" + BMIJohn, "Mark BMIIsHigher: " + markHigherBMI);