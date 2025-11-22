const frm = document.querySelector("form");

const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

frm.addEventListener("submit", (e) => {
  const inMedicamento = frm.inMedicamento.value;
  const inPreco = Number(frm.inPreco.value);

  const valor = Math.floor(inPreco) * 2;

  resp1.innerText = `Promoção de ${inMedicamento}`;

  resp2.innerText = `Leve 2 por apenas R$: ${valor}`;
  e.preventDefault();
});
