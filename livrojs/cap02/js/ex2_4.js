const frm = document.querySelector("form");
const outResp = document.querySelector("#outResp");

frm.addEventListener("submit", (e) => {
  const inQuilo = Number(frm.inQuilo.value);
  const inConsumo = Number(frm.inCosumo.value);

  const valor = (inQuilo / 1000) * inConsumo;

  outResp.innerText = `Valor a pagar R$: ${valor.toFixed(2)}`;

  e.preventDefault();
});
