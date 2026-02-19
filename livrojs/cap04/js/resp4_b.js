const frm = document.querySelector("form");

const resp = document.querySelector("#outResp");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const velPerm = Number(frm.inVelPerm.value);
  const velCond = Number(frm.inVelCond.value);

  const velMultaLeve = velPerm + velPerm * 0.2;

  if (velCond <= velPerm) {
    resp.innerText = "Sem multa";
  } else if (velCond <= velMultaLeve) {
    resp.innerText = "Multa leve";
  } else if (velCond > velMultaLeve) {
    resp.innerText = "Multa grave";
  }
});
