function pulaLinha() {
    document.write("<br><hr><br>");
}

function mostra(frase) {
    document.write("<big>" + frase + "</big>");
    pulaLinha();
}

var i = 0
while(i < 10) {
    alert( "O resultado é " + (2 * i) );
    i++;
}