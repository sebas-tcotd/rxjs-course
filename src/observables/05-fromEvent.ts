//CAPÍTULO 5: FROMEVENT

import { fromEvent, Observer } from "rxjs";

// La función fromEvent nos permitirá crear observables en base a un EventTarget,
// es decir, de cierto tipo de eventos que provienen del EventTarget del DOM.

// Por ejemplo, aquí el observable sourceOne$ emitirá valores de eventos que se originen
// en todo el DOM (document) cuando se haga click
const sourceOne$ = fromEvent<PointerEvent>(document, "click");

// Y aquí, el observable sourceTwo$ emitirá valores de eventos que se originen
// en todo el DOM (document) cuando se haga un keyUp; es decir, cuando se deje de
// presionar una tecla
const sourceTwo$ = fromEvent<KeyboardEvent>(document, "keyup");

const observer = {
  next: (valor) => console.log("Next:", valor),
  error: () => null,
  complete: () => console.log("Observación completada"),
};

sourceOne$.subscribe(({ x, y }) => console.log(`(${x}, ${y})`));
sourceTwo$.subscribe((evento) => console.log(evento.key));
