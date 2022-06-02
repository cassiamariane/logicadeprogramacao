function pulaLinha() {
	
    document.write("<br><br>");
}
    
function mostra(frase) {

    document.write(frase);
    pulaLinha();
}

function calculaImc(peso, altura) {

    var imc = Math.round(peso / (altura * altura));
    return imc;
}

//Alternativa:
//var pesoFlavio = 73;
//var alturaFlavio = 1.71;

//var imcFlavio = calculaImc(pesoFlavio, alturaFlavio);

//mostra("O imc de Flávio é " + imcFlavio);

var nomeInformado = prompt("Informe seu nome");
var pesoInformado = prompt(nomeInformado + ", informe seu peso");
var alturaInformada = prompt(nomeInformado + ", informe sua altura");
var imcTotal = calculaImc(pesoInformado, alturaInformada)
mostra("O imc de " + nomeInformado + " é " + imcTotal);

if(imcTotal > 35){
    mostra("O seu IMC é de " + imcTotal + ", portanto, você está <strong>acima</strong> da média considerada saudável OMS.");
}
if(imcTotal < 18.5){
    mostra("O seu IMC é de " + imcTotal + ", portanto, você está <strong>abaixo</strong> da média considerada saudável OMS.");
}

//Alternativa:
//if(imcTotal >= 18.5){
    //if(imcTotal<=35){
        //mostra("O seu IMC é de " + imcTotal + ", portanto, você está <strong>na média</strong> considerada saudável pela OMS.");
    //}
//}
if(imcTotal >= 18.5 && imcTotal<=35){
    mostra("O seu IMC é de " + imcTotal + ", portanto, você está <strong>na média</strong> considerada saudável pela OMS.");
}