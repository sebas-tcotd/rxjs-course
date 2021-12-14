// CAPÍTULO 8: ASYNCH SCHEDULE
import { asyncScheduler } from "rxjs";

// El asyncScheduler crea una suscripción.
// Es como si pudiéramos manejar el setTimeout y el setInterval
// en una sola función.

const saludar = () => console.log("Hola Mundo");
// asyncScheduler.schedule(saludar, 2000);

// Lo que hacemos acá es, después de 2000 ms, invocar la referencia de la función
// segundoSaludo con el estado de "Sebastian"
const segundoSaludo = (nombre) => console.log(`Hola ${nombre}`);
asyncScheduler.schedule(segundoSaludo, 2000, "Sebastian"); // El estado 'Sebastian' es pasado al argumento de segundoSaludo

// Para hacer la funcionalidad similar a la de setInterval, se agrega la misma
// sintaxis, solo que la función NO puede ser un arrow function, sino la
// convencional clásica. Además, dentro de la función se tiene que utilizar
// el this.schedule() para modificar el estado cada intervalo de tiempo.
const subscription = asyncScheduler.schedule(
  function (state) {
    console.log("State:", state); // Se imprime el estado
    this.schedule(state + 1, 1000); // Se hace que cada 1000 ms el estado aumente en 1
  },
  3000, // El asyncScheduler se activará después de 3000 ms
  0 // El estado inicial es cero
);

// Se puede detener al interval haciendo un setTimeout y desuscribiéndose
// después de cierto tiempo transcurrido. Lo bueno es que cuando se desuscribe,
// se realiza un complete, por lo que no se vuelven a emitir datos y, por ende
// se evita la fuga de memoria.

/*setTimeout(() => {
  subscription.unsubscribe();
}, 6000);*/

// No obstante, se puede reemplazar el setTimeout con un asyncScheduler ya que,
// como hemos visto en su primera forma, es posible hacer ese comportamiento.
asyncScheduler.schedule(() => subscription.unsubscribe(), 6000);
