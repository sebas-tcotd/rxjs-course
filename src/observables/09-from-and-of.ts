//  CAPÍTULO 9: EJERCICIOS CON OF Y FROM
import { of, from } from "rxjs";

// Como ya se sabe, of crea un observable tomando argumentos y haciéndolos
// una secuencia.
// En cambio, from toma como argumento ya sea un array, Promise, Iterable, Observable y otros

const observer = {
  next: (valor) => console.log("Next:", valor),
  error: () => null,
  complete: () => console.log("¡Observable completado!"),
};

// El observable emite cada elemento del array
// const source$ = from([1, 2, 3, 4, 5]);

// El observable emite solo el array
// const source$ = of([1, 2, 3, 4, 5]);

// El observable emite cada letra del string
// const source$ = from("Sebastian");

// El from también permite tomar un Promise y hacerlo observable
const source$ = from(fetch("https://api.github.com/users/klerith"));
source$.subscribe(async (res) => {
  const dataResponse = await res.json();
  console.log(dataResponse);
});

// source$.subscribe(observer);
