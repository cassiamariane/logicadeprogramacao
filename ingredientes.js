var ingredientes = [];

var quantidade = parseInt(prompt("Quantos ingredientes você vai adicionar?"));

var contador = 1;

while( contador <= quantidade) {

    var ingrediente = prompt("Informe o ingrediente " + contador);
	var jaTem = false;
	for( var posicao = 0; posicao < ingredientes.length; posicao++) {

        if( ingredientes[posicao] == ingrediente) {

            existe = true;
            break;
        }
    }
	if( jaTem == false) {

        ingredientes.push(ingrediente);
        contador++;
    }
}
    console.log(ingredientes);