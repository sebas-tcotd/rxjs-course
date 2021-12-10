// CAPÍTULO 1: OBSERVABLES

import { Observable, Observer } from "rxjs";

// Observador: es quien estará al tanto de las cosas que emita el Observable.
// Se tiene que especificar qué tipos de datos fluirán dentro del observador
// Los parámetros que contiene el observador son los siguientes:
// * next: Valor que el observable emite
// * error: Error que pueda suceder dentro del observable
// * complete: Valor (u operaciones) que suceden cuando el observable emita su complete()
const observer: Observer<string> = {
  next: (value) => console.log("Next:", value),
  error: (error) => console.error(error),
  complete: () => console.log("Complete!"),
};

// Forma deprecada de crear un Observable
// const obs$ = Observable.create()

// Las variables que son observables tienen la convención de tener
// el signo de dólar al final del nombre: $.

// Creación de un observable
// El parámetro subscriber es el objeto el cual emitirá
// (y/o fluirán) los datos dentro del Observable
const obs$ = new Observable<string>((subscriber) => {
  subscriber.next("Hola");
  subscriber.next("Mundo");
  subscriber.complete();
});

// ---

// Suscripciones: es como gente que va a estar pendiente de las emisiones que emita el observable
// Se realiza una suscripción anónima, incluyendo de manera manual
// los parámetros característicos de la suscripción, en orden:
// * Valor que el observable emite (next())
// * Error que pueda suceder dentro del observable
// * Valor (u operaciones) que suceden cuando el observable emita su complete()
/*obs$.subscribe(
  (valor) => console.log(valor),
  (error) => console.warn(error),
  () => console.log("Complete")
);*/

// De esta manera, también hacemos una suscripción anónima,
// solo que incluimos la configuración del observador lista
obs$.subscribe(observer);
