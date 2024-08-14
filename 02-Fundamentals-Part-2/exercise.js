const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const checkWinner = function (avgDoplhins, avgKoalas) {
    if (avgDoplhins === avgKoalas) {
        console.log("There's no winner for this time...");
    } else {
        const winner = avgDoplhins > avgKoalas ? "Doplhins" : "Koalas";
        console.log(`${winner} win(${avgDoplhins} vs. ${avgKoalas})`);
    }
}

const scoreDolphins = calcAverage(1, 3, 5);
const scoreKoalas = calcAverage(2, 4, 6);

console.log("Dolphins: " + scoreDolphins + " Koalas: " + scoreKoalas);

checkWinner(scoreDolphins, scoreKoalas);