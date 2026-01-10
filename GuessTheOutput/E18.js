const obj = {
  name: "JS",
  show() {
    console.log(this.name);
  },
};

const fn = obj.show; //const fn = obj.show.bind(obj); //const fn = () => obj.show();
fn();

// ✅ Output:

undefined;


// This is a **classic `this` binding problem** in JavaScript.
// Let’s explain it **technically, step-by-step**, without confusion.

// ---

// ## Code

// ```js
// const obj = {
//   name: "JS",
//   show() {
//     console.log(this.name);
//   },
// };

// const fn = obj.show;
// fn();
// ```

// ---

// ## ❓ What do you EXPECT?

// You might expect:

// ```
// JS
// ```

// But actually it prints:

// ```
// undefined
// ```

// (or throws error in **strict mode**)

// ---

// ## Why does this happen? (Core reason)

// ### 👉 **`this` depends on HOW a function is called, not where it is defined**

// ---

// ## Step-by-step technical explanation

// ### 1️⃣ Method call (works)

// ```js
// obj.show();
// ```

// * Call site has an **object reference**
// * JavaScript sets:

// ```js
// this = obj
// ```

// So:

// ```js
// console.log(this.name); // "JS"
// ```

// ---

// ### 2️⃣ Function reference (your case)

// ```js
// const fn = obj.show;
// fn();
// ```

// Here:

// * You are **copying the function reference**
// * You are **not copying the object**
// * The call site is now:

// ```js
// fn();
// ```

// ⚠️ There is **no object before the dot**

// So JavaScript says:

// ```js
// this = undefined   // in strict mode
// this = window     // in non-strict mode
// ```

// ---

// ## What happens inside `fn()`?

// ```js
// console.log(this.name);
// ```

// * `this` is **NOT obj**
// * `window.name` → usually empty or undefined
// * So output is:

// ```
// undefined
// ```

// ---

// ## 🔑 Key technical rule

// > `this` is determined at **runtime**, based on the **call site**, not the function definition.

// ---

// ## Memory-level view

// ```js
// obj.show  → function reference
// fn        → same function reference
// ```

// But:

// ```js
// obj.show()  → this = obj
// fn()        → this = undefined / window
// ```

// ---

// ## How to FIX it (important for interviews)

// ### ✔ Option 1: `bind`

// ```js
// const fn = obj.show.bind(obj);
// fn(); // JS
// ```

// ---

// ### ✔ Option 2: Arrow function wrapper

// ```js
// const fn = () => obj.show();
// fn(); // JS
// ```

// ---

// ### ✔ Option 3: Call with `call`

// ```js
// fn.call(obj); // JS
// ```

// ---

// ## Interview-ready one-liner

// > When a method is assigned to a variable and called without an object reference, `this` loses its binding and defaults to `undefined` (or `window` in non-strict mode).

// ---

