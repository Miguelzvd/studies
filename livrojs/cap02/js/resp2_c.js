const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const produto = frm.inProduto.value;
  const valor = Number(frm.inValor.value);

  const desconto = valor * 0.5;

  const valorDesconto = desconto + valor * 2;

  resp1.innerText = `${produto} - Promoção: Leve 3 por R$: ${valorDesconto.toFixed(
    2
  )}`;
  resp2.innerText = `O 3° produto custa apenas R$: ${desconto.toFixed(2)}`;
});
