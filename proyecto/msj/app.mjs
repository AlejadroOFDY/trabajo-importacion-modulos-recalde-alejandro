//importando las funciones necesarias
import { sumaDosNumeros, restaDosNumeros, multiplicarDosNumeros } from "./funcionesNombradas.mjs";
// importando todo
import funcion from "./funcionesPorDefecto.mjs"

// funciones nombradas
console.log(sumaDosNumeros(2, 8));
console.log(restaDosNumeros(5, 5));
console.log(multiplicarDosNumeros(5, 5));
//funciones por default
console.log(funcion(5, 5));
