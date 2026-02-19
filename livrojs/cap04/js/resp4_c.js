const frm = document.querySelector("form");

const respTempo = document.querySelector("#outTempo");
const respTroco = document.querySelector("#outTroco");

// Se estiver no intervalo de 1 subtrair e devolver o resto(troc)
// Se estiver no intervalor de 1,75 subtrair e devolver o resto(troco)
// Se receber mais que 3 então subtrair e devolver o resto(troco)

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const valorInserido = Number(frm.inValor.value);
  let troco = 0;

  if (valorInserido < 1) {
    respTempo.innerText = "Valor insuficiente.";
  }

  if (valorInserido >= 1 && valorInserido < 1.75) {
    troco = valorInserido - 1;

    respTempo.innerText = `Tempo de permanência: 30 min.`;
    respTroco.innerText = `Troco ${troco.toFixed(2)}`;
  } else if (valorInserido >= 1.75 && valorInserido < 3) {
    troco = valorInserido - 1.75;

    respTempo.innerText = `Tempo de permanência: 60 min.`;
    respTroco.innerText = `Troco ${troco.toFixed(2)}`;
  } else if (valorInserido >= 3) {
    troco = valorInserido - 3;

    respTempo.innerText = `Tempo de permanência: 120 min.`;
    respTroco.innerText = `Troco ${troco.toFixed(2)}`;
  }
});
