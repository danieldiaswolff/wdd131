function configurarMenu() {
  const botao = document.querySelector("#menu-toggle");
  const nav = document.querySelector("#nav-principal");

  if (!botao || !nav) {
    return;
  }

  botao.addEventListener("click", () => {
    const aberto = nav.classList.toggle("aberto");
    botao.setAttribute("aria-expanded", `${aberto}`);
    botao.setAttribute("aria-label", aberto ? `Fechar menu` : `Abrir menu`);
  });
}

configurarMenu();
