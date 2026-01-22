let a = prompt("Digite o valor de A: ");
let b = prompt("Digite o valor de B: ");
let c = prompt("Digite o valor de C: ");

let delta = b**2 - 4 * a * c;

if (delta > 0) {
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);
    console.log(`As raízes são: x1 = ${x1} e x2 = ${x2}`);
} else if (delta == 0) {
    let x = -b / (2 * a);
    console.log(`Raiz dupla: x = ${x}`);
} else {
    console.log("A equação não possui raízes reais");
}
