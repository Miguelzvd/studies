const prompt = require("prompt-sync")();

const num = Number(prompt("digite o número: "));

if (num < 100 || num >= 1000) {
  console.log("Número inválido. Digite uma centena");
}

const num1 = Math.floor(num / 100);
const sobra = num % 100;

const num2 = Math.floor(sobra / 10);

const num3 = num % 10;

const numInvertido = `${num3}${num2}${num1}`;
console.log(numInvertido);

// ==================================================================
// ==================================================================
// ==================================================================

const numInvertido2 = String(num).split("").reverse().join("");

console.log(numInvertido2);
