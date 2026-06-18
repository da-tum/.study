# Academic Study Portal | Wiki Suite

A premium, high-fidelity curation of visual notes, interactive calculators, timed exam simulators, and question banks for computer science academic preparation.

## Features

- 🌳 **Data Structures**: Detailed interactive guides for linear and non-linear data structures, mock viva questions, and verified algorithms.
- ⚛️ **Web Development**: Advanced JavaScript and React architecture documentation, array helper libraries, and written exam materials.
- 🕉️ **Indian Philosophy**: Syllabus mindmaps, Sanskrit vocabulary lexicons, timed exam simulators, and Text-to-Speech narration.
- 🧮 **Computational Mathematics**: Lazy-loaded formula sheets, fully resolved assignments, and step-by-step exam blueprints.
- 🧪 **Engineering Chemistry**: Interactive solvers for EDTA hardness, bomb calorimeters, and galvanic EMF, alongside solved past papers.

## Project Structure

```
.da-tum/.study/
├── chem/             # Chemistry portal with solvers and units
├── comp-maths/       # Mathematics portal with dynamic KaTeX
├── ds/               # Data Structures portal and source code
├── philosophy/       # Indian Philosophy portal with simulations
├── web-dev/          # Web Development portal and study sheets
├── nav-header.css    # Shared navigation bar styles
├── nav-header.js     # Shared navigation bar injection logic
└── index.html        # Main dashboard entry page
```

## Getting Started

To view the portal locally, serve the directory using any static web server.

### Option 1: Python HTTP Server
Run the following command from the root directory:
```bash
python -m http.server 8000
```
Then visit [http://localhost:8000](http://localhost:8000).

### Option 2: Node http-server
Install and run `http-server`:
```bash
npx http-server -p 8000
```
Then visit [http://localhost:8000](http://localhost:8000).

## License

This project is licensed under the Apache 2.0 License - see the `LICENSE` file for details.
