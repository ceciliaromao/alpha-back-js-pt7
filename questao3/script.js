document.querySelector("#btn-send").addEventListener("click", Send);
document.querySelector("#btn-clear").addEventListener("click", Clean);
document.addEventListener("keydown", Validate);

const chat = document.querySelector("#chat");
const mensagem = document.querySelector("#mensagem");
mensagem.focus();

function Send() {
  const txtMsg = mensagem.value;
  if (txtMsg == "") {
  } else {
    const today = new Date();
    const time = addZeroes(today.getHours(), 2) + ":" + addZeroes(today.getMinutes(), 2) + ":" + addZeroes(today.getSeconds(), 2);
    chat.innerHTML += `Você [${time}]: ${txtMsg}\n\n`;
    mensagem.value = "";
  }
  chat.scrollTop = chat.scrollHeight;
}

function Validate(e) {
  if (e.key == "Enter") {
    e.preventDefault();
    console.log(e.key);
    Send();
  }
}

function Clean() {
  chat.innerHTML = "";
  mensagem.value = "";
  scrollY = 0;
  mensagem.focus();
}

function addZeroes(num, len) {
  let numWithZeroes = String(num);
  let counter = numWithZeroes.length;

  while (counter < len) {
    numWithZeroes = "0" + numWithZeroes;
    counter++;
  }

  return numWithZeroes;
}