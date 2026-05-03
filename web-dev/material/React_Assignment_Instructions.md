# Important Instructions for React Assignment
*(Beginners Must Follow)*

Please read these points carefully before starting your React landing page assignment.

## 1) Check Terminal Path Before Running Project
Before running the React project, always make sure your terminal is opened inside the correct project folder.
The folder must contain files like: `index.html`, `package.json`, `src`, etc.

✅ **Tip:** If you are not inside the correct folder, use:
```bash
cd folder-name
```
Then run:
```bash
npm run dev
```
⚠️ **Note:** Most errors happen because students run the command in the wrong folder.

## 2) Always Start Component Names with a Capital Letter
React component names must always begin with an uppercase letter.

*   ✅ **Correct:** `function Navbar() {}`
*   ❌ **Wrong:** `function navbar() {}`

⚠️ **Why?** Small letters may cause React to treat it like a regular HTML tag.

## 3) Install Important VS Code Extensions
Install these extensions before coding:

*   ✅ **A) ES7+ React/Redux/React Native Snippets**: Helps generate React code quickly.
*   ✅ **B) Auto Save on Window Change**: Automatically saves files when you switch tabs/windows, reducing mistakes caused by forgotten saves.

## 4) Use `rafce` Shortcut for Fast Component Creation
After creating a component file, type `rafce` and press Enter. This generates the sample React component structure automatically.

**Example:**
```jsx
import React from 'react' 

const Navbar = () => { 
  return <div>Navbar</div> 
} 

export default Navbar
```

## 5) Import Every Component in `App.jsx`
After creating components, don’t forget to import them.

**Example:**
```jsx
import Navbar from "./components/Navbar";
```
Then render them:
```jsx
<Navbar />
```

## 6) Export Components Properly
Every component file must have an export statement.
```jsx
export default Navbar;
```
Without export, the component will not be available to other files.

## 7) CSS File Must Also Be Imported
If you create a CSS file (e.g., `style.css`), remember to import it inside `App.jsx` or `main.jsx`.

**Example:**
```jsx
import "./styles/style.css";
```

## 8) One Component = One Responsibility
Each component should handle only one section.
*   **Navbar** → Menu only
*   **Hero** → Heading + Button
*   **Features** → Cards only
*   **Footer** → Footer content

This keeps code clean and reusable.

## 9) Check Browser Console for Errors
If the UI is not showing correctly, open the browser console:
**Right Click → Inspect → Console**

It helps find:
*   Spelling mistakes
*   Wrong imports
*   Missing exports
*   Syntax errors
