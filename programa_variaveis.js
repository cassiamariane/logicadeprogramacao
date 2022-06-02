var ano = 2021;

document.write("Flávio tem " + (ano - 1977) + " anos");
document.write("<br>");
document.write("Joaquim tem " + (ano - 1996) + " anos");
document.write("<br>");
ano = 2022;
document.write("Barney tem " + (ano - 1976) + " anos");
document.write("<br>");
	
var idadeFlavio = 44;
var idadeJoaquim = 25;
var idadeBarney = 45;
var media = (idadeFlavio + idadeJoaquim + idadeBarney)/3;

document.write("A média das idades é " + Math.round(media));
	
var nome = "Flávio";
	
document.write("<br> A idade de " + nome + " é " + idadeFlavio )