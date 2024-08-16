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

//Compito 5 (In realtà non chiedeva di usare il ciclo)
const populations = [39, 48, 98, 67];

console.log(populations.length === 4);

const percentages = [];
for (let i = 0; i < populations.length; i++) {
    percentages.push(percentageOfWorld1(populations[i]));
}
console.log(percentages);

//Compito 6
//Country = svizzera
const neighbours = ["Germania", "Austria", "Liechtenstein", "Italia", "Francia"];

neighbours.push("Utopia");
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if (!neighbours.includes("Germania")) {
    console.log("Probably not a central europe country... :D")
} else {
    console.log("Probably is a central europe country! :D")
}

neighbours[neighbours.indexOf("Francia")] = "Repubblica di Francia";
console.log(neighbours);

//Compito 7
const myCountry = {
    country: "Italia",
    capital: "Roma",
    language: "Italiano",
    population: 59,
    neighbours: ["Francia", "Svizzera", "Austria", "Slovenia"]
}

//Compito 8
const describeCountry2 = myCountry => `${myCountry.country} ha una popolazione di ${myCountry.population} milioni di persone, che parlano principalmente ${myCountry.language}. Confina con ${myCountry.neighbours.length} Paesi e la sua capitale è ${myCountry.capital}`;
console.log(describeCountry2(myCountry));

myCountry.population += 2;
console.log(describeCountry2(myCountry));

myCountry["population"] -= 2;
console.log(describeCountry2(myCountry));

