var segredo = Math.round(Math.random() * 10);
var input = document.querySelector("input");
input.focus();
	
function verifica(){
	if(input.value == segredo) {
		alert("Parabéns, você acertou!, recarregue a página.");
	} else {
		alert("Poxa, não foi desta vez, boa sorte na próxima!");
	}
		
	input.value = "";
	input.focus();
}
	var button = document.querySelector("button");
	button.onclick = verifica;