const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const checkWinner = function (avgDoplhins, avgKoalas) {
    if (avgDoplhins >= 2 * avgKoalas) {
        console.log(`Doplhins win(${avgDoplhins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDoplhins) {
        console.log(`Koalas win(${avgKoalas} vs. ${avgDoplhins})`);
    } else {
        console.log("There's no winner for this time...");
    }
}

const scoreDolphins = calcAverage(1, 3, 5);
const scoreKoalas = calcAverage(2, 4, 6);

console.log("Dolphins: " + scoreDolphins + " Koalas: " + scoreKoalas);

checkWinner(scoreDolphins, scoreKoalas);