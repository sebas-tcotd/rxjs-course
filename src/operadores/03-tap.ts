import { range } from "rxjs";
import { tap, map } from "rxjs/operators";

const numeros$ = range(1, 5);
numeros$
  .pipe(
    tap((x) => console.log("Tap:", x)),
    map((val) => val * 10)
  )
  .subscribe((val) => console.log("subscribe:", val));
