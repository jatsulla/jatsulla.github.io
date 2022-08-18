function ocultarImagen() {
    var imagen = document.getElementById('imagen-encriptado');
    var textoFinal = document.getElementById('texto-final');
    imagen.style.display = 'none';
    textoFinal.style.display = 'block';
}

function encriptarTexto() {
    var txtOriginal = document.getElementById('entrada-texto');
    var txtFinal = document.getElementById('encriptador');

    var texto = txtOriginal.value;

    ocultarImagen();
    txtFinal.value = texto.replace(/e/gi,"enter").replace(/i/gi,"imes").replace(/a/gi,"ai").replace(/o/gi,"ober").replace(/u/gi,"ufat");
    txtOriginal.value = "";
}

function desencriptarTexto() {
    var txtOriginal = document.getElementById('entrada-texto');
    var txtFinal = document.getElementById('encriptador');

    var texto = txtOriginal.value;

    ocultarImagen();
    txtFinal.value = texto.replace(/enter/gi,"e").replace(/imes/gi,"i").replace(/ai/gi,"a").replace(/ober/gi,"o").replace(/ufat/gi,"u");
    txtOriginal.value = "";
}

function copy() {
    var copyText = document.getElementById('encriptador');
    copyText.select();
    document.execCommand("copy");
  }