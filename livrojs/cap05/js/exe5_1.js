const frm = document.querySelector("form");

const resp = document.querySelector("pre");

frm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(1)

  const numero = Number(frm.inNumero.value);

  let numeros = "";

  for (let i = 1; i <= 10; i++) {
    numeros = `${numeros}${numero} x ${i} = ${numero * i}\n`;
  }
  resp.innerText = numeros;
});
