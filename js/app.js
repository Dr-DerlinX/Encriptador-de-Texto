    
    //Funcion para verificar que el texto solo contenga minusculas...........
    function validarTexto(texto) {
        return /^[a-z\s]+$/.test(texto);
    }
    //.........................................................................

    //Fucncion para encriptar.................................................
    function encriptar() {
        var textoOriginal = document.getElementById('inputText').value;

        //Validamos que e texto este correcto.../De lo contradio mandamos un laert y limpiamos el textArea....
        if (!validarTexto(textoOriginal)) {
        alert('El texto debe contener solo letras minúsculas y espacios.');
        return;
        }   

        var textoEncriptado = '';

        //Si es correct pasamos a encriptar y mostra el texto....
        for (var i = 0; i < textoOriginal.length; i++) {
        var charCode = textoOriginal.charCodeAt(i);
        
        if (charCode === 32) {
            textoEncriptado += ' ';
        } else {
            textoEncriptado += String.fromCharCode(charCode + 1); 
        }
        }

        document.getElementById('outputText').value = textoEncriptado;
    }
    //.........................................................................

    //Fucncion para Desencriptar.................................................
    function desencriptar() {
        var textoEncriptado = document.getElementById('inputText').value;

        var textoDesencriptado = '';

        
        for (var i = 0; i < textoEncriptado.length; i++) {
        var charCode = textoEncriptado.charCodeAt(i);
        
        
        if (charCode === 32) {
            textoDesencriptado += ' ';
        } else {
            textoDesencriptado += String.fromCharCode(charCode - 1);
        }
        }

        document.getElementById('outputText').value = textoDesencriptado;
  }
  
  //Fucncion para Copiar.................................................
  function copiar() {
    var textoEncriptado = document.getElementById('outputText').value;
    
    var tempTextArea = document.createElement('textarea');
    tempTextArea.value = textoEncriptado;
    document.body.appendChild(tempTextArea);

    tempTextArea.select();
    document.execCommand('copy');

    document.body.removeChild(tempTextArea);
  }

