import { interval, reduce, take } from "rxjs";

const numbers = [1, 2, 3, 4, 5];

const totalReducer = (acumulador: number, valorActual: number) =>
  acumulador + valorActual;

const total = numbers.reduce(totalReducer, 0);

console.log(total);

interval(1000)
  .pipe(take(5), reduce(totalReducer))
  .subscribe({
    next: (val) => console.log(val),
    complete: () => console.log("Complete!"),
  });
