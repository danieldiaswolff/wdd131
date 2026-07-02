const yearElement = document.getElementById("anoatual");
const modifiedElement = document.getElementById("ultimaModificacao");

yearElement.textContent = new Date().getFullYear();
modifiedElement.textContent = `Última Modificação: ${document.lastModified}`;
