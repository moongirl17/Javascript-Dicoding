const sayName = name => console.log(`Nama saya ${name}`);
sayName("Leia");

const sayHello = () => console.log("Selamat pagi semuanya!");
sayHello();

const multiply = (a, b) => a * b;
console.log(multiply(3, 4));

function multi(num) {
    total = num * num;
    return total;
}

let total = 9;
let number  = multi(20);

console.log(total)