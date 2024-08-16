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

//Compito 4
const describePopulation = function (country, population) {
    return `${country} has ${population} million people, which is about ${percentageOfWorld1(population)}% of the world`;
}

console.log(describePopulation("Vietnam", 98));
console.log(describePopulation("Canada", 39));
console.log(describePopulation("Italia", 59));

//Compito 5
const populations = [39, 48, 98, 67];

console.log(populations.length === 4);

const percentages = [];
for (let i = 0; i < populations.length; i++) {
    percentages.push(percentageOfWorld1(populations[i]));
}
console.log(percentages);

//Compito 6