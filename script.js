// Deberas realizar un semáforo utilizando JS.
// El semáforo deberá cambiar de luz de Verde a Amarilla y de Amarilla a Roja y luego de nuevo a Verde.
// Puedes mostrar la imagen del semáforo cambiando, hacer el cambio con console.log o con alert.
// Se debe respetar el orden de los colores:
// De rojo pasa a Verde.
// De amarillo puede pasar a Rojo.
// De Verde pasa a Amarillo.

function cambiarLuzSemaforo(luzActual) {
    if (luzActual === "rojo") {
      console.log("La luz actual es ROJO");
      console.log("Cambiando a VERDE");
      return "verde";
    } else if (luzActual === "amarillo") {
      console.log("La luz actual es AMARILLO");
      console.log("Cambiando a ROJO");
      return "rojo";
    } else if (luzActual === "verde") {
      console.log("La luz actual es VERDE");
      console.log("Cambiando a AMARILLO");
      return "amarillo";
    }
  }
  
  // Función principal que simula el cambio de luces del semáforo
  function simularSemaforo() {
    let luz = "rojo"; // Luz inicial del semáforo
  
    for (let i = 0; i < 6; i++) {
      luz = cambiarLuzSemaforo(luz); // Cambiar la luz del semáforo
    }
  }
  
  // Llamada a la función para simular el semáforo
  simularSemaforo();
  