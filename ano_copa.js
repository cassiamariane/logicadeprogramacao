function pulaLinha() {
    document.write("<br><hr><br>");
}

function mostra(frase) {
    document.write("<big>" + frase + "</big>");
    pulaLinha();
}

var limite = prompt("Até qual ano você gostaria de imprimir as copas? ");
var anoCopa = 1930;
while(anoCopa <= limite) {
mostra ("Tem copa no ano de " + anoCopa)
anoCopa = anoCopa + 4;}

mostra ("Esses foram todos os anos de copa até " + limite);