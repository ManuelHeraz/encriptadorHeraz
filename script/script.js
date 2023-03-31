const textarea = document.querySelector(".textarea");
const mensaje = document.querySelector(".mensaje");

function btnEncriptar(){
    const textoEncriptado = encriptar(textarea.value);
    mensaje.innerHTML = textoEncriptado;
    textarea.value = "";
    mensaje.style.backgroundImage = "none";
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u", "ufar"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replace(new RegExp(matrizCodigo[i][0], "g"), matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(textarea.value);
    mensaje.innerHTML = textoDesencriptado;
    textarea.value = "";
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u", "ufar"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replace(new RegExp(matrizCodigo[i][1], "g"), matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}

function copiarMensaje() {
    const mensaje = document.querySelector(".mensaje");
    const texto = mensaje.value;
    navigator.clipboard.writeText(texto)
      .then(() => {
        alert("Mensaje copiado al portapapeles!");
      })
      .catch(err => {
        console.error('Error al copiar el texto: ', err);
      });
  }
  