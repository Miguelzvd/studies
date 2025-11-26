const prompt = require("prompt-sync")();

const peso = Number(prompt("Peso da Ração (kg): "));
const consumo = Number(prompt("Consumo Diário (gr): "));
const pesoGr = peso * 1000;

const dias = Math.floor(pesoGr / consumo);
const resto = pesoGr - consumo * dias;

console.log(`Duração: ${dias} dias`);
console.log(`Sobra: ${resto}gr`);
