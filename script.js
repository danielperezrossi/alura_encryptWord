/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
No se permite acentuación de palabras 
No se permiten palabras en mayúsculas
*/

var encryptButton = document.querySelector("#btn-encriptar");

encryptButton.addEventListener("click", (event) => {
    event.preventDefault();

    var messageToEncrypt = document.getElementById("input-texto").value;
    var messageToEncryptArray = Array.from(messageToEncrypt.toLowerCase());

    for(var i = 0; i < messageToEncryptArray.length; i++){
        switch(messageToEncryptArray[i]){
            case 'e':
                messageToEncryptArray[i] = 'enter';
                break;
            case 'i':
                messageToEncryptArray[i] = 'imes';
                break;
            case 'a':
                messageToEncryptArray[i] = 'ai';
                break;
            case 'o':
                messageToEncryptArray[i] = 'ober';
                break;
            case 'u':
                messageToEncryptArray[i] = 'ufat';                
                break;
        }
    }
    document.getElementById('msg').value = messageToEncryptArray.join("");
})

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/

var decryptButton = document.querySelector("#btn-desencriptar");

decryptButton.addEventListener("click", (event) => {
    event.preventDefault();

    var messageToDecrypt = document.getElementById("input-texto").value;
    var messageToDecryptLower = messageToDecrypt.toLowerCase();  
    
    var messageToDecryptLowerEnter = messageToDecryptLower.replaceAll('enter','e');
    var messageToDecryptLowerImes = messageToDecryptLowerEnter.replaceAll('imes','i');
    var messageToDecryptLowerAi = messageToDecryptLowerImes.replaceAll('ai','a');
    var messageToDecryptLowerOber = messageToDecryptLowerAi.replaceAll('ober','o');
    var messageToDecryptLowerUfat = messageToDecryptLowerOber.replaceAll('ufat','u');
    var messageDecrypted = messageToDecryptLowerUfat;
    
    document.getElementById('msg').value = messageDecrypted;
})

// Crear un botón para llamar a la función que copia el texto encriptado o desencriptado

var copyButton = document.querySelector("#btn-copy");

copyButton.addEventListener("click", (event) => {
    event.preventDefault;  

    var textToCopy = document.getElementById("msg");

    navigator.clipboard.writeText(textToCopy.value);

})

// Crear un botón para llamar a la función que pegue el texto encriptado o desencriptado

var pasteButton = document.querySelector("#btn-paste");

pasteButton.addEventListener("click", (event) => {
    event.preventDefault;  

    getTextToPaste();

    async function getTextToPaste(){
        var textToPaste = await Promise.resolve(navigator.clipboard.readText());                
        document.getElementById("input-texto").value = textToPaste;
    }
    
})