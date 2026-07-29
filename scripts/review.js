const CHAVE_CONTADOR = "contagem-avaliacoes";

let total = Number(localStorage.getItem(CHAVE_CONTADOR)) || 0;
total += 1;
localStorage.setItem(CHAVE_CONTADOR, String(total));

const contador = document.querySelector("#contador-avaliacoes");
contador.textContent = total;
