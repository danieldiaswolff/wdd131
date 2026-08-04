const itens = [
  {
    id: "banho-padrao",
    nome: "Banho padrão",
    categoria: "servico",
    descricao: "Banho com shampoo neutro, secagem e escovação para cães e gatos.",
    preco: 65,
    duracao: "45 min"
  },
  {
    id: "tosa-higienica",
    nome: "Tosa higiênica",
    categoria: "servico",
    descricao: "Limpeza de patas, barriga e região íntima com acabamento cuidadoso.",
    preco: 55,
    duracao: "30 min"
  },
  {
    id: "tosa-completa",
    nome: "Tosa completa",
    categoria: "servico",
    descricao: "Corte conforme a raça ou preferência do tutor, com banho incluso.",
    preco: 110,
    duracao: "90 min"
  },
  {
    id: "consulta-basica",
    nome: "Orientação veterinária",
    categoria: "servico",
    descricao: "Avaliação rápida de bem-estar e indicação de cuidados diários.",
    preco: 80,
    duracao: "30 min"
  },
  {
    id: "racao-adulto",
    nome: "Ração premium adulto",
    categoria: "produto",
    descricao: "Pacote de 3 kg para cães adultos com proteína de alta qualidade.",
    preco: 89,
    duracao: "pronta entrega"
  },
  {
    id: "brinquedo-corda",
    nome: "Brinquedo de corda",
    categoria: "produto",
    descricao: "Corda resistente para mordida e brincadeiras interativas.",
    preco: 29,
    duracao: "pronta entrega"
  },
  {
    id: "coleira-passeio",
    nome: "Coleira acolchoada",
    categoria: "produto",
    descricao: "Coleira ajustável com acolchoamento para passeios confortáveis.",
    preco: 49,
    duracao: "pronta entrega"
  },
  {
    id: "shampoo-pet",
    nome: "Shampoo suave",
    categoria: "produto",
    descricao: "Fórmula hipoalergênica indicada para pelagens sensíveis.",
    preco: 39,
    duracao: "pronta entrega"
  }
];

const lista = document.querySelector("#lista-servicos");
const mensagem = document.querySelector("#mensagem-filtro");
const botoesFiltro = document.querySelectorAll(".filtro");

function formatarPreco(valor) {
  return `R$ ${valor.toFixed(2).replace(".", ",")}`;
}

function criarCartao(item) {
  const rotulo = item.categoria === "servico" ? "Serviço" : "Produto";

  return `
    <article class="cartao-servico" data-categoria="${item.categoria}">
      <span class="categoria">${rotulo}</span>
      <h3>${item.nome}</h3>
      <p>${item.descricao}</p>
      <div class="meta">
        <span>${formatarPreco(item.preco)}</span>
        <span>${item.duracao}</span>
      </div>
    </article>
  `;
}

function filtrarItens(categoria) {
  if (categoria === "todos") {
    return itens;
  }

  return itens.filter((item) => item.categoria === categoria);
}

function renderizarItens(categoria) {
  const filtrados = filtrarItens(categoria);

  if (filtrados.length === 0) {
    lista.innerHTML = "";
    mensagem.hidden = false;
    mensagem.textContent = `Nenhum item encontrado para a categoria selecionada.`;
    return;
  }

  mensagem.hidden = true;
  lista.innerHTML = filtrados.map((item) => criarCartao(item)).join("");
}

function atualizarBotoes(categoriaAtiva) {
  botoesFiltro.forEach((botao) => {
    const ativo = botao.dataset.filtro === categoriaAtiva;
    botao.classList.toggle("ativo", ativo);
    botao.setAttribute("aria-pressed", `${ativo}`);
  });
}

function configurarFiltros() {
  botoesFiltro.forEach((botao) => {
    botao.addEventListener("click", () => {
      const categoria = botao.dataset.filtro;
      atualizarBotoes(categoria);
      renderizarItens(categoria);

      localStorage.setItem("amigoFielFiltro", categoria);
    });
  });
}

function iniciarPaginaServicos() {
  const filtroSalvo = localStorage.getItem("amigoFielFiltro") || "todos";
  atualizarBotoes(filtroSalvo);
  renderizarItens(filtroSalvo);
  configurarFiltros();
}

iniciarPaginaServicos();
