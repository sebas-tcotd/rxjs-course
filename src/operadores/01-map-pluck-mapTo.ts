import { fromEvent, range } from "rxjs";
import { map, mapTo, pluck } from "rxjs/operators";

/*range(1, 5)
  .pipe(map<number, string>((valor) => (valor * 10).toString()))
  .subscribe(console.log);*/

const keyUp$ = fromEvent<KeyboardEvent>(document, "keyup");

const keyupCode$ = keyUp$.pipe(map((event) => event.code));
const keyupPluck$ = keyUp$.pipe(pluck("target", "baseURI"));
const keyupMapTo$ = keyUp$.pipe(mapTo("Tecla presionada"));

keyupCode$.subscribe((val) => console.log("map:", val));
keyupPluck$.subscribe((val) => console.log("pluck:", val));
keyupMapTo$.subscribe((val) => console.log("MapTo:", val));
