const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const num = Number(frm.inNum.value);

  const quadrado = Math.sqrt(num);

  const quadradoPerfeito =  Number.isInteger(quadrado);

  if (quadradoPerfeito) {
    resp.innerText = `Raiz: ${quadrado}`
  
  } else {
    resp.innerText = `Não há raiz exata para ${num}`
  }
});
