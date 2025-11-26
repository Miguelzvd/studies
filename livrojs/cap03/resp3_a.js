const prompt = require("prompt-sync")();

const salario = Number(prompt("Salário R$: "));
const tempo = Number(prompt("Tempo de trabalho em anos: "));

const quadrienios = Math.floor(tempo / 4);
const acrescimo = (salario * quadrienios) / 100;

console.log(`Número de quadriênios: ${quadrienios}`);
console.log(`Salário final R$ ${(salario + acrescimo).toFixed(2)}`);
