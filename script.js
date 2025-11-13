function validarTexto() {
    let texto = document.getElementById("texto").value;

    if (texto === "") {
        alert("El campo no puede estar vacío");
    }
    else if (texto.length < 5) {
        alert("El texto es demasiado corto");
    }
    else {
        alert("Texto correcto: " + texto);
    }

    console.log("Texto ingresado:", texto);
}

function parImpar(){

    let num = parseInt(document.getElementById("num").value);
    if (num % 2 ==0){
        alert("el numero es par")  }
    else{
        alert("es impar ")
    }
    console.log("numero: ", num)


}

function contarVocales()
{
    let texto = document.getElementById("frase").value;
    texto = texto.toLowerCase();
    let coincidencias = texto.match(/[aeiou]/g);
    let cantidad = coincidencias ? coincidencias.length : 0;
    alert("la frase contiene " + cantidad + " vocales");
    console.log("frase:", texto, "| Vocales:", cantidad);



}

function numeroAleatorio(){

    let min = parseInt(document.getElementById("min").value);
    let max = parseInt(document.getElementById("max").value);


        if (isNaN(min) || isNaN(max)) {
        alert("por favor ingresa ambos numeros");
        return;
    }

    if (min >= max) {
        alert("el numero minimo debe ser menor que el maximo");
        return;
    }

    let aleatorio = Math.floor(Math.random() * (max - min + 1)) + min;

    alert("numero aleatorio generado: " + aleatorio);

    console.log("Minimo:", min, "Maximo:", max, "→ ranodm:", aleatorio);


}

let saldo = 1000;

function cajero(){

    let retiro = parseInt(document.getElementById("retiro").value);

    if (retiro > 1000 ){

        alert("Fondos insuficientes")
    }

    else{
        saldo -= retiro;
        alert("Retiro exitoso. Saldo restante: $" + saldo);
    }




}

