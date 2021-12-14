// CAPÍTULO 7: INTERVAL & TIMER
import { interval, timer } from "rxjs";

// Lo que hace interval() es crear un observable que emita valores
// cada periodo de tiempo, por defecto, hasta el infinito.

const observer = {
  next: (valor) => console.log("Next:", valor),
  error: () => null,
  complete: () => console.log("Observable completado."),
};

// Aquí indicamos que cada 1000 milisengundos, el observable emita un valor -por defecto- numérico
// y comenzando de 0.
const interval$ = interval(1000);

// Por defecto, interval es asíncrono.
console.log("Inicio");
// interval$.subscribe(observer);
console.log("Final");

//---

// Aquí indicamos que el observable emita un valor (por defecto es 0) y se complete a los 2000 milisegundos.
const timer$ = timer(2000);

// Por defecto, timer en asíncrono
console.log("Inicio");
timer$.subscribe(observer);
console.log("Final");

// Aquí decimos que, después de 2000 milisegundos, se emitan valores cada 1000 milisegundos
const otherTimer$ = timer(2000, 1000);

// Y aquí podemos especificar que, de acuerdo a cierto tiempo o fecha, sea lanzado el valor
const hoyEn5 = new Date();
hoyEn5.setSeconds(hoyEn5.getSeconds() + 5000); // De aquí a 5 segundos
const dateTimer$ = timer(hoyEn5);
