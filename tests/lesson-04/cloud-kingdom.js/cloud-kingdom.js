
let playerName = "Mario";
let currentLives = 3;

const l1Coins = 25;
const l2Coins = 30;
const l3Coins = 45;

const totalCoins = l1Coins + l2Coins + l3Coins;
const avgCoins = totalCoins / 3;
const remainder = totalCoins % 3;

console.log("Player:", playerName);
console.log("Lives:", currentLives);
console.log("Average coins:", avgCoins);
console.log("Remainder when divided by 3:", remainder);
