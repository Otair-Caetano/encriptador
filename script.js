const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");
const bonecoAlura = document.getElementById("bonecoAlura");
const btnCopiar = document.getElementById("btn-copiar");



function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = "";
    bonecoAlura.style.display = "none"; /*Esconde a imagem*/
    btnCopiar.style.display = "block";
}


function encriptar (stringEncriptada) {

    let matrizCodigo = [["e" , "enter"],["i" , "imes"],["a" , "ai"],["o" , "ober"],["u" , "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    } 

    return stringEncriptada;
}

function btnDesencriptar() {
    const textoEncriptado = desencriptar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = "";
}


function desencriptar (stringDesencriptada) {

    let matrizCodigo = [["e" , "enter"],["i" , "imes"],["a" , "ai"],["o" , "ober"],["u" , "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    } 

    return stringDesencriptada;
}

document.getElementById('btn-copiar').addEventListener('click', function() {
    // Obter o texto do textarea
    var mensagem = document.getElementById('mensagem').value; 

    // Usar a API Clipboard
    navigator.clipboard.writeText(mensagem).then(function() {
        alert('Texto copiado!');

          // Colocar o texto copiado no campo "Digite aqui o seu texto"
        document.getElementById('text-area').value = mensagem;
    }).catch(function(err) {
        console.error('Erro ao copiar: ', err);
    });
});
