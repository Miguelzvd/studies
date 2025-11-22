const frm = document.querySelector("form");
const outResp = document.querySelector("#outResp");

frm.addEventListener("submit", (e) => {
  const precoQuilo = Number(frm.precoQuilo.value);
  const consumo = frm.cosumo.value / 1000;

  const precoConsumo = precoQuilo * consumo;

  outResp.innerText = `Valor a pagar R$: ${precoConsumo}`;

  e.preventDefault();
});
