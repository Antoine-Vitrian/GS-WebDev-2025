// Declaração de variáveis
var menuButton = document.getElementById("menu-button");
var menu = document.getElementById("menu");

// O foco é na funcionalidade então não estilizei a página

// Criação da função
menuButton.addEventListener("click", function() {
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
});