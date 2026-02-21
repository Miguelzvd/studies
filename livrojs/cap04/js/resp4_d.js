const frm = document.querySelector("form");

const respTriangulo = document.querySelector("#outEhTrigangulo");
const respTipoTriangulo = document.querySelector("#outTipoTriangulo");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const ladoA = Number(frm.inLadoA.value);
  const ladoB = Number(frm.inLadoB.value);
  const ladoC = Number(frm.inLadoC.value);

  const ladoAB = ladoA + ladoB;
  const ladoAC = ladoA + ladoC;
  const ladoBC = ladoB + ladoC;

  if (ladoA >= ladoBC || ladoC >= ladoAB || ladoB >= ladoAC) {
    respTriangulo.innerText = "Não pode formar triângulo.";

    respTipoTriangulo.innerText = "";
    return;
  }

  if (ladoA == ladoB && ladoA == ladoC) {
    respTriangulo.innerText = "Pode formar triângulo.";

    respTipoTriangulo.innerText = "Triângulo tipo: Equilátero";
  } else if (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC) {
    respTriangulo.innerText = "Pode formar triângulo.";

    respTipoTriangulo.innerText = "Triângulo tipo: Isósceles";
  } else {
    respTriangulo.innerText = "Pode formar triângulo.";

    respTipoTriangulo.innerText = "Triângulo tipo: Escaleno";
  }
});
