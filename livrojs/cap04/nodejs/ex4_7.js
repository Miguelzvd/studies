const prompt = require("prompt-sync")();

const qtdPessoas = Number(prompt("Número de pessoas: "));
const qtdPeixes = Number(prompt("Número de peixes: "));
const valorAPagar = qtdPessoas * 20;

if (qtdPeixes > qtdPessoas) {
  const qtdExtraPeixes =  qtdPeixes - qtdPessoas;
  const valorExtraAPagar = qtdExtraPeixes * 12;

  console.log(
    `Valor a pagar: R$ ${(valorAPagar + valorExtraAPagar).toFixed(2)}`
  );
} else {
  console.log(`Valor a pagar: R$ ${valorAPagar.toFixed(2)}`);
}
