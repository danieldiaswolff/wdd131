function exibirConfirmacao() {
  const nomeElemento = document.querySelector("#nome-tutor");
  const contadorElemento = document.querySelector("#total-agendamentos");
  const params = new URLSearchParams(window.location.search);
  const nome = params.get("nome");
  const total = Number(localStorage.getItem("amigoFielAgendamentos") || "0");

  if (nomeElemento) {
    if (nome && nome.trim() !== "") {
      nomeElemento.textContent = `Obrigado, ${nome.trim()}!`;
    } else {
      nomeElemento.textContent = `Obrigado pelo contato!`;
    }
  }

  if (contadorElemento) {
    if (total === 1) {
      contadorElemento.textContent = `Esta é a 1ª solicitação registrada neste navegador.`;
    } else {
      contadorElemento.textContent = `Já registramos ${total} solicitações neste navegador.`;
    }
  }
}

exibirConfirmacao();
