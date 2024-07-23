let numeroSecreto=0;
let intentos=0;
let listaNumerosSorteados=[];
let numeroMaximo=10;
condicionesIniciales();

function GenerarNumeroSecreto(){
    let numeroGenerado= Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado); //muestran el numero generado
    console.log(listaNumerosSorteados); //muestra la lista con el numero aleatorio que se vayan generando 
    //si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
    } else{
    if(listaNumerosSorteados.includes(numeroGenerado)){
        return GenerarNumeroSecreto();
    }else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
       }
}
function asignarTextoElemento(elemento,texto){ //el primer parametro es lo que está en el html
    let elementoHTML= document.querySelector(elemento) //el segundo parametro es lo que se pondra
    elementoHTML.innerHTML= texto;
    return;
}
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);   
    if(intentos===0 && numeroDeUsuario !==numeroSecreto){
        asignarTextoElemento('p','Lo siento se terminaron los intentos');
        document.getElementById("intentar").setAttribute("disabled",true);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }else{
    if(numeroDeUsuario==numeroSecreto){ //aqui acertamos
        asignarTextoElemento('p',`Muy bien acertaste`);
        document.getElementById("reiniciar").removeAttribute("disabled");
        document.getElementById("intentar").setAttribute("disabled",true);
    }else{ //no acertamos aqui
       
        if(numeroDeUsuario>numeroSecreto){
            asignarTextoElemento("p",`El numero es menor, tienes ${intentos} ${intentos==1 ? "intento" : "intentos"}`);
           
        }else{
            asignarTextoElemento("p",`El numero es mayor, tienes ${intentos} ${intentos==1 ? "intento" : "intentos"}`);
            
        }
        intentos--;
        limpiarCaja();
    }
    return;}
}
function limpiarCaja(){
    let valorCaja = document.querySelector('#valorUsuario').value = "";
}
function condicionesIniciales(){
    intentos=2;
    document.getElementById("intentar").removeAttribute("disabled");
    asignarTextoElemento('h1','Juego del numero secreto');
    asignarTextoElemento('p',`Indica un numero del 1 al 10. Tienes ${intentos+1} intentos`);
    numeroSecreto=GenerarNumeroSecreto();
}
function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //iniciar condiciones
    condicionesIniciales();
    //deshabilitar boton
    document.querySelector('#reiniciar').setAttribute('disabled',true);
}
