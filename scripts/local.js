const anoSpan = document.getElementById("ano");
const modificacaoSpan = document.getElementById("ultimaModificacao");
const sensacaoSpan = document.getElementById("sensacaoTermica");

const temperatura = 10;
const velocidadeVento = 5;

anoSpan.textContent = new Date().getFullYear();
modificacaoSpan.textContent = `Última Modificação: ${document.lastModified}`;

function calcularSensacaoTermica(temp, vento) {
  return 13.12 + 0.6215 * temp - 11.37 * Math.pow(vento, 0.16) + 0.3965 * temp * Math.pow(vento, 0.16);
}

if (temperatura <= 10 && velocidadeVento > 4.8) {
  const sensacao = calcularSensacaoTermica(temperatura, velocidadeVento);
  sensacaoSpan.textContent = `${sensacao.toFixed(1)} °C`;
} else {
  sensacaoSpan.textContent = "N/A";
}
