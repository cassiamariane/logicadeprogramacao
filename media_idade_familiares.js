function pulaLinha() {
    document.write("<br><hr><br>");
}

function mostra(frase) {
    document.write("<big>" + frase + "</big>");
    pulaLinha();
}

var numeroDeMembros = parseInt(prompt ("Há quantas pessoas na sua família?"));
var numeroDeRepeticoes = 1;
var totalIdades = 0;

while( numeroDeRepeticoes <= numeroDeMembros){
    
    var idade = parseInt(prompt("Informe a idade"));
    totalIdades = totalIdades + idade;
    numeroDeRepeticoes++;
}

var mediaDasIdades = totalIdades/numeroDeMembros;
mostra("A média das idades dessa família é " + mediaDasIdades);