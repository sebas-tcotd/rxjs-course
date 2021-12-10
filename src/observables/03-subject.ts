// CAPÍTULO 3: SUBJECT
import { Observable, Observer, Subject } from "rxjs";

const observer: Observer<number> = {
  next: (value) => console.log("Next:", value),
  error: (error) => console.error(error),
  complete: () => console.log("Complete!"),
};

const intervalo$ = new Observable<number>((subscriber) => {
  const intervalo = setInterval(() => subscriber.next(Math.random()), 1000);

  return () => {
    clearInterval(intervalo);
    console.log("Intervalo destruido");
  };
});

// Cuando se usa el console.log solo, vendría a ser una versión abreviada de
// res => console.log(res)

// Lo que ocurre acá, a primera instancia, es que estas dos suscripciones emitirán
// valores completamente aleatorios los unos de los otros al mismo tiempo. Por ejemplo:
// Subs1: 0.5896
// Subs2: 0.1243

/*const subscription1 = intervalo$.subscribe((random) =>
  console.log("Subs1:", random)
);
const subscription2 = intervalo$.subscribe((random) =>
  console.log("Subs2:", random)
);*/

// ¿Qué pasaría si quisiéramos que las dos suscripciones (y cualquier otra subscripción)
// reciban el mismo valor cada vez que esta se emite? Es ahí donde entra
// la cuestión del Subject.
/**
 * Carácterísticas del Subject:
 *
 * 1. Casteo múltimple: Muchas suscripciones estarán sujetas a este mismo observable especial
 * y todas esas suscripciones recibirán el mismo valor.
 *
 * 2. También es un observador (Observer): podemos mandar al Subject como
 * si fuera un observador dentro de la subscripción.
 *
 * 3. next, err & complete: Podemos incluir los parámetros del observador dentro
 * del Subject.
 */
const subject$ = new Subject();

// Aquí aplicamos la característica #2 del Subject.
// Esto hace que el subject observe a intervalo$ y sea configurado
// para que el subject envíe los mismos valores a sus subscripciones
// todas por igual.
const subscriptionWithSubject = intervalo$.subscribe(subject$);

const subscription1 = subject$.subscribe((random) =>
  console.log("Subs1:", random)
);
const subscription2 = subject$.subscribe((random) =>
  console.log("Subs2:", random)
);

setTimeout(() => {
  // Aquí también aplicamos la característica #2 del subject
  subject$.next(10); // Aquí estamos produciendo la data fuera del observable original (intervalo$)
  subject$.complete(); // Aquí hacemos que las sucripciones suscritas al subject activen su complete.
  // A pesar de eso, no nos hemos desuscrito del observable por completo ya que aún hay una instancia corriendo
  // (línea 55)
  subscriptionWithSubject.unsubscribe(); // Aquí recién nos desuscribimos completamente
}, 3000);

// Cuando la data es producida por el observable en sí mismo, es considerado un "Cold Observable";
// pero cuando la data es producida FUERA del observable es llamado "Hot Observable"
