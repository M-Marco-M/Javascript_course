//Assignment 1
const country = "Italy";
const continent = "Europe";
let population = 60; // const population = "60M";

console.log("Country = ", country, ", Continent = ", continent, ", Population = ", population);

//Assignment 2 - Assignment 3
const isIsland = false;
const language = "Italian"; //let language;

console.log(typeof country, typeof continent, typeof  population, typeof isIsland, typeof language);

//Assignment 4 - Assignment 5
// const oneHalfPopulation = population / 2;
// console.log(oneHalfPopulation); 

//Correzione
console.log(population / 2);

population++;
console.log(population);

let finlandPopulation = 6;

let myCountryHaveMorePeople = population > finlandPopulation;
console.log("My country have more population than Finland: " + myCountryHaveMorePeople);

let avgGlobalPopulation = 33;
myCountryHaveMorePeople = population > avgGlobalPopulation;
console.log("My country have more population than average of countries: " + myCountryHaveMorePeople);

const description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(description);

//Assignment 6

if (population > avgGlobalPopulation) {
    console.log(`${country}'s population is ${population - avgGlobalPopulation} million over average`);
} else {
    console.log(`${country}'s population is ${avgGlobalPopulation - population} million below average`);
}

//Assignment 7
//(Predici il risultato)
console.log('9' - '5'); // -> 4
console.log('19' - '13' + '17'); // -> 617
console.log('19' - '13' + 17); // -> 23
console.log('123' < 57); // -> false
console.log(5 + 6 + '4' + 9 - 4 - 2); // -> 1143

//Assignment 8

// const numNeighbours = Number(prompt('How many neighbour countries does your contry have?'));

// if (numNeighbours === 1) {
//     console.log("Only 1 border!");
// } else if (numNeighbours > 1) {
//     console.log("More than 1 border");
// } else {
//     console.log("No borders");
// }

//Assignment 9
if (population < 50 && !isIsland && language === "English") {
    console.log(`You should live in ${country} 😉`);
} else {
    console.log(`${country} does not meet your criteria 🙄`);
}

switch(language) {
    case("chinese") :
    case("mandarin") : 
        console.log("MOST number of native speakers");
    break
    case("spanish") :
        console.log('2nd place in number of native speakers');
    break
    case("english") :
        console.log('3rd place');
    break
    case("hindi") :
        console.log("Number 4");
    break
    case("arabic") :
        console.log('5th most spoken language');
    break
    default : 
        console.log("Great language too :D");
    }

//Assignment 10
console.log(`${country}'s population is ${population > 33 ? "above" : "below"} average`);