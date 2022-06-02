function pulaLinha() {
    document.write("<br><hr><br>");
}

function mostra(frase) {
    document.write("<big>" + frase + "</big>");
    pulaLinha();
}

var aPartir = 30;
while(aPartir <= 40) {
    if (aPartir == 33) {
    aPartir = aPartir + 1;
    }
    
    if (aPartir == 37) {
    aPartir = aPartir + 1;
    }
    
    else {
    mostra (aPartir);
    aPartir = aPartir + 1;
    }
} 
mostra ("Fim :) ");