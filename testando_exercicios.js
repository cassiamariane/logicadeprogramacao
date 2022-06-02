function pulaLinha() {
    document.write("<br>");
}

function exibeResultado(resultado) {
    document.write("<h1>" + resultado + "</h1>");
    pulaLinha();
}
var idadeMediaParaTerFilhos = 28;
var atual = 2021;

exibeResultado("Se passaram  " + (atual-1500)/idadeMediaParaTerFilhos + " gerações");
pulaLinha();