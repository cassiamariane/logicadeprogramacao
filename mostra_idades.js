function pulaLinha() {
    document.write("<br><hr><br>");
}

function mostra(frase) {
    document.write("<big>" + frase + "</big>");
    pulaLinha();
}

var ano = 2021;
mostra("Eu nasci em: " + (ano-18));
mostra("Adriano nasceu em: " + (ano-28));
mostra("Paulo nasceu em: " + (ano - 34));