function pulaLinha(){
	document.write("<br>");
}

function mostra(frase){
	document.write(frase);
	pulaLinha();
}

var nomeDoTime = prompt("Qual o nome do seu time:");
var vitorias = parseInt(prompt("Entre com o número de vitórias."));
var empates = parseInt(prompt("Entre com o número de empates."));

var pontos = vitorias * 3 + empates;

mostra("O " + nomeDoTime + " tem " + pontos + " pontos!");

if(pontos > 28){
	mostra("O " + nomeDoTime + " tem " + pontos + " pontos, então, obteve um desempenho <strong>melhor</strong> que o do ano anterior.");
}
if(pontos < 28){
	mostra("O " + nomeDoTime + " tem " + pontos + " pontos, então, obteve um desempenho <strong>pior</strong> que o do ano anterior.");
}
if(pontos == 28){
	mostra("O " + nomeDoTime + " tem " + pontos + " pontos, então, obteve um desempenho <strong>igual</strong> ao do ano anterior.");
}