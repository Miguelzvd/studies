const frm = document.querySelector("form");

const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");
const resp3 = document.querySelector("#outResp3");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  let valorSaque = Number(frm.inValor.value);

  if (valorSaque % 10 != 0) {
    alert("Valor inválido para notas disponíveis (10$, 50$, 100$)");
    frm.inValor.focus();
    return;
  }

  const qtdNota100 = Math.floor(valorSaque / 100);
  let resto = valorSaque % 100;

  const qtdNota50 = Math.floor(resto / 50);
  resto = valorSaque % 50;

  const qtdNota10 = Math.floor(resto / 10);
  resto = valorSaque % 10;

  resp1.innerText = `Notas de R$ 100: ${qtdNota100}`;
  resp2.innerText = `Notas de R$ 50: ${qtdNota50}`;
  resp3.innerText = `Notas de R$ 10: ${qtdNota10}`;
});
