const frm = document.querySelector("form");
const outTitulo = document.querySelector("h3");
const outDuracao = document.querySelector("h4");

frm.addEventListener("submit", (e) => {
  e.preventDefault();
  const minutos = frm.inDuracao.value % 60;
  const horas = Math.floor(frm.inDuracao.value / 60);

  outTitulo.innerText = `${frm.inTitulo.value}`;

  if (minutos && horas) {
    outDuracao.innerText = `Duração: ${horas} horas(s) e ${minutos} minuto(s)`;
    return;
  }

  if (horas) {
    outDuracao.innerText = `Duração: ${horas} horas(s)`;
    return;
  }

  if (minutos) {
    outDuracao.innerText = `Duração: ${minutos} minuto(s)`;
    return;
  }
});
