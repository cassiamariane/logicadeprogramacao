function pulaLinha() {
    document.write("<br><hr><br>");
}

function mostra(frase) {
    document.write("<big>" + frase + "</big>");
    pulaLinha();
}

var aPartir = 20;
while(aPartir >= 0) {
    mostra (aPartir);
    aPartir = aPartir - 1;
}
mostra ("Fim :) ");