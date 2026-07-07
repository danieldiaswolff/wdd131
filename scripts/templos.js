const menuBtn = document.querySelector("#menu-btn");
const nav = document.querySelector("#nav-menu");
const yearSpan = document.querySelector("#ano");
const modifiedSpan = document.querySelector("#ultimaModificacao");

yearSpan.textContent = new Date().getFullYear();
modifiedSpan.textContent = `Última Modificação: ${document.lastModified}`;

menuBtn.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("show");
  menuBtn.textContent = isOpen ? "✕" : "☰";
  menuBtn.setAttribute("aria-expanded", isOpen);
  menuBtn.setAttribute("aria-label", isOpen ? "Fechar menu de navegação" : "Abrir menu de navegação");
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    if (nav.classList.contains("show")) {
      nav.classList.remove("show");
      menuBtn.textContent = "☰";
      menuBtn.setAttribute("aria-expanded", "false");
      menuBtn.setAttribute("aria-label", "Abrir menu de navegação");
    }
  });
});
