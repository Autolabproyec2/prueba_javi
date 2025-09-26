while (seguir) {
    let seguir = true;
    let menu = parseInt(prompt("Ingrese 1 para ver las instrucciones, 2 para jugar o 3 para salir:"));
    switch (menu) {
        case 1:
            alert("Jugador 1 pone un numero secreto entre 0 y 99\nJugador 2 tiene 10 intentos para adivinarlo, solo con\nlas pistas de si es mayor o menor.");
            break;
        case 2:
            alert("¡A jugar!");
            let numero_secreto = parseInt(prompt("Jugador 1, ingrese un número secreto entre 0 y 99:"));
            break;
        case 3:
            alert("¡Hasta luego!");
            seguir = false;
            break;  
        default:
            alert("Opción no válida. Intente de nuevo.");
            break;
    }

}

