// Desafío - Cachipún Contra la Máquina
// Autor: Daniel Vega - https://cianware.com

// Pregunta al usuario cuantas veces desea jugar
// Guarda la opción en la variable que será usada en el
// ciclo for
let cantidad_jugadas = parseInt(prompt("Cuantas veces desea jugar?"));

// Esta función genera la jugada en base al número aleatorio, el cuál
// se pasa como argumento a través del parámetro de la función
const jugadasMaquina = (maquina) =>{

     switch(maquina){
        case 0:
            jugada_maquina = "piedra";
            break;
        case 1:
            jugada_maquina = "papel";
            break;
        case 2:
            jugada_maquina = "tijera";
            break;
    }
}

// Esta funcion compara las jugadas del usuario contra la maquina
// y entrega el resultado para cada jugada.
// Usa la variable de la jugada del usuario y la usa como argumento para 
// compararla con la jugada de la maquina
// Esta variable puntaje corresponde al puntaje total
// se inicializa en 0, y se va incrementado o decrementando de acuerdo 
// a las jugadas dentro de la función, El puntaje total se muestra
// cada vez que termina una jugada
let puntaje = 0;
const compararJugadas = (usuario) => {

    if( usuario === jugada_maquina){
        alert("Empate");
        puntaje;
    } else if(usuario === "piedra"){
        if( jugada_maquina === "papel"){
            puntaje--;
            alert("La máquina eligió papel, tú pierdes");
        } else if( jugada_maquina === "tijera" ){
            puntaje++;
            alert("La máquina eligió tijera, tú ganas");
        }
    } else if(usuario === "papel"){
        if( jugada_maquina === "tijera"){
            puntaje--;
            alert("La máquina eligió tijera, tú pierdes");
        } else if( jugada_maquina === "piedra" ){
            puntaje++;
            alert("La máquina eligió piedra, tú ganas");
        }
    } else if(usuario === "tijera"){
        if( jugada_maquina === "piedra"){
            puntaje--;
            alert("La máquina eligió piedra, tú pierdes");
        } else if( jugada_maquina === "papel" ){
            puntaje++;
            alert("La máquina eligió papel, tú ganas");
        }
    }
    alert(`Tu puntaje total es: ${puntaje}`);
}
      
// Ciclo FOR para generar cada jugada
for(let i=0; i < cantidad_jugadas; i++){

    // Solicita la selección de la jugada al usuario, y la 
    // guarda en la variable
    let jugada_usuario = prompt("Elija piedra, papel o tijera:")

    // Genera un número aleatorio entre 0, 1 y 2, y la 
    // guarda en la variable
    let opcion_maquina = Math.floor(Math.random()*3);

    // Llamada a la función generativa de las jugadas de la máquina
    jugadasMaquina(opcion_maquina);
    
    // Llamada a la función de comparar jugadas
    compararJugadas(jugada_usuario);
}
    
// A partir del puntaje total se generar el resultado final
if(puntaje < 0){
    alert("El resultado final es: Perdiste el juego");
} else if (puntaje === 0){
    alert("El resultado final es: Empate");
} else {
    alert("El resultado final es: Ganaste el juego");
}
