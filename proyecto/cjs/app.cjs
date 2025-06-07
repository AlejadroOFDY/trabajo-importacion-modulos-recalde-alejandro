// importando solo las funciones necesarias
const { sumaDosNumeros, restaDosNumeros} = require("./funcionesNombradas.cjs");

//importando todo (por defecto) pero no es recomendable si es hay demasiados modulos
const funciones = require("./funcionesPorDefecto.cjs");

// usando las funciones nombradas
console.log(sumaDosNumeros(2, 5));
console.log(restaDosNumeros(5, 3));
// usando las funciones por defecto
console.log(funciones.multiplicarDosNumeros(4, 4));
console.log(funciones.dividirDosNumeros(16, 4));
