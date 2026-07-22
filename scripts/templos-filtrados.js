const templos = [
  {
    nomeDoTemplo: "Aba Nigeria",
    localizacao: "Aba, Nigéria",
    consagracao: "2005, 7 de agosto",
    area: 11500,
    urlDaImagem:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Manti Utah",
    localizacao: "Manti, Utah, Estados Unidos",
    consagracao: "1888, 21 de maio",
    area: 74792,
    urlDaImagem:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Payson Utah",
    localizacao: "Payson, Utah, Estados Unidos",
    consagracao: "2015, 7 de junho",
    area: 96630,
    urlDaImagem:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Yigo Guam",
    localizacao: "Yigo, Guam",
    consagracao: "2020, 2 de maio",
    area: 6861,
    urlDaImagem:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    nomeDoTemplo: "Washington D.C.",
    localizacao: "Kensington, Maryland, Estados Unidos",
    consagracao: "1974, 19 de novembro",
    area: 156558,
    urlDaImagem:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    nomeDoTemplo: "Lima Peru",
    localizacao: "Lima, Peru",
    consagracao: "1986, 10 de janeiro",
    area: 9600,
    urlDaImagem:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Cidade do México, México",
    localizacao: "Cidade do México, México",
    consagracao: "1983, 2 de dezembro",
    area: 116642,
    urlDaImagem:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Salt Lake Utah",
    localizacao: "Salt Lake City, Utah, Estados Unidos",
    consagracao: "1893, 6 de abril",
    area: 253015,
    urlDaImagem:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/400x250/salt-lake-temple-37762.jpg"
  },
  {
    nomeDoTemplo: "São Paulo Brasil",
    localizacao: "São Paulo, São Paulo, Brasil",
    consagracao: "1978, 30 de outubro",
    area: 59246,
    urlDaImagem:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/sao-paulo-brazil/400x250/sao-paulo-brazil-temple-lds-187030-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Roma Itália",
    localizacao: "Roma, Itália",
    consagracao: "2019, 10 de março",
    area: 41010,
    urlDaImagem:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/2019/400x250/1-Rome-Temple-2160936.jpg"
  }
];

const menuBtn = document.querySelector("#menu-btn");
const nav = document.querySelector("#nav-menu");
const album = document.querySelector("#album-templos");
const yearSpan = document.querySelector("#ano");
const modifiedSpan = document.querySelector("#ultimaModificacao");

yearSpan.textContent = new Date().getFullYear();
modifiedSpan.textContent = `Última Modificação: ${document.lastModified}`;

function obterAno(consagracao) {
  return parseInt(consagracao);
}

function criarCartaoTemplo(templo) {
  const cartao = document.createElement("article");
  cartao.classList.add("cartao-templo");

  cartao.innerHTML = `
    <h2>${templo.nomeDoTemplo}</h2>
    <p><span>Localização:</span> ${templo.localizacao}</p>
    <p><span>Dedicado:</span> ${templo.consagracao}</p>
    <p><span>Tamanho:</span> ${templo.area.toLocaleString("pt-BR")} pés²</p>
    <img src="${templo.urlDaImagem}" alt="Templo ${templo.nomeDoTemplo}" loading="lazy" width="400" height="250">
  `;

  return cartao;
}

function exibirTemplos(lista) {
  album.innerHTML = "";
  lista.forEach((templo) => {
    album.appendChild(criarCartaoTemplo(templo));
  });
}

function filtrarTemplos(filtro) {
  let filtrados = templos;

  switch (filtro) {
    case "antigos":
      filtrados = templos.filter((templo) => obterAno(templo.consagracao) < 1900);
      break;
    case "novos":
      filtrados = templos.filter((templo) => obterAno(templo.consagracao) > 2000);
      break;
    case "grandes":
      filtrados = templos.filter((templo) => templo.area > 90000);
      break;
    case "pequenos":
      filtrados = templos.filter((templo) => templo.area < 10000);
      break;
    default:
      filtrados = templos;
  }

  exibirTemplos(filtrados);
}

function fecharMenu() {
  if (nav.classList.contains("show")) {
    nav.classList.remove("show");
    menuBtn.textContent = "☰";
    menuBtn.setAttribute("aria-expanded", "false");
    menuBtn.setAttribute("aria-label", "Abrir menu de navegação");
  }
}

menuBtn.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("show");
  menuBtn.textContent = isOpen ? "✕" : "☰";
  menuBtn.setAttribute("aria-expanded", isOpen);
  menuBtn.setAttribute("aria-label", isOpen ? "Fechar menu de navegação" : "Abrir menu de navegação");
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const filtro = link.dataset.filtro;

    nav.querySelectorAll("a").forEach((item) => item.classList.remove("active"));
    link.classList.add("active");

    filtrarTemplos(filtro);
    fecharMenu();
  });
});

document.querySelector('[data-filtro="home"]').classList.add("active");
exibirTemplos(templos);
