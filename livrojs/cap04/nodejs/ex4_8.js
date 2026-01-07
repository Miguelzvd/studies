const prompt = require("prompt-sync")();

const valorMinParcela = 20;
const numMaxParcelas = 6;

const valorCompra = Number(prompt("Valor da compra R$: "));

const aux = Math.floor(valorCompra / valorMinParcela);

console.log("Quantidade minima de vezes que pode parcelar", aux);

const parcelas = aux === 0 ? 1 : aux > numMaxParcelas ? numMaxParcelas : aux;

const valorParcelas = valorCompra / parcelas;

console.log(`Pode pagar em ${parcelas}x de R$ ${valorParcelas.toFixed(2)}`);
