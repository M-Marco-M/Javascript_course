//Compito 1
const describeCountry = function (country, population, capitalCity) {
    return `${country} has ${population} million people and his capital is ${capitalCity}`;
}

const italia = describeCountry("Italia", 60, "Roma");
const belgio = describeCountry("Belgio", 12, "Bruxelles");
const bulgaria = describeCountry("Bulgaria", 6, "Sofiya");

console.log(`${italia}, ${belgio}, ${bulgaria}`);

//Compito 2
function percentageOfWorld1(population) {
    return population / 7900 * 100;
}

const percentageOfWorld2 = function (population) {
    return population / 7900 * 100;
}

const chinaPercentage = percentageOfWorld2(1412);
const italiaPercentage = percentageOfWorld2(59);
const usaPercentage = percentageOfWorld2(333);
console.log(chinaPercentage, italiaPercentage, usaPercentage);

const indiaPercentage = percentageOfWorld1(1417);
const canadaPercentage = percentageOfWorld1(39);
const spagnaPercentage = percentageOfWorld1(48);
console.log(indiaPercentage, spagnaPercentage, canadaPercentage);

//Compito 3
const percentageOfWorld3 = population => population / 7900 * 100;
const vietnamPercentage = percentageOfWorld3(98);
const messicoPercentage = percentageOfWorld3(128);
const ukPercentage = percentageOfWorld3(67);
console.log(vietnamPercentage, ukPercentage, messicoPercentage);