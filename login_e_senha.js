var loginCadastrado = "alura";
    var senhaCadastrada = "alura321";
	
	var maximodeTentativas = 3;
	var tentativaAtual = 1;
	 
	while(tentativaAtual <= maximodeTentativas){
		var loginInformado = prompt("Informe seu login");
		var senhaInformada = prompt("Informe sua senha");

		if( loginCadastrado == loginInformado && senhaCadastrada == senhaInformada ) {
			alert("Bem-vindo ao sistema " + loginInformado);
			tentativaAtual=maximodeTentativas;
		} else {

             if (tentativaAtual < maximodeTentativas) {
                alert("Login inválido. Tente novamente");
            } if (tentativaAtual == maximodeTentativas) {
                alert("Número permitido de tentativas ultrapassado!");
            }
        }
		
        tentativaAtual = tentativaAtual +1  
    }