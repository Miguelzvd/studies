const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const valor = Number(frm.inValor.value);
  const tempo = Number(frm.inTempo.value);

  const pagar = Math.ceil(tempo / 15) * preco;

  resp.innerText = `Valor a pagar R$: ${pagar.toFixed(2)}`;
});
