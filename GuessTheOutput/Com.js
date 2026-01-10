// 🧠 1️⃣ Type Coercion Trap
// console.log(1 + "2" + 3);
// console.log(1 - "2" + 3);


// ✅ Output:

// 123
// 2


// ✔ + concatenates when a string is involved
// ✔ - forces numeric conversion

// 🧠 2️⃣ Boolean Coercion Confusion
// console.log(false == 0);
// console.log(false === 0);


// ✅ Output:

// true
// false


// ✔ == does type coercion
// ✔ === checks value + type

// 🧠 3️⃣ async / await Output Order
// async function test() {
//  console.log("A");
//  await Promise.resolve();
//  console.log("B");
// }
// console.log("C");
// test();
// console.log("D");


// ✅ Output:

// C
// A
// D
// B


// ✔ await pauses function, rest goes to microtask queue

// 🧠 4️⃣ Object Key Ordering (Tricky)
// const obj = {
//  2: "b",
//  1: "a",
//  name: "js"
// };

// console.log(Object.keys(obj));


// ✅ Output:

// ["1", "2", "name"]


// ✔ Numeric keys are sorted first

// 🧠 5️⃣ delete Operator Trap
// let x = 10;
// console.log(delete x);


// ✅ Output:

// false


// ✔ delete works on object properties, not variables

// 🧠 6️⃣ Function Hoisting Priority
// foo();
// function foo() {
//  console.log("A");
// }
// var foo = function() {
//  console.log("B");
// };


// ✅ Output:

// A


// ✔ Function declarations are hoisted before variable assignments

// 🧠 7️⃣ Reference vs Value Confusion
// let a = { x: 1 };
// let b = a;
// a = { x: 2 };

// console.log(b.x);


// ✅ Output:

// 1


// ✔ Reassignment breaks reference

// 🎯 What Interviewers Are Checking

// ✔ Type coercion understanding
// ✔ Event loop + microtasks
// ✔ Hoisting rules
// ✔ Object internals
// ✔ Reference behavior
// ✔ Async execution flow