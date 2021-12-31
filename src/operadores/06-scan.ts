import { from } from "rxjs";
import { reduce, scan, map } from "rxjs/operators";

const numeros = [1, 2, 3, 4, 5];

const totalAcumulador = (acc, cur) => acc + cur;

from(numeros).pipe(reduce(totalAcumulador, 0)).subscribe(console.log);

from(numeros).pipe(scan(totalAcumulador, 0)).subscribe(console.log);

// Similar a redux
interface Usuario {
  id?: string;
  autenticado?: boolean;
  token?: string;
  edad?: number;
}
const user: Usuario[] = [
  { id: "tcotd", autenticado: false, token: null },
  { id: "tcotd", autenticado: true, token: "ABC" },
  { id: "tcotd", autenticado: true, token: "ABC123" },
];

const state$ = from(user).pipe(
  scan<Usuario, Usuario>(
    (acc, curr) => {
      return {
        ...acc,
        ...curr,
      };
    },
    { edad: 23 }
  )
);

const id$ = state$.pipe(map((state) => state.id));

id$.subscribe(console.log);
