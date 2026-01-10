for (var i = 0; i < 3; i++) {
 setTimeout(() => console.log(i), 0);
}

// ✅ Output:
3
3
3



// `setTimeout` is asynchronous for **both `var` and `let`**, so **the loop always completes before anything is printed**.

// 👉 **This is a very important point** — the difference in output is **NOT** because of async vs sync.
// It is because of **how `i` is scoped and captured**.

// Let’s explain this **technically and clearly**.

// ---

// ## 1️⃣ Common behavior (for BOTH `var` and `let`)

// ```js
// setTimeout(() => console.log(i), 0);
// ```

// * Callback goes to **task queue**
// * Loop runs fully first
// * Printing happens **after loop finishes**

// ✔ So yes:

// > **The loop completes before any `console.log` executes**

// ---

// ## 2️⃣ Then why output is different?

// ### Because of **how `i` is stored in memory**

// ---

// ## Case 1️⃣ `var i` (function-scoped)

// ```js
// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 0);
// }
// ```

// ### Technical explanation

// * One variable `i` is created in the **function execution context**
// * All callbacks close over the **same variable reference**
// * After loop ends → `i = 3`
// * Callbacks read the same memory

// **Output**

// ```
// 3
// 3
// 3
// ```

// ---

// ## Case 2️⃣ `let i` (block-scoped)

// ```js
// for (let i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 0);
// }
// ```

// ### Technical explanation

// * JavaScript creates a **new lexical environment per iteration**
// * Each iteration has its own `i` binding
// * Each callback closes over a **different binding**

// Even though loop finishes first:

// * Iteration 1 callback → `i = 0`
// * Iteration 2 callback → `i = 1`
// * Iteration 3 callback → `i = 2`

// **Output**

// ```
// 0
// 1
// 2
// ```

// ---

// ## 🔑 Key point (this clears confusion)

// > Asynchronous execution does **not** change variable values.
// > Scope determines **which variable instance** the callback reads from.

// ---

// ## 🧠 One-line interview-ready answer

// > Even though `setTimeout` runs asynchronously in both cases, `var` creates a single shared variable, while `let` creates a new binding per iteration, leading to different outputs.

// ---

// You are thinking in the **right direction** 👍
// If you want next, I can:

// * explain using **execution context & closure diagram**
// * explain with **Node.js event loop internals**
// * give a **1-minute interview explanation**

// Just tell me 🙂
