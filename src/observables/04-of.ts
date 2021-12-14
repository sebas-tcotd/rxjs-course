// CAPÍTULO 4: OF

import { of } from "rxjs";

// Lo que hace la función of es crear un observable en base a los argumentos que se le mande.
// Es decir, si le mandamos tres números 1, 2, 3 al of, entonces este creará un observable
// que en sus next mandará el 1, 2 y 3, mandando su complete cuando llegue a 3.
const obs$ = of(1, 2, 3, 4, 5, 6);

// El of, por defecto, es síncrono; es decir, que el programa no avanzará hasta que termine
// de ejecutarse el of
console.log("Comienza el of");

obs$.subscribe({
  next: (next) => console.log("Next:", next),
  error: () => null,
  complete: () => console.log("Terminada la secuencia"),
});

console.log("Termina el of");
