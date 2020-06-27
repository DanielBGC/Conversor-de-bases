function decBin() {
    var dec = document.getElementById("dec1").value;
    var binario = document.getElementById("bin");
    
    var res='';
    var resto=dec;
    var quociente=dec;
    var i;

    do{
        resto = quociente % 2
        quociente = Math.floor(quociente/2);
        res += resto;
    }
    while(quociente >= 1);

    res = res.split('').reverse().join('');

    binario.value = res;
}

function binDec() {
    var binario = document.getElementById("bin").value;
    var dec = document.getElementById("dec1");
    var erro1 = document.getElementById("erro1")
    var i = 1;

    if(binario.search(/[2-9]/) != -1)
        erro1.innerHTML = "Por favor, digite apenas 0 e 1"
    else
        erro1.innerHTML = ''
    
    var tamanho = binario.length;
    var res = 0;

    for(i = 1; i <= tamanho; i++) {
        var algarismo = binario[tamanho-i];
        res += algarismo*(2**(i-1));
    }
    dec.value = res;
}

function decOct() {
    var dec = document.getElementById("dec2").value;
    var octal = document.getElementById("oct");

    var res='';
    var resto=dec;
    var quociente=dec;
    var i;

    do{
        resto = quociente % 8;
        quociente = Math.floor(quociente/8);
        res += resto;
    }
    while(quociente >= 8);
    
    res += quociente;
    res = res.split('').reverse().join('');

    octal.value = res;
}

function octDec() {
    var octal = document.getElementById("oct").value;
    let dec = document.getElementById("dec2");
    var erro2 = document.getElementById("erro2")
    var i = 1;

    if(octal.search(/[8-9]/) != -1)
        erro2.innerHTML = "Por favor, digite apenas números entre 0 e 7"
    else
        erro2.innerHTML = ''
    
    var tamanho = octal.length;
    var res = 0;

    for(i = 1; i <= tamanho; i++) {
        var algarismo = octal[tamanho-i];
        res += algarismo*(8**(i-1));
    }
    dec.value = res;
}

function decHex() {
    let dec = document.getElementById("dec3").value;
    let hex = document.getElementById("hex");

    dec = parseInt(dec).toString(16)

    hex.value = "" + dec.toUpperCase()
    
    // let inteiro = 0;
    // let resto = 0;
    // let letra;
    // let letra2;
    // if(dec < 16) {
    //     if(dec >= 10) {
    //         letra = dec == 10 ? 'A' : 
    //                 dec == 11 ? 'B' :
    //                 dec == 12 ? 'C' :
    //                 dec == 13 ? 'D' :
    //                 dec == 14 ? 'E' : 
    //                 dec == 15 ? 'F' : '';

    //         hex.value = letra;
    //     }
    //     else 
    //         hex.value = dec;
    // }
    // if(dec >= 16 && dec <= 159) {
    //     inteiro = parseInt(dec/16);
    //     resto = dec - inteiro*16;

    //     letra = resto == 10 ? 'A' : 
    //             resto == 11 ? 'B' :
    //             resto == 12 ? 'C' :
    //             resto == 13 ? 'D' :
    //             resto == 14 ? 'E' : 
    //             resto == 15 ? 'F' : '';

    //     if(resto <= 9)
    //         hex.value =  inteiro + "" + resto; 
    //     else
    //         hex.value = inteiro + "" + letra;
    // }
    // if(dec >= 160) {
    //     inteiro = parseInt(dec/16);
    //     resto = dec - inteiro*16;

    //     letra = resto == 10 ? 'A' : 
    //             resto == 11 ? 'B' :
    //             resto == 12 ? 'C' :
    //             resto == 13 ? 'D' :
    //             resto == 14 ? 'E' : 
    //             resto == 15 ? 'F' : '';

    //     letra2 = inteiro == 10 ? 'A' : 
    //             inteiro == 11 ? 'B' :
    //             inteiro == 12 ? 'C' :
    //             inteiro == 13 ? 'D' :
    //             inteiro == 14 ? 'E' : 
    //             inteiro == 15 ? 'F' : '';


    //     if(resto <= 9)
    //         hex.value =  letra2 + "" + resto; 
    //     else
    //         hex.value = letra2 + "" + letra;
    // }
}

function hexDec() {
    let hex = document.getElementById("hex").value;
    let dec = document.getElementById("dec3");

    hex = parseInt(hex, 16)

    dec.value = "" + hex
}
