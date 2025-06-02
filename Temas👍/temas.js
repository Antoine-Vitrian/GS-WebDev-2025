const cabecalho = document.getElementById("header");
const conteudo = document.getElementById("main");

// tema Claro
function temaClaro(){
    cabecalho.style.backgroundColor = "black";
    cabecalho.style.color = "cyan";
    conteudo.style.backgroundColor = "cyan";
    conteudo.style.color = "black";
}
// Tema Intermediário
function temaInter(){
    cabecalho.style.backgroundColor = "firebrick";
    cabecalho.style.color = "whitesmoke";
    conteudo.style.backgroundColor = "whitesmoke";
    conteudo.style.color = "firebrick";
}
// Tema Escuro
function temaEscuro(){
    cabecalho.style.backgroundColor = "gray";
    cabecalho.style.color = "white";
    conteudo.style.backgroundColor = "black";
    conteudo.style.color = "white";
}