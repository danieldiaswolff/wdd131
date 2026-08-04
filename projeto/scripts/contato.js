const opcoesAgendamento = [
  {
    id: "banho-padrao",
    rotulo: "Banho padrão"
  },
  {
    id: "tosa-higienica",
    rotulo: "Tosa higiênica"
  },
  {
    id: "tosa-completa",
    rotulo: "Tosa completa"
  },
  {
    id: "consulta-basica",
    rotulo: "Orientação veterinária"
  },
  {
    id: "duvida-produto",
    rotulo: "Dúvida sobre produtos"
  }
];

function preencherSelect() {
  const select = document.querySelector("#assunto");

  if (!select) {
    return;
  }

  opcoesAgendamento.forEach((opcao) => {
    const elemento = document.createElement("option");
    elemento.value = opcao.id;
    elemento.textContent = `${opcao.rotulo}`;
    select.appendChild(elemento);
  });
}

function salvarRascunhoNome() {
  const campoNome = document.querySelector("#nome");

  if (!campoNome) {
    return;
  }

  const nomeSalvo = localStorage.getItem("amigoFielNome");

  if (nomeSalvo) {
    campoNome.value = nomeSalvo;
  }

  campoNome.addEventListener("change", () => {
    localStorage.setItem("amigoFielNome", campoNome.value.trim());
  });
}

function configurarEnvio() {
  const formulario = document.querySelector("#form-contato");

  if (!formulario) {
    return;
  }

  formulario.addEventListener("submit", () => {
    const totalAtual = Number(localStorage.getItem("amigoFielAgendamentos") || "0");
    localStorage.setItem("amigoFielAgendamentos", `${totalAtual + 1}`);
  });
}

preencherSelect();
salvarRascunhoNome();
configurarEnvio();
