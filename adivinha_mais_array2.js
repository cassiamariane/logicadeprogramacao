function sorteia() {

    return Math.round(Math.random() * 10);

 }
 
function sorteiaNumeros(quantidade) {

    var segredos = [];
    var numero = 1;

    while(numero <= quantidade) {

        var numeroAleatorio = sorteia();
        var achou = false;

        if (numeroAleatorio !== 0) {
            for(var posicao = 0; posicao < segredos.length; posicao++) {

                if(segredos[posicao] == numeroAleatorio){
                    achou = true;
                    break;
                }

            }
            if (achou == false) {
                segredos.push(numeroAleatorio);
                numero++;
            }
        }
    }
    return segredos;
}
var segredos = sorteiaNumeros(3);

console.log(segredos);

var input = document.querySelector("input");
input.focus();
 
function verifica(){
 
    var achou = false;
     
    for(var posicao = 0; posicao < segredos.length; posicao++){
        if(input.value == segredos[posicao]) {
            alert("PARABÉNS! Seu palpite estava certo! recarregue a página.");
            achou = true;
            break;
        }
    }
    if(achou == false) {
        alert("Poxa, não foi desta vez, boa sorte na próxima!");	
    }
  
    input.value = "";
    input.focus();
}
var button = document.querySelector("button");
button.onclick = verifica;