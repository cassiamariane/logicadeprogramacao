function pulaLinha() {
    document.write("<br><hr><br>");
}

function mostra(frase) {
    document.write("<big>" + frase + "</big>");
    pulaLinha();
}

var multiplicador = 1;
while(multiplicador <= 10) {
    mostra (" 7 x " + multiplicador + " = " + 7 * multiplicador)
    multiplicador = multiplicador + 1;
}

mostra ("Essa é a tabuada de 7 até o 10 ");