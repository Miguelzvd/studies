const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const hora = Number(frm.inHora.value);

  let horaFranca = hora + 5;

  if (horaFranca >= 24) {
    horaFranca = horaFranca - 24;
  }

  resp.innerText = `Hora na frança: ${horaFranca.toFixed(2)}`;
});
