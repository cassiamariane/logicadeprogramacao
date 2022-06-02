function pulaLinha() {
    document.write("<br><hr><br>");
}

function mostra(frase) {
    document.write("<big>" + frase + "</big>");
    pulaLinha();
}

var apartir = 0;
while(apartir < 100) {
apartir = apartir + 2;
mostra ("O " + apartir + " é um número par!");
}

mostra ("Fim :) ");