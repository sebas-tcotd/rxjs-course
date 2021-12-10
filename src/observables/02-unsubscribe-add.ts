// CAPÍTULO 2: SUSCRIPCIONES

import { Observable, Observer } from "rxjs";

const observer: Observer<number> = {
  next: (value) => console.log("Next:", value),
  error: (error) => console.error(error),
  complete: () => console.log("Complete!"),
};

const intervalo$ = new Observable<number>((subscriber) => {
  // crear contador,1,2,3,4,5,...
  let counter = 0;

  const intervalo = setInterval(() => {
    counter++;
    subscriber.next(counter);
  }, 1000);

  setTimeout(() => {
    // Aquí, cuando se ejecute el código pertinenete al complete en el observador,
    // irá al return para ejecutar el término del observable
    subscriber.complete();
  }, 2500);

  // En el return se pondrá el procedimiento que se quiere que se ejecute cuando
  // se hace una desuscripción.
  return () => {
    clearInterval(intervalo);
    console.log("Observable terminado!");
  };
});

// Hacemos una suscripción del observable intervalo y la guardamos
// en la variable 'suscripcion'
const subscripcionUno = intervalo$.subscribe(observer);

// Nos creamos otras dos suscripciones y las almacenamos en sus respectivas variables
const subscripcionDos = intervalo$.subscribe(observer);
const subscripcionTres = intervalo$.subscribe(observer);

// Lo hecho líneas arriba mostraría, cada segundo, la emisión de un valor tres veces repetidas.
// Esto ocurre porque cada vez que se subscribe a un observable, este recién emitirá los datos
// que tenga que emitir.

// Una manera para encadenar los observables sería invocando la función add en el primer observable.
// Eso haría que, de esa manera, cuando se llame la desuscripción de la primera suscripción,
// llamará a la función del return del observable.
// Esto permite que no sea necesario escribir tres veces una desuscripción para cada suscripción,
// solo haciendo una, que sería la de la primera suscripción.
subscripcionUno.add(subscripcionDos);
subscripcionUno.add(subscripcionTres);

// A los 3 segundos, se cancelarán la suscripciones, mas no la emisión de intervalos.
// Dicho de otra forma, aun cuando nosotros nos desuscribamos del observable, este en su
// interior aún seguirá emitiendo valores; siempre y cuando en el observable no se haya configurado
// cuándo ha de parar de emitir.
setTimeout(() => {
  subscripcionUno.unsubscribe();
  //   subscripcionDos.unsubscribe();
  //   subscripcionTres.unsubscribe();
}, 3000);
