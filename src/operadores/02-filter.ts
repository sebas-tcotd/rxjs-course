import { from, fromEvent, range } from "rxjs";
import { filter, map } from "rxjs/operators";

/*range(1, 10)
  .pipe(filter((value) => value % 2 === 1))
  .subscribe(console.log);
*/

range(1, 5)
  .pipe(
    filter((value, i) => {
      console.log("Índex:", i);

      return value % 2 === 1;
    })
  )
  .subscribe(console.log);

interface Personaje {
  tipo: string;
  nombre: string;
}

const personajes: Personaje[] = [
  { tipo: "heroe", nombre: "batman" },
  { tipo: "heroe", nombre: "robin" },
  { tipo: "villano", nombre: "joker" },
];

const dc$ = from(personajes).pipe(filter((item) => item.tipo === "villano"));
dc$.subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, "keyup").pipe(
  map<KeyboardEvent, string>((event) => event.code),
  filter((key) => key === "Enter" || key === "NumpadEnter")
);
keyup$.subscribe(console.log);
