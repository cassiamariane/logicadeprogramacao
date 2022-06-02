function pulaLinha() {
    document.write("<br><hr><br>");
}

function mostra(frase) {
    document.write("<big>" + frase + "</big>");
    pulaLinha();
}

for (var multiplicador =1; multiplicador <= 10; multiplicador++) {
    mostra (" 7 x " + multiplicador + " = " + 7 * multiplicador)
}

mostra ("Essa é a tabuada de 7 até o 10 ");