//Comparaciones

//Igualdad

let a = 5;
console.log(typeof a)
let b = "5";
console.log(typeof b)

//== solo compara el valor
//=== compara el valor y el tipo

if (a== b) {
    console.log("a es igual a b - debil")
}

if (a === b) {
    console.log("a es igual a b - Fuerte")
}

let c = 4;
let d = "4";

if (c != d) {
    console.log("c es diferente a d - Devil")
}

if (c !== d) {
    console.log("c es diferente a d - Fuertemete")
}

//Comparacioes mayor que y meor que

let max = 10;
let min = 5;

if(max > min) {
    console.log("max es mayor que min")
}

if (max >= 10) {
    console.log("max es mayor o igual que min")
}

if (min < max) {
    console.log("min es menor que max")
}

if (min <= max) {
    console.log("min es menor o igual que max")
}