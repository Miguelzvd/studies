const frm = document.querySelector("form");

const resp = document.querySelector("#outResp");

frm.addEventListener("submit", (e) => {
  e.preventDefault();

  const num = Number(frm.inNum.value);

  // if (num % 2 === 0) {
  //   resp.innerText = `O número ${num} é par`;
  //   console.log(`O número ${num} é par`);
  // } else {
  //   resp.innerText = `O número ${num} é impar`;

  //   console.log(`O número ${num} é impar`);
  // }

  num % 2 === 0
    ? (resp.innerText = `O número ${num} é par`)
    : (resp.innerText = `O número ${num} é impar`);
});
