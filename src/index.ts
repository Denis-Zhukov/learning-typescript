let a = 1 + 2;
let b = a + 3;

type Basket = { apple: number, banana: number };
let c: Basket = {
    apple: a, banana: b,
};

let d: number = c.apple * 4;

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);