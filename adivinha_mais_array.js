var segredos = [5,7,10,2];
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