// Task 2: Data Types Check
let name = "Md  Riazul Islam";
let age = 35;
let isStudent = true;
let district = "Noakhali";
let salary = null;
let phone = "01727405822";

console.log(typeof name); // string
console.log(typeof age); // number
console.log(typeof isStudent); // boolean
console.log(typeof district); // string

console.log(typeof salary); // object (type of check করলে null এর type, object  দেখাবে। এটা js এর একটা legacy bug. এটা solve না করার কারন হল, solve করলে পুরাতন কোডে error দেখাবে।

console.log(typeof phone); // string
