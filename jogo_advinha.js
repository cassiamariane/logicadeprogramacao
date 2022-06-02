function pulaLinha() {
    document.write("<br><hr><br>");
}

function mostra(frase) {
    document.write("<h3>" + frase + "</h3>");
    pulaLinha();
}


function sorteia(n) {

    return Math.round(Math.random() * n);
}    

var limiteDeSorteio = parseInt(prompt("Até qual número você gostaria de sortear?"));
var numeroPensado = sorteia(limiteDeSorteio);

var tentativas = 1;
while (tentativas <=3) {
    var chute = parseInt(prompt("Digite seu chute de 1 a " + limiteDeSorteio));
    
    if(chute == numeroPensado){
        mostra("Parabéns!! Você acertou! O número pensado era " + numeroPensado);
        break;
    } else { 
        if(chute > numeroPensado){
        mostra("Você errou, " + chute + " era maior que o número pensado");
        } else {
        mostra("Você errou, " + chute + " era menor que o número pensado");
    }	
        }
        
        tentativas++;
}

mostra("Fim, para jogar novamente basta recarregar a página.");

//Alternativa:
//if(chute != numeroPensado){
//	mostra("Você errou, o número era " + numeroPensado);
//}