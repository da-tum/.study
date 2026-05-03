# 🎤 Ultimate Viva & Practical Q&A 

This section contains rigorous, logic-based, and theoretical questions designed specifically for your Viva Voce based on your exact JavaScript and React syllabus. Use the dropdowns to test yourself!

## 🟡 JavaScript Foundations

### Core Mechanics & Scope
<details style="margin-bottom: 15px; background: var(--surface2); padding: 15px; border-radius: 8px; border-left: 4px solid var(--accent);">
<summary style="cursor: pointer; font-size: 1.1rem;"><strong>Q: What is the difference between `let`, `const`, and `var`?</strong></summary>
<br>

- **`var`**: Function-scoped. Can be redeclared and reassigned. It is hoisted and initialized with `undefined`.
- **`let`**: Block-scoped (`{}`). Cannot be redeclared in the same scope, but can be reassigned. Hoisted but sits in the "Temporal Dead Zone" until execution reaches it.
- **`const`**: Block-scoped. Cannot be redeclared or reassigned. Must be initialized at the time of declaration. (Note: For objects/arrays, the *reference* is constant, but the contents can be mutated).
</details>

<details style="margin-bottom: 15px; background: var(--surface2); padding: 15px; border-radius: 8px; border-left: 4px solid var(--accent);">
<summary style="cursor: pointer; font-size: 1.1rem;"><strong>Q: Explain "Hoisting" in JavaScript.</strong></summary>
<br>

**Hoisting** is JavaScript's default behavior of moving variable and function declarations to the top of their respective scopes during the compilation phase, before execution. 
- Function declarations are fully hoisted (you can call them before they appear in code).
- `var` declarations are hoisted and initialized as `undefined`.
- `let` and `const` are hoisted but remain uninitialized (in the Temporal Dead Zone), resulting in a `ReferenceError` if accessed early.
</details>

<details style="margin-bottom: 15px; background: var(--surface2); padding: 15px; border-radius: 8px; border-left: 4px solid var(--accent);">
<summary style="cursor: pointer; font-size: 1.1rem;"><strong>Q: How do Closures work in JavaScript? Explain with a short example.</strong></summary>
<br>

A **Closure** is created when a child function retains access to its parent function's scope, even after the parent function has finished executing. 
```javascript
function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  }
}
const counter = outer();
counter(); // 1
counter(); // 2
```
Here, `inner` forms a closure over the `count` variable. This is heavily used for data privacy and currying.
</details>

### Functions & Objects
<details style="margin-bottom: 15px; background: var(--surface2); padding: 15px; border-radius: 8px; border-left: 4px solid var(--accent);">
<summary style="cursor: pointer; font-size: 1.1rem;"><strong>Q: What is a Higher-Order Function (HOF)?</strong></summary>
<br>

A **Higher-Order Function** is a function that does at least one of the following:
1. Takes one or more functions as arguments (e.g., `map`, `filter`, `reduce`).
2. Returns a function as its result.
</details>

<details style="margin-bottom: 15px; background: var(--surface2); padding: 15px; border-radius: 8px; border-left: 4px solid var(--accent);">
<summary style="cursor: pointer; font-size: 1.1rem;"><strong>Q: What is the difference between `==` and `===`?</strong></summary>
<br>

- **`==` (Loose Equality)**: Compares values after attempting **type coercion** (converting them to a common type). `1 == '1'` is `true`.
- **`===` (Strict Equality)**: Compares both **value** and **type** without coercion. `1 === '1'` is `false`. Always use `===` in React!
</details>

<details style="margin-bottom: 15px; background: var(--surface2); padding: 15px; border-radius: 8px; border-left: 4px solid var(--accent);">
<summary style="cursor: pointer; font-size: 1.1rem;"><strong>Q: How does the `this` keyword behave differently in Arrow Functions?</strong></summary>
<br>

Regular functions define their own `this` context based on *how* they are called (e.g., the object calling the method). 
**Arrow functions do not have their own `this` binding.** Instead, they inherit `this` from their surrounding lexical scope at the time they are defined.
</details>

### Asynchronous JavaScript
<details style="margin-bottom: 15px; background: var(--surface2); padding: 15px; border-radius: 8px; border-left: 4px solid var(--accent);">
<summary style="cursor: pointer; font-size: 1.1rem;"><strong>Q: What is the Event Loop?</strong></summary>
<br>

JavaScript is single-threaded. The **Event Loop** is the secret behind its asynchronous behavior.
1. Synchronous code executes in the **Call Stack**.
2. Asynchronous tasks (like `setTimeout` or `fetch`) are handed off to the Web APIs.
3. Once finished, callbacks are pushed to the **Callback Queue** (or Microtask Queue for Promises).
4. The Event Loop constantly checks: *Is the Call Stack empty?* If yes, it pushes the first task from the Queue onto the Call Stack.
</details>

<details style="margin-bottom: 15px; background: var(--surface2); padding: 15px; border-radius: 8px; border-left: 4px solid var(--accent);">
<summary style="cursor: pointer; font-size: 1.1rem;"><strong>Q: What is a Promise? Explain its states.</strong></summary>
<br>

A **Promise** is an object representing the eventual completion (or failure) of an asynchronous operation.
It has three states:
1. **Pending**: Initial state, neither fulfilled nor rejected.
2. **Fulfilled (Resolved)**: The operation completed successfully.
3. **Rejected**: The operation failed.
</details>

<details style="margin-bottom: 15px; background: var(--surface2); padding: 15px; border-radius: 8px; border-left: 4px solid var(--accent);">
<summary style="cursor: pointer; font-size: 1.1rem;"><strong>Q: Code Output Logic: Promises & Microtasks</strong></summary>
<br>

```javascript
console.log("A");
setTimeout(() => console.log("B"), 0);
Promise.resolve().then(() => console.log("C"));
console.log("D");
```
**Output:** A, D, C, B
**Reason:** 
1. `A` and `D` are synchronous (Call Stack).
2. `Promise` goes to the **Microtask Queue** (higher priority).
3. `setTimeout` goes to the **Macrotask Queue** (lower priority).
</details>

---

## ⚛️ React Core Concepts

### Fundamentals & Architecture
<details style="margin-bottom: 15px; background: var(--surface2); padding: 15px; border-radius: 8px; border-left: 4px solid var(--primary);">
<summary style="cursor: pointer; font-size: 1.1rem;"><strong>Q: What is the Virtual DOM and why is it faster?</strong></summary>
<br>

The **Virtual DOM** is a lightweight JavaScript representation of the actual HTML DOM. 
When state changes:
1. React creates a new Virtual DOM.
2. It runs a **diffing algorithm** to compare the new V-DOM with the old one.
3. It calculates the exact minimal changes needed.
4. It performs **Reconciliation**, updating *only* those specific nodes in the Real DOM, avoiding expensive full-page reflows.
</details>

<details style="margin-bottom: 15px; background: var(--surface2); padding: 15px; border-radius: 8px; border-left: 4px solid var(--primary);">
<summary style="cursor: pointer; font-size: 1.1rem;"><strong>Q: Explain Single Page Applications (SPA).</strong></summary>
<br>

An SPA loads a single HTML page upfront (`index.html`). Instead of requesting a new HTML page from the server every time you click a link, JavaScript dynamically rewrites the content on the current page. React Router is used to intercept URL changes and swap components without refreshing the page.
</details>

<details style="margin-bottom: 15px; background: var(--surface2); padding: 15px; border-radius: 8px; border-left: 4px solid var(--primary);">
<summary style="cursor: pointer; font-size: 1.1rem;"><strong>Q: What is JSX and what does Babel do?</strong></summary>
<br>

**JSX** is a syntax extension that allows us to write HTML-like markup inside JavaScript. Browsers cannot understand JSX directly. 
**Babel** is a JavaScript compiler that converts JSX into plain `React.createElement()` JavaScript function calls that the browser can execute.
</details>

<details style="margin-bottom: 15px; background: var(--surface2); padding: 15px; border-radius: 8px; border-left: 4px solid var(--primary);">
<summary style="cursor: pointer; font-size: 1.1rem;"><strong>Q: Functional vs Class Components?</strong></summary>
<br>

- **Class Components:** Older, require `class` and `this` keywords, use lifecycle methods (`componentDidMount`, `render`), and maintain state via `this.state`.
- **Functional Components:** Modern, cleaner syntax, use Hooks (`useState`, `useEffect`) for state and lifecycles, and generally offer better performance as they are pure JavaScript functions without the overhead of class instances.
</details>

### State, Props & Lifecycle
<details style="margin-bottom: 15px; background: var(--surface2); padding: 15px; border-radius: 8px; border-left: 4px solid var(--primary);">
<summary style="cursor: pointer; font-size: 1.1rem;"><strong>Q: What is the difference between State and Props?</strong></summary>
<br>

- **State**: Managed *inside* the component. It is mutable. When state changes, the component re-renders.
- **Props (Properties)**: Passed *from* parent *to* child. They are **read-only** (immutable) inside the receiving component. Data flow is strictly unidirectional.
</details>

<details style="margin-bottom: 15px; background: var(--surface2); padding: 15px; border-radius: 8px; border-left: 4px solid var(--primary);">
<summary style="cursor: pointer; font-size: 1.1rem;"><strong>Q: Coding Question: Immutability in State</strong></summary>
<br>

```javascript
const [user, setUser] = useState({ name: "Alice", age: 20 });
// User wants to update age to 21. Which is correct?

// Option A:
user.age = 21;
setUser(user);

// Option B:
setUser({ ...user, age: 21 });
```
**Answer: Option B.** 
In React, state must be treated as **immutable**. Option A mutates the object directly, meaning the object reference doesn't change, so React won't trigger a re-render. Option B creates a brand new object, changing the reference and successfully triggering a re-render.
</details>

<details style="margin-bottom: 15px; background: var(--surface2); padding: 15px; border-radius: 8px; border-left: 4px solid var(--primary);">
<summary style="cursor: pointer; font-size: 1.1rem;"><strong>Q: Why do we need the `key` prop when rendering lists?</strong></summary>
<br>

When mapping over an array to render components, React needs a unique `key` prop for each item. This helps React's diffing algorithm identify which items have changed, been added, or been removed. Using array indices as keys is bad practice if the list can be reordered or filtered.
</details>

<details style="margin-bottom: 15px; background: var(--surface2); padding: 15px; border-radius: 8px; border-left: 4px solid var(--primary);">
<summary style="cursor: pointer; font-size: 1.1rem;"><strong>Q: What is Prop Drilling, and how do you fix it?</strong></summary>
<br>

**Prop Drilling** is the process of passing data from a high-level parent component down to a deeply nested child component through multiple intermediate components that don't actually need the data.
**Solution:** Use **State Uplifting**, the **Context API**, or a state management library like **Redux** to provide data globally to any component that needs it, bypassing the intermediate layers.
</details>

### Hooks Mastery
<details style="margin-bottom: 15px; background: var(--surface2); padding: 15px; border-radius: 8px; border-left: 4px solid var(--primary);">
<summary style="cursor: pointer; font-size: 1.1rem;"><strong>Q: Explain the `useEffect` hook and its dependency array.</strong></summary>
<br>

`useEffect` handles side effects (fetching data, DOM manipulation, timers).
```javascript
useEffect(() => {
  // Code runs based on the dependency array
  return () => { // Cleanup function (ComponentWillUnmount equivalent) }
}, [dependencies]);
```
- **No Array:** Runs on *every* render.
- **`[]` (Empty Array):** Runs *only once* when the component mounts (like `componentDidMount`).
- **`[data]`:** Runs on mount, and whenever `data` changes (like `componentDidUpdate`).
</details>

<details style="margin-bottom: 15px; background: var(--surface2); padding: 15px; border-radius: 8px; border-left: 4px solid var(--primary);">
<summary style="cursor: pointer; font-size: 1.1rem;"><strong>Q: What is the difference between `useState` and `useRef`?</strong></summary>
<br>

- `useState`: Triggers a component **re-render** when the state value changes. Used for data that affects the UI.
- `useRef`: Does **not** trigger a re-render when its `.current` value changes. Used to store mutable values across renders (like timer IDs) or to directly access real DOM elements.
</details>

<details style="margin-bottom: 15px; background: var(--surface2); padding: 15px; border-radius: 8px; border-left: 4px solid var(--primary);">
<summary style="cursor: pointer; font-size: 1.1rem;"><strong>Q: What are `useMemo` and `useCallback` used for?</strong></summary>
<br>

Both are used for **Performance Optimization**:
- **`useMemo`**: Caches (memoizes) the *result* of an expensive calculation so it doesn't run on every render unless its dependencies change.
- **`useCallback`**: Caches a *function definition* so that a new function reference isn't created on every render, preventing unnecessary re-renders of child components that receive the function as a prop.
</details>

### Advanced Topics
<details style="margin-bottom: 15px; background: var(--surface2); padding: 15px; border-radius: 8px; border-left: 4px solid var(--primary);">
<summary style="cursor: pointer; font-size: 1.1rem;"><strong>Q: Axios vs Fetch API?</strong></summary>
<br>

- **Fetch**: Built into modern browsers. Returns a Promise. Requires a two-step process to get JSON (first `res.json()`, then process data). Does not automatically throw errors for HTTP error statuses (like 404 or 500).
- **Axios**: A third-party library. Automatically transforms JSON data. Throws errors for bad HTTP responses. Easier syntax for setting headers and interceptors.
</details>

<details style="margin-bottom: 15px; background: var(--surface2); padding: 15px; border-radius: 8px; border-left: 4px solid var(--primary);">
<summary style="cursor: pointer; font-size: 1.1rem;"><strong>Q: Explain React Router basics (`BrowserRouter`, `Routes`, `Route`).</strong></summary>
<br>

- `BrowserRouter`: Wraps the app and enables HTML5 history API tracking.
- `Routes`: A container that looks through all its child `Route` components to find the best match for the current URL.
- `Route`: Defines a specific path and the Component that should be rendered when that path is active (`<Route path="/about" element={<About />} />`).
- `Link`: Used instead of `<a>` tags to navigate without causing a page refresh.
</details>

<details style="margin-bottom: 15px; background: var(--surface2); padding: 15px; border-radius: 8px; border-left: 4px solid var(--primary);">
<summary style="cursor: pointer; font-size: 1.1rem;"><strong>Q: What is Redux Toolkit and how does it differ from Context API?</strong></summary>
<br>

**Redux Toolkit (RTK)** is the official, recommended way to write Redux logic. It simplifies state management with centralized "slices" and a global store. 
**Differences:**
- Context API is built into React and is great for low-frequency updates (like light/dark themes or auth state).
- Redux is a robust external library designed for high-frequency, complex state updates across massive applications, providing advanced debugging tools (Redux DevTools) and middleware (Thunk/Saga) for async actions.
</details>

<details style="margin-bottom: 15px; background: var(--surface2); padding: 15px; border-radius: 8px; border-left: 4px solid var(--primary);">
<summary style="cursor: pointer; font-size: 1.1rem;"><strong>Q: Redux Thunk vs Redux Saga?</strong></summary>
<br>

Both are Redux middlewares used to handle asynchronous side effects (like API calls).
- **Thunk**: Simpler. It allows action creators to return a function (which can dispatch actions asynchronously) instead of just an object.
- **Saga**: More complex but powerful. Uses ES6 Generator functions (`yield`). Great for highly complex async flows (like race conditions, cancelling requests, or debouncing).
</details>

---

## 🔥 Nightmare Mode: Niche & Advanced Concepts
*Prepare to absolutely destroy the examiner with these deep-dive questions.*

<details style="margin-bottom: 15px; background: var(--surface2); padding: 15px; border-radius: 8px; border-left: 4px solid var(--danger);">
<summary style="cursor: pointer; font-size: 1.1rem;"><strong>Q: Explain Prototypal Inheritance in JavaScript.</strong></summary>
<br>

Unlike class-based languages (like Java), JavaScript objects inherit directly from other objects via an internal link called the `[[Prototype]]` (accessible via `__proto__`). When you try to access a property on an object, JavaScript searches the object itself. If it doesn't find it, it traverses up the "Prototype Chain" to its parent, then its grandparent, all the way until it hits `null`.
</details>

<details style="margin-bottom: 15px; background: var(--surface2); padding: 15px; border-radius: 8px; border-left: 4px solid var(--danger);">
<summary style="cursor: pointer; font-size: 1.1rem;"><strong>Q: What is the exact difference between `call`, `apply`, and `bind`?</strong></summary>
<br>

All three are used to explicitly set the `this` context for a function:
- **`call(thisContext, arg1, arg2)`**: Invokes the function immediately. Arguments are passed individually.
- **`apply(thisContext, [arg1, arg2])`**: Invokes the function immediately. Arguments are passed as an array.
- **`bind(thisContext, arg1, arg2)`**: Does *not* invoke the function immediately. It returns a **new function** with the `this` keyword permanently bound.
</details>

<details style="margin-bottom: 15px; background: var(--surface2); padding: 15px; border-radius: 8px; border-left: 4px solid var(--danger);">
<summary style="cursor: pointer; font-size: 1.1rem;"><strong>Q: What is "Event Delegation" and why is it highly performant?</strong></summary>
<br>

Instead of attaching an event listener to 1,000 individual list items (`<li>`), you attach a single event listener to their parent (`<ul>`). Because events **bubble up** the DOM tree in JavaScript, the parent can catch events triggered by its children. You then check `event.target` to see exactly which child was clicked. This saves massive amounts of memory.
</details>

<details style="margin-bottom: 15px; background: var(--surface2); padding: 15px; border-radius: 8px; border-left: 4px solid var(--danger);">
<summary style="cursor: pointer; font-size: 1.1rem;"><strong>Q: Code Output: Closure "Stale State" Trap in React</strong></summary>
<br>

```javascript
function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log(count);
    }, 1000);
    return () => clearInterval(timer);
  }, []); // Empty dependency array

  return <button onClick={() => setCount(c => c + 1)}>Increment</button>;
}
```
**Q: What happens if the user clicks increment 5 times? What prints to the console?**
<br>
**A:** The console will print `0` every second, infinitely.
**Why?** Because the `useEffect` has an empty dependency array (`[]`), the closure inside the interval only captures the state value from the *first* render, where `count` was `0`. It is "stale." To fix it, you must add `count` to the dependency array.
</details>

<details style="margin-bottom: 15px; background: var(--surface2); padding: 15px; border-radius: 8px; border-left: 4px solid var(--danger);">
<summary style="cursor: pointer; font-size: 1.1rem;"><strong>Q: What is React Fiber Architecture?</strong></summary>
<br>

Introduced in React 16, **Fiber** is a complete rewrite of React's core reconciliation algorithm. 
Older React (Stack Reconciler) performed updates synchronously, which could lock up the main thread during heavy rendering. **Fiber allows rendering to be interruptible.** React can pause an ongoing render, yield control to the browser to handle high-priority tasks (like user typing or animations), and then resume rendering where it left off.
</details>

<details style="margin-bottom: 15px; background: var(--surface2); padding: 15px; border-radius: 8px; border-left: 4px solid var(--danger);">
<summary style="cursor: pointer; font-size: 1.1rem;"><strong>Q: What are React Synthetic Events?</strong></summary>
<br>

When you write `onClick` in React, you are not actually interacting with the browser's native `click` event. React wraps the native browser event in a cross-browser wrapper called a **SyntheticEvent**. This ensures that the event behaves identically across all browsers (Chrome, Firefox, Safari) and pools events for performance optimization.
</details>

<details style="margin-bottom: 15px; background: var(--surface2); padding: 15px; border-radius: 8px; border-left: 4px solid var(--danger);">
<summary style="cursor: pointer; font-size: 1.1rem;"><strong>Q: `useEffect` vs `useLayoutEffect`?</strong></summary>
<br>

- **`useEffect`**: Runs **asynchronously** *after* the browser has painted the DOM. This is good for 99% of cases (data fetching) so you don't block the UI.
- **`useLayoutEffect`**: Runs **synchronously** *immediately after* React has mutated the DOM but *before* the browser paints it to the screen. Use this only when you need to read the DOM layout (like measuring an element's width) and re-render synchronously to prevent screen flickering.
</details>
