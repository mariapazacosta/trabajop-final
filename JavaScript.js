alert("Bienvenido/a a la pagina")

var edad=prompt("ingrese edad");

function validadedad(edad){

    if (edad >= 18){
        alert("puedes ingresar");
    }
    else {
        alert("no puedes ingresar a la pagina");
    }
}

validadedad(edad);

var nombre = prompt("ingresa tu nombre");
var distancia = confirm("vivis a menos de 80km de san nicolas?");

function validarDistancia (distancia){
    if(distancia == true) {
        alert(nombre + " tu envio es gratis");
    } else {
        alert(nombre + " tu envio sale 800p");
    }
}


validarDistancia(distancia);
