//Compito 1
const describeCountry = function (country, population, capitalCity) {
    return `${country} has ${population} million people and his capital is ${capitalCity}`;
}

const italia = describeCountry("Italia", 60, "Roma");
const belgio = describeCountry("Belgio", 12, "Bruxelles");
const bulgaria = describeCountry("Bulgaria", 6, "Sofiya");

console.log(`${italia}, ${belgio}, ${bulgaria}`);

//Compito 2