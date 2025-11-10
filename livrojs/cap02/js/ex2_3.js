const outResp1 = document.querySelector("#outResp1");
const outResp2 = document.querySelector("#outResp2");
const outResp3 = document.querySelector("#outResp3");

const frm = document.querySelector("form");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const inVeiculo = frm.inVeiculo.value;
  const inPreco = frm.inPreco.value;

  const valorEntrada = inPreco * 0.5;
  const restoAPagar = valorEntrada / 12;

  outResp1.innerText = `Promoção ${inVeiculo}`;
  outResp2.innerText = `Entrada de R$: ${valorEntrada.toFixed(2)}`;
  outResp3.innerText = `+ 12x de R$ ${restoAPagar.toFixed(2)}`;
});
