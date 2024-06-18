let nombre = prompt("Bienvenido a la calculadora de masa corporal digite su nombre completo: ");
let altura = prompt("Digite su altura en m");
let peso = prompt("Digite su peso en kg");

let formula = peso / (altura * altura);
document.write("Hola ", nombre, " tu indice de masa corporal es: ", formula.toFixed(2))
