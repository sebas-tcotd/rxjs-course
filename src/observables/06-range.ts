// CAPÍTULO 6: RANGE
import { asyncScheduler, of, range } from "rxjs";
// La función range crea un observable que emite una secuencia de números
// en un rango especificado. Lanza su complete cuando llega a emitir el último número

// No se tiene que interpretar tipo "Quiero que emitas los números del 1 al 100",
// sino "Quiero que emitas desde el 1 hasta las 100 posiciones siguientes"
const source$ = range(1, 100);

// Prueba de ello es que si iniciamos desde -5, si al segundo argumento lo seteamos
// en 10, el resultado sería la emisión de números desde el -5 hasta el 5
const sourceTwo$ = range(-5, 10);

// Si solo indicamos un argumento, se asumirá que inicia desde 0
const sourceThree$ = range(5);

// Por defecto, range es síncrono
console.log("Inicio");
source$.subscribe(console.log);
console.log("Final");

// Si se quiere convertirlo en asíncrono, al final se le agrega el asyncScheduler
const asyncSource$ = range(1, 5, asyncScheduler);
console.log("Inicio");
asyncSource$.subscribe(console.log);
console.log("Final");
